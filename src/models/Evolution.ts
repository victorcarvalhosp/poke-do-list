import {ITask} from "./Task";
import firebase from "firebase";


export interface IEvolution {
  minLevel: number;
  method: "level_up" | "trade";
  to: number;
}

export class Evolution implements IEvolution{
  minLevel: number;
  method: "level_up" | "trade";
  to: number;

  constructor() {
    this.minLevel = 0;
    this.method = "level_up";
    this.to = 0;
  }

}
