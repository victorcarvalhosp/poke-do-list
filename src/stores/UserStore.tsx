import { observable, action, computed } from 'mobx'
import {RootStore} from "./RootStore";
import {IUser} from "../models/User";
import {FirebaseApi} from "../apis/FirebaseApi";

export interface IUserStore {
    user: IUser;
    loadingUser: boolean;

    setUser(id: string): void;
}
export class UserStore implements  IUserStore{
    constructor(public root: RootStore) {
    }

    @observable user: IUser = {uid: '', email: '', name: ''};
    @observable loadingUser = true;

    @action
    async setUser(id: string) {
        if (id !== '' && id !== '0') {
            this.user.uid = id;
            this.loadingUser = true;
            const result = await FirebaseApi.getUser(id);
            await result.get().then(async value => {
                this.user = await value.data() as IUser;
                this.loadingUser = false;
            }, (err: Error) => {
                console.log(err);
                this.loadingUser = false;
            });
        }
    }

}
