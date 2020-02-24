import { observable, action, computed } from 'mobx'
import {RootStore} from "./RootStore";
import {IUser, User} from "../models/User";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IPokemon} from "../models/Pokemon";
import {auth} from "../firebase";

export interface IUserStore {
    user: IUser;
    loadingUser: boolean;

    setUser(id: string): void;
    updatePartner(pokemon: IPokemon): void;
    logOut(): void;
}
export class UserStore implements  IUserStore{
    constructor(public root: RootStore) {
    }

    @observable user: IUser = new User();
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
        } else {
            this.user = new User();
        }
    }

    @action
    async updatePartner(pokemon: IPokemon){
        await FirebaseApi.setPokemonAsPartner(this.user.uid, pokemon);
        this.user.partnerPokemon = pokemon;
    }

    @action
    async logOut(){
        this.user = new User();
        await auth.signOut();
    }

}
