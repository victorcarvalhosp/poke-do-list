import {CounterStore, ICounterStore} from "./CounterStore";
import {IUserStore, UserStore} from "./UserStore";
import {IUIStore, UIStore} from "./UiStore";

export interface IRootStore {
    counterStore: ICounterStore;
    userStore: IUserStore;
    uiStore: IUIStore;
}

export class RootStore implements IRootStore{
    counterStore: ICounterStore;
    userStore: IUserStore;
    uiStore: IUIStore;

    constructor(){
        this.counterStore = new CounterStore(this);
        this.userStore = new UserStore(this);
        this.uiStore = new UIStore(this);
    }
}
