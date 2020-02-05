import {CounterStore, ICounterStore} from "./CounterStore";

export interface IRootStore {
    counterStore: ICounterStore;
}

export class RootStore implements IRootStore{
    counterStore: ICounterStore;

    constructor(){
        this.counterStore = new CounterStore(this);
    }
}
