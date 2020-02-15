import {IPokemon} from "./Pokemon";
import {IPokemonVariety} from "./PokemonVariety";
import {IEvolution} from "./Evolution";

export interface IPokemonEncounterStat {
  varietyId: number;
  minLevel?: number;
  maxLevel?: number;
}

export interface IPokemonEncounter {
  tier1: IPokemonEncounterStat[];
  tier2: IPokemonEncounterStat[];
  tier3: IPokemonEncounterStat[];
  tier4: IPokemonEncounterStat[];
  tier5: IPokemonEncounterStat[];
}

export class PokemonEncounter implements IPokemonEncounter{

  tier1: IPokemonEncounterStat[];
  tier2: IPokemonEncounterStat[];
  tier3: IPokemonEncounterStat[];
  tier4: IPokemonEncounterStat[];
  tier5: IPokemonEncounterStat[];

  constructor() {
    this.tier1 = [];
    this.tier2 = [];
    this.tier3 = [];
    this.tier4 = [];
    this.tier5 = [];
  }

}
