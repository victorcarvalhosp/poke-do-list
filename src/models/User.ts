import {IPokemon} from "./Pokemon";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  character: string;
  partnerPokemon?: IPokemon;
}
