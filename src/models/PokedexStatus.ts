import {IPokedexVarietyStatus} from "./PokedexVarietyStatus";

export interface IPokedexStatus {
  specieId: number;
  caught: boolean;
  varieties: Record<number, IPokedexVarietyStatus>;
}

export class PokedexStatus implements IPokedexStatus{
  specieId: number;
  caught: boolean;
  varieties: Record<number, IPokedexVarietyStatus>;

  constructor() {
    this.specieId = 0;
    this.caught = false;
    this.varieties = {}
  }

}
