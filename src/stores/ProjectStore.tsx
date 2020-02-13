import {action, observable, reaction} from 'mobx'
import {RootStore} from "./RootStore";
import {ITask, Task} from "../models/Task";
import {IProject, Project} from "../models/Project";
import {FirebaseApi} from "../apis/FirebaseApi";

export interface IProjectStore {
    modalOpen: boolean;
    list: IProject[];
    loadingList: boolean;
    loadingListErrorMessage: string;
    loadingSave: boolean;
    selected: IProject;

    loadList(): void;
    save(project: IProject, keepSelected?: boolean): void;
    remove(projectId: string): void;
    selectById(id: string): void;
    setSelected(project: IProject): void;

    openModal(project: IProject): void;
    closeModal(): void;
}

export class ProjectStore implements IProjectStore {
    @observable modalOpen: boolean = false;
    @observable list: IProject[] = [];
    @observable loadingList: boolean = true;
    @observable loadingListErrorMessage: string = '';
    @observable loadingSave: boolean = false;
    @observable selected: IProject = new Project();

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
    async save(project: IProject, keepSelected?: boolean) {
        try {
            console.log('SERVICE', project);
            this.loadingSave = true;
            await FirebaseApi.saveProject(this.root.userStore.user.uid, project);
            this.root.uiStore.showToast('Project saved');
            if(keepSelected){
                this.selected = project;
            } else {
                this.selected = new Project();
            }
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            console.log(e);
            this.loadingSave = false;
            // this.root.uiStore.showToast('Some error happened when saving, please try again.');
        }
    }

    @action
    async remove(projectId: string) {
        try {
            this.loadingSave = true;
            await FirebaseApi.removeProject(this.root.userStore.user.uid, projectId);
            this.selected = new Project();
            this.root.uiStore.showToast('Project removed');
            this.closeModal();
            this.loadingSave = false;
        } catch (e) {
            this.loadingSave = false;
            this.root.uiStore.showToast('Some error happened when removing, please try again.');
        }
    }

    @action
    async selectById(projectId: string) {
        console.log('select BY ID')
        const result = await FirebaseApi.getProject(this.root.userStore.user.uid, projectId);
        await result.get().then(async value => {
            this.selected = await value.data() as IProject;
        }, (err: Error) => {
            console.log(err);
        });
    }

    @action
    async setSelected(project: IProject) {
        this.selected = project;
    }

    @action
    openModal(project: IProject) {
        this.selected = project;
        this.modalOpen = true;
    }

    @action
    closeModal() {
        this.modalOpen = false;
    }

}
