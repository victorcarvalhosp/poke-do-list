import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IPokemon, Pokemon} from "../models/Pokemon";
import {getRandomInt, makeid} from "../utils/utils";
import {IPokemonVariety} from "../models/PokemonVariety";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {pokemonSpecies} from "../data/pokemon-species";


export interface IPokemonStore {
    modalOpen: boolean;
    list: IPokemon[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    selected: IPokemon;
    showLevelUpAnimation: boolean;

    openModal(): void;

    closeModal(): void;

    loadList(): void;

    selectInitialPokemon(selectedPokemon: IPokemonVariety): void;

    setPokemonAsPartner(selectedPokemon: IPokemon): void;

    caughtPokemon(pokemon: IPokemon): void;

    generateRandomPokemon(): IPokemon;

    generatePokemonWithRandomAttributes(pokemonVarietyId: number): IPokemon

    levelUpPartner(): void;
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

    @action
    async loadList() {
        this.loadingList = true;
        const result = await FirebaseApi.getPokemons(this.root.userStore.user.uid);
        result.onSnapshot(snapshot => {
            const list: IPokemon[] = [];
            snapshot.forEach(doc => {
                list.push(doc.data() as IPokemon);
            });
            this.list = list;
            console.log(list);
            this.loadingList = false;
            this.loadingListErrorMessage = '';
        }, err => {
            console.log(err);
            this.loadingListErrorMessage = 'Something went wrong';
            this.loadingList = false;
        })
    }

    @action
    async selectInitialPokemon(selectedPokemon: IPokemonVariety) {
        const initialPkmn = this.generatePokemonWithRandomAttributes(selectedPokemon.id);
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
        //Add some random properties for attack, height...
        await FirebaseApi.caughtPokemon(this.root.userStore.user.uid, myPokemon);
        await this.levelUpPartner();
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
    generatePokemonWithRandomAttributes(pokemonVarietyId: number): IPokemon {
        const variety: IPokemonVariety = pokemonVarieties[pokemonVarietyId];
        //TODO Generate random attributes as id, gender, stats, level
        return {id: makeid(), name: pokemonSpecies[variety.specie].name, variety: variety.id, level: 1};
    }

    @action
    generateRandomPokemon(): IPokemon {
        const randomId: number = getRandomInt(1, 3);
        const variety: IPokemonVariety = pokemonVarieties[randomId];
        return {id: makeid(), name: pokemonSpecies[variety.specie].name, variety: variety.id, level: 1};
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
