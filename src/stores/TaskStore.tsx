import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {FirebaseApi} from "../apis/FirebaseApi";
import {ITaskFilters, TaskFilters} from "../models/TaskFilters";
import dayjs from "dayjs";
import firebase from "firebase";
import {addDelay} from "../utils/delay";


export interface ITaskStore {
    modalOpen: boolean;
    list: ITask[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    selected: ITask;
    loadingSave: boolean;

    openModal(task: ITask): void;

    closeModal(): void;

    loadList(): void;

    save(task: ITask): void;

    remove(taskId: string): void

    completeTask(task: ITask): void;

    filters: ITaskFilters;

    loadListByProject(projectId: string): void;

    loadListInbox(): void;

    loadListToday(): void;

    loadListWeek(): void;


}

export class TaskStore implements ITaskStore {

    constructor(public root: RootStore) {
        // reaction(() => this.filters, () => {
        //     this.loadList();
        //     console.log('REACTION');
        // });
    }

    @observable modalOpen = false;

    @observable list: ITask[] = [];
    @observable loadingList: boolean = true;
    @observable loadingListErrorMessage: string = '';
    @observable selected: ITask = new Task();
    @observable loadingSave: boolean = false;
    @observable filters: ITaskFilters = new TaskFilters();

    @action
    async loadListByProject(projectId: string) {
        this.filters = new TaskFilters();
        this.filters.projectId = projectId;
        this.loadList();
    }

    @action
    async loadListToday() {
        this.filters = new TaskFilters();
        this.filters.periodFilter = "today";
        this.loadList();
    }

    @action
    async loadListWeek() {
        this.filters = new TaskFilters();
        this.filters.periodFilter = "week";
        this.loadList();
    }

    @action
    async loadListMonth() {
        this.filters = new TaskFilters();
        this.filters.periodFilter = "month";
        this.loadList();
    }

    @action
    async loadListInbox() {
        this.filters = new TaskFilters();
        this.loadList();
    }

    @action
    async loadList() {
        console.log('CALLED LOAD LIST');
        this.loadingList = true;
        let result;
        if (this.filters.projectId) {
            console.log('LOAD BY PROJECT');
            result = await FirebaseApi.getOpenTasksByProject(this.root.userStore.user.uid, this.filters.projectId);
        } else if (this.filters.periodFilter === "today") {
            result = await FirebaseApi.getOpenTasksUntilDate(this.root.userStore.user.uid, firebase.firestore.Timestamp.fromDate(dayjs().endOf('day').toDate()));
        } else if (this.filters.periodFilter === "week") {
            result = await FirebaseApi.getOpenTasksUntilDate(this.root.userStore.user.uid, firebase.firestore.Timestamp.fromDate(dayjs().add(7, 'day').endOf('day').toDate()));
        } else if (this.filters.periodFilter === "month") {
            result = await FirebaseApi.getOpenTasksUntilDate(this.root.userStore.user.uid, firebase.firestore.Timestamp.fromDate(dayjs().add(31, 'day').endOf('day').toDate()));
        } else {
            console.log('LOAD INBOX');
            result = await FirebaseApi.getInboxTasks(this.root.userStore.user.uid);
        }
        result.onSnapshot(snapshot => {
            const list: ITask[] = [];
            snapshot.forEach(doc => {
                list.push(doc.data() as ITask);
            });
            this.list = list;
            console.log(list);
            this.loadingList = false;
            // this.accountsLoaded = true;
            this.loadingListErrorMessage = '';
        }, err => {
            console.log(err);
            // this.loadingListErrorMessage = 'Something went wrong';
            this.loadingList = false;
        })
    }

    @action
    async save(task: ITask) {
        try {
            this.loadingSave = true;
            if (!task.id) {
                task.pokemon = this.root.pokemonStore.generateRandomPokemon(task);
            }
            await FirebaseApi.saveTask(this.root.userStore.user.uid, task);
            this.selected = new Task();
            this.root.uiStore.showToast('Task saved');
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            console.log(e);
            this.loadingSave = false;
            this.root.uiStore.showToast('Some error happened when saving, please try again.', "danger");
        }
    }

    @action
    async remove(taskId: string) {
        try {
            this.loadingSave = true;
            await FirebaseApi.removeTask(this.root.userStore.user.uid, taskId);
            this.selected = new Task();
            this.root.uiStore.showToast('Task removed');
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            this.loadingSave = false;
            this.root.uiStore.showToast('Some error happened when removing, please try again.');
        }
    }

    @action
    async completeTask(task: ITask) {
        await addDelay(1500);
        if (task.pokemon) {
            await this.root.pokemonStore.caughtPokemon(task.pokemon);
            const pkmnName = task.pokemon.name
            this.root.uiStore.showToast(`${pkmnName} caught!`);
        }
        if (task.id) {
            if (task.repeat) {
                task.pokemon = this.root.pokemonStore.generateRandomPokemon(task);
                if (task.repeatFrequency === 'daily') {
                    for (let i = 0; i <= 6; i++) {
                        const nextDay = dayjs(task.date?.toDate()).add(i + 1, 'day');
                        if ((nextDay.day() === 0 && task.sun) || (nextDay.day() === 1 && task.mon) ||
                            (nextDay.day() === 2 && task.tue) || (nextDay.day() === 3 && task.wed) ||
                            (nextDay.day() === 4 && task.thu) || (nextDay.day() === 5 && task.fri) ||
                            (nextDay.day() === 6 && task.sat)) {
                            task.date = firebase.firestore.Timestamp.fromDate(nextDay.toDate());
                            break;
                        }
                    }
                } else if (task.repeatFrequency === 'monthly') {
                    task.date = firebase.firestore.Timestamp.fromDate(dayjs(task.date?.toDate()).add(1, 'month').toDate());
                }
                await FirebaseApi.saveTask(this.root.userStore.user.uid, task);
            } else {
                await FirebaseApi.completeTask(this.root.userStore.user.uid, task.id);
            }
        }
    }

    @action
    openModal(task: ITask) {
        this.selected = task;
        this.modalOpen = true;
    }

    @action
    closeModal() {
        this.selected = new Task();
        this.modalOpen = false;
    }

}
