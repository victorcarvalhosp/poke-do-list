import {IPokemonSpecie, PokemonSpecie} from "./PokemonSpecie";
import {IEvolution} from "./Evolution";
import {IMove} from "./IMove";

export interface IPokemonVariety {
  id: number;
  name: string;
  is_default: boolean;
  specie: number;
  type1:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
  type2?:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
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
  type1:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow";
  type2?:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow";
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
