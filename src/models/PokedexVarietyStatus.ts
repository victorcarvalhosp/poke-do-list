import {ITask} from "./Task";
import firebase from "firebase";

export interface IPokedexVarietyStatus {
  varietyId: number;
  caught: boolean;
}

export class PokedexVarietyStatus implements IPokedexVarietyStatus{
  varietyId: number;
  caught: boolean;

  constructor() {
    this.varietyId = 0;
    this.caught = false;
  }

}
