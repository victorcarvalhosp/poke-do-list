import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IPokemon, Pokemon} from "../models/Pokemon";
import {getRandomInt, makeid} from "../utils/utils";
import {IPokemonVariety} from "../models/PokemonVariety";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {pokemonSpecies} from "../data/pokemon-species";
import firebase from "firebase";
import {IEvolution} from "../models/Evolution";
import {Project} from "../models/Project";
import {IPokedexStatus} from "../models/PokedexStatus";
import {pokemonEncounters} from "../data/pokemon-encounters";

export interface IPokemonStore {
    modalOpen: boolean;
    list: IPokemon[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    selected: IPokemon;
    showLevelUpAnimation: boolean;
    loadingSave: boolean;


    openModal(): void;

    closeModal(): void;

    loadList(): void;

    selectInitialPokemon(selectedPokemon: IPokemonVariety): void;

    setPokemonAsPartner(selectedPokemon: IPokemon): void;

    caughtPokemon(pokemon: IPokemon): void;

    generateRandomPokemon(task: ITask): IPokemon;

    generatePokemonWithRandomAttributes(pokemonVarietyId: number, task: string): IPokemon

    levelUpPartner(): void;

    evolvePokemon(pokemon: IPokemon, evolution: IEvolution): void;

    transferPokemon(pokemon: IPokemon): void;
}

export class PokemonStore implements IPokemonStore {

    constructor(public root: RootStore) {
    }

    @observable modalOpen = false;

    @observable list: IPokemon[] = [];
    @observable loadingList: boolean = true;
    @observable loadingListErrorMessage: string = '';
    @observable selected: IPokemon = new Pokemon();
    @observable showLevelUpAnimation: boolean = false;
    @observable loadingSave: boolean = true;

    @action
    async loadList() {
        console.log('CALLED LOAD LIST POKEMON');
        this.loadingList = true;
        const result = await FirebaseApi.getPokemons(this.root.userStore.user.uid);
        result.onSnapshot(snapshot => {
            const list: IPokemon[] = [];
            snapshot.forEach(doc => {
                list.push(doc.data() as IPokemon);
            });
            this.list = list;
            this.loadingList = false;
            this.loadingListErrorMessage = '';
        }, err => {
            console.log(err);
            this.loadingListErrorMessage = 'Something went wrong';
            this.loadingList = false;
        })
    }

    @action
    async evolvePokemon(pokemon: IPokemon, evolution: IEvolution) {
        try {
            const evolveTo = pokemonVarieties[evolution.to];
            pokemon.name = evolveTo.name;
            pokemon.variety = evolveTo.id;
            this.registerPokedex(pokemon.variety, true);
            await FirebaseApi.updatePokemon(this.root.userStore.user.uid, pokemon);
            if (pokemon.id === this.root.userStore.user.partnerPokemon?.id) {
                await this.root.userStore.updatePartner(pokemon);
            }
        } catch (e) {
            this.root.uiStore.showToast("Something went wrong", "danger");
        }

    }

    @action
    async transferPokemon(pokemon: IPokemon) {
        try {
            this.loadingSave = true;
            if (pokemon.id) {
                await FirebaseApi.removePokemon(this.root.userStore.user.uid, pokemon.id);
            }
            this.root.uiStore.showToast('Pokémon transfered');
            this.levelUpPartner();
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            this.loadingSave = false;
            this.root.uiStore.showToast('Some error happened when removing, please try again.');
        }
    }


    @action
    async selectInitialPokemon(selectedPokemon: IPokemonVariety) {
        const initialPkmn = this.generatePokemonWithRandomAttributes(selectedPokemon.id, "Initial Pokémon");
        this.caughtPokemon(initialPkmn);
        this.setPokemonAsPartner(initialPkmn);
        await this.root.userStore.setUser(this.root.userStore.user.uid);
    };

    @action
    async setPokemonAsPartner(selectedPokemon: IPokemon) {
        await FirebaseApi.setPokemonAsPartner(this.root.userStore.user.uid, selectedPokemon);
    };

    @action
    async caughtPokemon(pokemon: IPokemon) {
        const myPokemon = pokemon;
        myPokemon.date = firebase.firestore.Timestamp.fromDate(new Date());
        //Add some random properties for attack, height...
        await FirebaseApi.caughtPokemon(this.root.userStore.user.uid, myPokemon);
        await this.registerPokedex(pokemon.variety, true);
        await this.levelUpPartner();
    }

    private async registerPokedex(varietyId: number, caught: boolean) {
        const pokedexRegister: Record<number, IPokedexStatus> = this.root.userStore.user.pokedex;
        if (!pokedexRegister[pokemonVarieties[varietyId].specie] || !pokedexRegister[pokemonVarieties[varietyId].specie].varieties[varietyId] || !pokedexRegister[pokemonVarieties[varietyId].specie].varieties[varietyId].caught) {
            pokedexRegister[pokemonVarieties[varietyId].specie] = {
                caught: caught,
                specieId: pokemonVarieties[varietyId].specie,
                varieties: {
                    ...pokedexRegister[pokemonVarieties[varietyId].specie]?.varieties,
                    [varietyId]: {caught: caught, varietyId: varietyId}
                }
            };
            await FirebaseApi.updatePokedex(this.root.userStore.user.uid, pokedexRegister);
        }
    }

    @action
    async levelUpPartner() {
        this.showLevelUpAnimation = true;
        const myPokemon = this.root.userStore.user.partnerPokemon;
        if (myPokemon) {
            myPokemon.level = myPokemon.level + 1;
            const { hp , atk, def, speed} = this.calculatePokemonStats(pokemonVarieties[myPokemon.variety], {ivHp: myPokemon.ivHp, ivAtk: myPokemon.ivAtk, ivDef: myPokemon.ivSpeed, ivSpeed: myPokemon.ivSpeed}, myPokemon.level);
            myPokemon.hp = hp;
            myPokemon.atk = atk;
            myPokemon.def = def;
            myPokemon.speed = speed;
            await FirebaseApi.updatePokemon(this.root.userStore.user.uid, myPokemon);
            await this.root.userStore.updatePartner(myPokemon);
        }
        this.showLevelUpAnimation = false;
    }

    @action
    generatePokemonWithRandomAttributes(pokemonVarietyId: number, task: string): IPokemon {
        const variety: IPokemonVariety = pokemonVarieties[pokemonVarietyId];
        const {ivHp, ivAtk, ivDef, ivSpeed} = this.generateIvs();
        const {hp, atk, def, speed} = this.calculatePokemonStats(variety, {ivHp, ivAtk, ivDef, ivSpeed}, 1);
        //TODO Generate random attributes as id, gender, stats, level, iv
        return {
            id: makeid(),
            name: pokemonSpecies[variety.specie].name,
            variety: variety.id,
            level: 1,
            task: task,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            actualHp: variety.baseHp,
            hp: hp,
            atk: atk,
            def: def,
            speed: speed,
            ivHp: ivHp,
            ivAtk: ivAtk,
            ivDef: ivDef,
            ivSpeed: ivSpeed,
            moves: [variety.moves[getRandomInt(0, variety.moves.length-1)]]
        };
    }

    private calculatePokemonStats(pokemon: IPokemonVariety, ivs: { ivHp: number; ivAtk: number; ivDef: number; ivSpeed: number }, level: number): { hp: number, atk: number, def: number, speed: number } {
        /* Simplified version of pokémon stats formulas => More details here: https://www.dragonflycave.com/mechanics/stats*/
        const hp: number = this.calculateHpStat(pokemon.baseHp, ivs.ivHp, level);
        const atk: number = this.calculateStat(pokemon.baseAtk, ivs.ivAtk, level);
        const def: number = this.calculateStat(pokemon.baseDef, ivs.ivDef, level);
        const speed: number = this.calculateStat(pokemon.baseSpeed, ivs.ivSpeed, level);

        return {hp: hp, atk: atk, def: def, speed: speed};
    }

    private calculateHpStat(baseHpStat: number, ivHp: number, level: number) {
        return Math.floor((2 * baseHpStat + ivHp) * level / 100 + level + 10);
    }

    private calculateStat(baseStat: number, iv: number, level: number) {
        return Math.floor(Math.floor((2 * baseStat + iv) * level / 100 + 5) * 1);
    }

    private generateIvs() {
        return {
            ivHp: getRandomInt(0, 31),
            ivAtk: getRandomInt(0, 31),
            ivDef: getRandomInt(0, 31),
            ivSpeed: getRandomInt(0, 31)
        };
    }

    @action
    generateRandomPokemon(task: ITask): IPokemon {
        // let allVarieties = "";
        // for (let i = 1; i <= 251; i++){
        //     allVarieties += `{varietyId: ${i}},`
        // }
        // console.log(allVarieties);
        const tier = this.calculateTierPokemonEncounter();
        console.log(task.project?.theme || "inbox " + tier);
        // @ts-ignore
        const selectedTier = pokemonEncounters[task.project?.theme || "inbox"][tier];
        // @ts-ignore
        const randomPosition: number = getRandomInt(0, selectedTier.length - 1);
        console.log(randomPosition);
        // @ts-ignore
        console.log(selectedTier[randomPosition]);
        // @ts-ignore
        const variety: IPokemonVariety = pokemonVarieties[selectedTier[randomPosition].varietyId];
        this.registerPokedex(variety.id, false);
        return {
            id: makeid(),
            name: pokemonSpecies[variety.specie].name,
            variety: variety.id,
            level: 1,
            task: task.title,
            actualHp: variety.baseHp,
            hp: variety.baseHp,
            atk: variety.baseAtk,
            def: variety.baseDef,
            speed: variety.baseDef,
            ivAtk: 15,
            ivDef: 15,
            ivHp: 15,
            ivSpeed: 15,
            moves: [variety.moves[getRandomInt(0, variety.moves.length-1)]]
        };
    }

    private calculateTierPokemonEncounter(): string {
        let tiers = ["tier1", "tier2", "tier3", "tier4", "tier5"];
        const tiersweight = [5.4, 3, 1, 0.5, 0.1]; //weight of each element above
        const totalweight = eval(tiersweight.join("+")) //get total weight (in this case, 10)
        const weighedTiers = new Array() //new array to hold "weighted" tiers
        let currentTier = 0

        while (currentTier < tiers.length) { //step through each fruit[] element
            for (let i = 0; i < tiersweight[currentTier]; i++)
                weighedTiers[weighedTiers.length] = tiers[currentTier]
            currentTier++
        }
        let randomnumber = Math.floor(Math.random() * totalweight)
        return weighedTiers[randomnumber];
    }

    @action
    openModal() {
        this.modalOpen = true;
    }

    @action
    closeModal() {
        this.modalOpen = false;
    }


}
