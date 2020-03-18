import {observable, action, computed, reaction} from 'mobx'
import {RootStore} from "./RootStore";
import {IUser, User} from "../models/User";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IPokemon} from "../models/Pokemon";
import {auth} from "../firebase";

export interface IUserStore {
    user: IUser;
    loadingUser: boolean;
    premium: boolean;

    setUser(id: string): void;

    updatePartner(pokemon: IPokemon): void;

    updatePowerUps(powerUps: number): void;

    updateSerialKey(serial: string): void;

    checkPremiumLicense(): void;

    logOut(): void;
}

export class UserStore implements IUserStore {
    constructor(public root: RootStore) {
        reaction(() => this.user.uid,
            () => {
                this.checkPremiumLicense();
            },
            {fireImmediately: true}
        )
    }

    @observable user: IUser = new User();
    @observable loadingUser = true;
    @observable premium = false;


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
    async updatePartner(pokemon: IPokemon) {
        await FirebaseApi.setPokemonAsPartner(this.user.uid, pokemon);
        this.user.partnerPokemon = pokemon;
    }

    @action
    async updatePowerUps(powerUps: number) {
        await FirebaseApi.updatePowerUps(this.user.uid, powerUps);
        this.user.powerUps = powerUps;
    }

    @action
    async updateSerialKey(serial: string) {
        await FirebaseApi.updateSerialKey(this.user.uid, serial);
        this.user.serialKey = serial;
    }

    @action
    async checkPremiumLicense() {
        console.log('-----CHECKING PREMIUM LICENSE-----');
        if (this.user && this.user.serialKey) {
            try {
                fetch(`http://localhost:5001/poke-do-list/us-central1/getSerialKeyValid/?serial=${this.user.serialKey}`, {
                    method: 'GET',
                    headers: {'user': this.user.uid}
                }).then((res: any) => res.json()).then(value => {
                    console.log(value);
                    if (value.success === true) {
                        this.premium = true;
                    } else {
                        this.premium = false;
                    }
                })
            } catch (e) {
                console.log(e);
            }
        } else {
            this.premium = false;
        }

    }

    @action
    async logOut() {
        this.user = new User();
        await auth.signOut();
    }

}
