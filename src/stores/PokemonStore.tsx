import {action, computed, observable} from 'mobx'
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
import {IPokemonDetailsToRandomGeneration} from "../models/IExploreItem";
import {IMove} from "../models/IMove";
import {OrderPokemonBy} from "../models/conditional-types-definitions";

export interface IPokemonStore {
    modalOpen: boolean;
    list: IPokemon[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    selected: IPokemon;
    showLevelUpAnimation: boolean;
    loadingSave: boolean;
    orderBy: OrderPokemonBy;
    listOrdered: IPokemon[];

    openModal(): void;

    closeModal(): void;

    loadList(): void;

    selectInitialPokemon(selectedPokemon: IPokemonVariety): void;

    setPokemonAsPartner(selectedPokemon: IPokemon): void;

    caughtPokemon(pokemon: IPokemon): void;

    registerPokedex(varietyId: number, caught: boolean): void;

    generateRandomPokemon(task: ITask): IPokemon;

    generatePokemonWithRandomAttributes(pokemonVarietyId: number, task: string, details?: IPokemonDetailsToRandomGeneration): IPokemon

    levelUp(pokemon: IPokemon, levelsUp: number, usingPowerUp: boolean): void;

    levelUpPartner(): void;

    evolvePokemon(pokemon: IPokemon, evolution: IEvolution): void;

    transferPokemon(pokemon: IPokemon): void;

    setOrderBy(orderBy: OrderPokemonBy): void;
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
    @observable orderBy: OrderPokemonBy = "numeric";

    @computed
    get listOrdered(): IPokemon[]{
        console.log('CALL LIST ORDERED');
        if(this.orderBy === "alphabetical"){
            return this.list.sort((a, b)=>{
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
        } else if(this.orderBy === "numeric")   {
            return this.list.sort((a,b) => a.variety - b.variety );
        } else if (this.orderBy === "level"){
            return this.list.sort((a,b) => b.level - a.level );
        }
        return this.list;
    }

    @action
    setOrderBy(orderBy: OrderPokemonBy){
        console.log('ORDER BY' + orderBy);
        this.orderBy = orderBy;
    }


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
            const {hp, atk, def, speed} = this.calculatePokemonStats(pokemonVarieties[pokemon.variety], {
                ivHp: pokemon.ivHp,
                ivAtk: pokemon.ivAtk,
                ivDef: pokemon.ivSpeed,
                ivSpeed: pokemon.ivSpeed
            }, pokemon.level);
            pokemon.hp = hp;
            pokemon.atk = atk;
            pokemon.def = def;
            pokemon.speed = speed;
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
            await this.root.userStore.updatePowerUps(this.root.userStore.user.powerUps+1);
            this.root.uiStore.showToast('Pokémon transfered');
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

    @action
    public async registerPokedex(varietyId: number, caught: boolean) {
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
            this.levelUp(myPokemon, 1, false);
        }
        this.showLevelUpAnimation = false;
    }

    @action
    async levelUp(pokemon: IPokemon, levelsUp: number,  usingPowerUp: boolean) {
            pokemon.level = pokemon.level + levelsUp;
            const {hp, atk, def, speed} = this.calculatePokemonStats(pokemonVarieties[pokemon.variety], {
                ivHp: pokemon.ivHp,
                ivAtk: pokemon.ivAtk,
                ivDef: pokemon.ivSpeed,
                ivSpeed: pokemon.ivSpeed
            }, pokemon.level);
            pokemon.hp = hp;
            pokemon.atk = atk;
            pokemon.def = def;
            pokemon.speed = speed;
            await FirebaseApi.updatePokemon(this.root.userStore.user.uid, pokemon);
            if(pokemon.id === this.root.userStore.user.partnerPokemon?.id){
                await this.root.userStore.updatePartner(pokemon);
            }
            if(usingPowerUp){
                await this.root.userStore.updatePowerUps(this.root.userStore.user.powerUps-levelsUp);
            }
    }

    @action
    generatePokemonWithRandomAttributes(pokemonVarietyId: number, task: string, details?: IPokemonDetailsToRandomGeneration): IPokemon {
        const variety: IPokemonVariety = pokemonVarieties[pokemonVarietyId];
        const {ivHp, ivAtk, ivDef, ivSpeed} = this.generateIvs();
        let level = 1;
        let gigantamax = false;
        if (details) {
            if (details.level) {
                level = details.level;
            }
            if (details.gigantamax) {
                gigantamax = details.gigantamax;
            }
        }
        const {hp, atk, def, speed} = this.calculatePokemonStats(variety, {
            ivHp,
            ivAtk,
            ivDef,
            ivSpeed
        }, level, gigantamax);
        //TODO Generate random attributes as id, gender, stats, level, iv
        return {
            id: makeid(),
            name: pokemonSpecies[variety.specie].name,
            variety: variety.id,
            level: level,
            task: task,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            hp: hp,
            actualHp: hp,
            atk: atk,
            def: def,
            speed: speed,
            ivHp: ivHp,
            ivAtk: ivAtk,
            ivDef: ivDef,
            ivSpeed: ivSpeed,
            gigantamax: gigantamax,
            moves: this.getRandomMoves(variety)
        };
    }

    private getRandomMoves(variety: IPokemonVariety): number[] {
        const moves: number[] = []
        moves.push(variety.moves[getRandomInt(0, variety.moves.length - 1)]);
        if (variety.moves.length > 1) {
            while (moves.length < 2) {
                const nextRandomMove = getRandomInt(0, variety.moves.length - 1);
                if (variety.moves.filter(v => v === nextRandomMove).length === 0) {
                    moves.push(variety.moves[nextRandomMove]);
                }
            }
        }
        return moves;
    }

    private calculatePokemonStats(pokemon: IPokemonVariety, ivs: { ivHp: number; ivAtk: number; ivDef: number; ivSpeed: number }, level: number, gigantamax?: boolean): { hp: number, atk: number, def: number, speed: number } {
        /* Simplified version of pokémon stats formulas => More details here: https://www.dragonflycave.com/mechanics/stats*/
        const hp: number = this.calculateHpStat(pokemon.baseHp, ivs.ivHp, level);
        const atk: number = this.calculateStat(pokemon.baseAtk, ivs.ivAtk, level);
        const def: number = this.calculateStat(pokemon.baseDef, ivs.ivDef, level);
        const speed: number = this.calculateStat(pokemon.baseSpeed, ivs.ivSpeed, level);

        return {hp: gigantamax ? hp * 2 : hp, atk: atk, def: gigantamax ? def * 1.2 : def, speed: speed};
    }

    private calculateHpStat(baseHpStat: number, ivHp: number, level: number) {
        return Math.floor(((2 * baseHpStat + ivHp) * level / 100 + level + 10) * 2);
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
        const selectedTier = pokemonEncounters[task.project?.theme || (this.root.userStore.premium ? "inbox-premium" : "inbox")][tier];
        // @ts-ignore
        const randomPosition: number = getRandomInt(0, selectedTier.length - 1);
        console.log(randomPosition);
        // @ts-ignore
        console.log(selectedTier[randomPosition]);
        // @ts-ignore
        const variety: IPokemonVariety = pokemonVarieties[selectedTier[randomPosition].varietyId];
        this.registerPokedex(variety.id, false);
        return this.generatePokemonWithRandomAttributes(variety.id, task.title);
    }

    private calculateTierPokemonEncounter(): string {
        let tiers = ["tier1", "tier2", "tier3", "tier4", "tier5"];
        const tiersweight = [5, 3.4, 1, 0.5, 0.1]; //weight of each element above
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
