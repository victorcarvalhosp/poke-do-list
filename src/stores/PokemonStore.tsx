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

    generateRandomPokemon(task: string): IPokemon;

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
        const evolveTo = pokemonVarieties[evolution.to];
        pokemon.name = evolveTo.name;
        pokemon.variety = evolveTo.id;
        await FirebaseApi.updatePokemon(this.root.userStore.user.uid, pokemon);
        if (pokemon.id === this.root.userStore.user.partnerPokemon?.id) {
            await this.root.userStore.updatePartner(pokemon);
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
        await this.registerPokedex(pokemon.variety);
        await this.levelUpPartner();
    }

    private async registerPokedex(varietyId: number) {
        const pokedexRegister: Record<number, IPokedexStatus> = this.root.userStore.user.pokedex;
        if (!pokedexRegister[pokemonVarieties[varietyId].specie] || !pokedexRegister[pokemonVarieties[varietyId].specie].varieties[varietyId]) {
            pokedexRegister[pokemonVarieties[varietyId].specie] = {
                caught: true,
                specieId: pokemonVarieties[varietyId].specie,
                varieties: {...pokedexRegister[pokemonVarieties[varietyId].specie].varieties, [varietyId]: {caught: true, varietyId: varietyId}}
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
            await FirebaseApi.updatePokemon(this.root.userStore.user.uid, myPokemon);
            await this.root.userStore.updatePartner(myPokemon);
        }
        this.showLevelUpAnimation = false;
    }

    @action
    generatePokemonWithRandomAttributes(pokemonVarietyId: number, task: string): IPokemon {
        const variety: IPokemonVariety = pokemonVarieties[pokemonVarietyId];
        //TODO Generate random attributes as id, gender, stats, level
        return {
            id: makeid(),
            name: pokemonSpecies[variety.specie].name,
            variety: variety.id,
            level: 1,
            task: task,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };
    }

    @action
    generateRandomPokemon(task: string): IPokemon {
        // const randomId: number = getRandomInt(1, 9);
        const variety: IPokemonVariety = pokemonVarieties[37];
        return {id: makeid(), name: pokemonSpecies[variety.specie].name, variety: variety.id, level: 1, task: task};
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
