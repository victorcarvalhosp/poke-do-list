import {IPokemonSpecie, PokemonSpecie} from "./PokemonSpecie";

export interface IPokemonVariety {
  id: number;
  name: string;
  is_default: boolean;
  specie: number;
  type1:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
  type2?:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
}

export class PokemonVariety implements IPokemonVariety{
  id: number;
  name: string;
  is_default: boolean;
  specie: number;
  type1:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow";
  type2?:  "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow";

  constructor() {
    this.id = 0;
    this.name = '';
    this.is_default = true;
    this.specie = 0;
    this.type1 = "unknown";
  }

}
