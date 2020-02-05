import { observable, action, computed } from 'mobx'
import {RootStore} from "./RootStore";

export interface ICounterStore {
    count: number;
    doubleCount: number;
    increment(): void;
    decrement(): void;
}
export class CounterStore implements  ICounterStore{
    constructor(public root: RootStore) {
    }

    @observable
    count = 0

    @action
    increment() {
        this.count++
    }

    @action
    decrement() {
        this.count--
    }

    @computed
    get doubleCount() {
        return this.count * 2
    }
}
