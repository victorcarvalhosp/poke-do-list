import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";

export interface IUIStore {
}
export class UIStore implements  IUIStore{
    constructor(public root: RootStore) {
    }

}
