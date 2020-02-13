import {IPokemon} from "./Pokemon";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  character: string;
  partnerPokemon?: IPokemon;
}

export class User implements IUser{
  character: string;
  email: string;
  name: string;
  uid: string;
  constructor() {
    this.character = '';
    this.email = '';
    this.name = '';
    this.uid = '0';
  }

}
