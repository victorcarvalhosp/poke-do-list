import {IPokemon} from "./Pokemon";
import {IPokedexStatus} from "./PokedexStatus";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  character: string;
  partnerPokemon?: IPokemon;
  creationDate: Date;
  pokedex: Record<number, IPokedexStatus>;
  theme?: string;
  exploreItemsCompleted: number[];
  powerUps: number;
  serialKey: string;
}

export class User implements IUser{
  character: string;
  email: string;
  name: string;
  uid: string;
  creationDate: Date;
  pokedex: Record<number, IPokedexStatus>;
  theme?: string;
  exploreItemsCompleted: number[];
  powerUps: number;
  serialKey: string;

  constructor() {
    this.character = '';
    this.email = '';
    this.name = '';
    this.uid = '0';
    this.pokedex = {};
    this.creationDate = new Date();
    this.exploreItemsCompleted = [];
    this.powerUps = 0;
    this.serialKey = '';
  }

}
