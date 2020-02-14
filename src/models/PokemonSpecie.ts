import {IPokemon} from "./Pokemon";
import {IPokemonVariety} from "./PokemonVariety";

export interface IPokemonSpecie {
  id: number;
  name: string;
  description: string;
  varieties?: number[];
}

export class PokemonSpecie implements IPokemonSpecie{
  id: number;
  name: string;
  description: string;
  varieties?: number[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
  }

}
