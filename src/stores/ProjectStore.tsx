import {action, observable, reaction} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {IProject} from "../models/Project";
import {FirebaseApi} from "../apis/FirebaseApi";

export interface IProjectStore {
    modalOpen: boolean;
    list: IProject[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    loadingSave: boolean;

    loadList(): void;
    save(project: IProject): void;

    openModal(): void;
    closeModal(): void;
}

export class ProjectStore implements IProjectStore {
    @observable modalOpen: boolean = false;
    @observable list: IProject[] = [];
    @observable loadingList: boolean = true;
    @observable loadingListErrorMessage: string = '';
    @observable loadingSave: boolean = false;



    constructor(public root: RootStore) {
        reaction(() =>this.root.userStore.user.uid, () => {
            this.loadList();
        });
    }

    @action
    async loadList() {
        this.loadingList = true;
        const result = await FirebaseApi.getProjects(this.root.userStore.user.uid);
        result.onSnapshot(snapshot => {
            const list: IProject[] = [];
            snapshot.forEach(doc => {
                list.push(doc.data() as IProject);
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
    async save(project: IProject) {
        try {
            console.log('SERVICE', project);
            this.loadingSave = true;
            await FirebaseApi.saveProject(this.root.userStore.user.uid, project);
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
    openModal() {
        console.log('open modal store!');
        this.modalOpen = true;
    }

    @action
    closeModal() {
        this.modalOpen = false;
    }

}
