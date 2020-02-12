import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IPokemon} from "../models/Pokemon";
import {getRandomInt, makeid} from "../utils/utils";
import {IPokemonVariety} from "../models/PokemonVariety";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {pokemonSpecies} from "../data/pokemon-species";


export interface ITaskStore {
    modalOpen: boolean;
    list: ITask[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    selected: ITask;
    loadingSave: boolean;

    openModal(): void;

    closeModal(): void;

    loadList(): void;

    save(task: ITask): void;

    completeTask(task: ITask): void;
}

export class TaskStore implements ITaskStore {

    constructor(public root: RootStore) {
    }

    @observable modalOpen = false;

    @observable list: ITask[] = [];
    @observable loadingList: boolean = true;
    @observable loadingListErrorMessage: string = '';
    @observable selected: ITask = new Task();
    @observable loadingSave: boolean = false;

    @action
    async loadList() {
        this.loadingList = true;
        const result = await FirebaseApi.getTasks(this.root.userStore.user.uid);
        result.onSnapshot(snapshot => {
            const list: ITask[] = [];
            snapshot.forEach(doc => {
                list.push(doc.data() as ITask);
            });
            this.list = list;
            console.log(list);
            this.loadingList = false;
            // this.accountsLoaded = true;
            // this.loadingListErrorMessage = '';
        }, err => {
            console.log(err);
            // this.loadingListErrorMessage = 'Something went wrong';
            this.loadingList = false;
        })
    }

    @action
    async save(task: ITask) {
        try {
            console.log('SERVICE', task);
            this.loadingSave = true;
            task.pokemon = this.root.pokemonStore.generateRandomPokemon(task.title);
            await FirebaseApi.saveTask(this.root.userStore.user.uid, task);
            this.selected = new Task();
            // this.root.uiStore.showToast('Account saved');
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            console.log(e);
            this.loadingSave = false;
            // this.root.uiStore.showToast('Some error happened when saving, please try again.');
        }
    }

    @action
    async completeTask(task: ITask) {
        if (task.pokemon) {
            await this.root.pokemonStore.caughtPokemon(task.pokemon);
        }
        if(task.id){
            await FirebaseApi.completeTask(this.root.userStore.user.uid, task.id);
        }
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
