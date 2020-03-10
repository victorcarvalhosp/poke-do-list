import {IEvolution} from "./Evolution";
import {Types} from "./conditional-types-definitions";

export interface IPokemonVariety {
  id: number;
  name: string;
  is_default: boolean;
  specie: number;
  type1:  Types;
  type2?:  Types;
  evolutions: IEvolution[];
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  baseSpeed: number;
  moves: number[];

}

export class PokemonVariety implements IPokemonVariety{
  id: number;
  name: string;
  is_default: boolean;
  specie: number;
  type1:  Types;
  type2?:  Types;
  evolutions: IEvolution[];
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  baseSpeed: number;
  moves: number[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.is_default = true;
    this.specie = 0;
    this.type1 = "unknown";
    this.evolutions = [];
    this.baseAtk = 0;
    this.baseHp = 0;
    this.baseDef = 0;
    this.baseSpeed = 0;
    this.moves = [];
  }

}
