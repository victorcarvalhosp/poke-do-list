import {ITask} from "./Task";
import firebase from "firebase";


export interface IEvolution {
  level: number;
  method: "level_up" | "trade";
  to: number;
}

export class Evolution implements IEvolution{
  level: number;
  method: "level_up" | "trade";
  to: number;

  constructor() {
    this.level = 0;
    this.method = "level_up";
    this.to = 0;
  }

}
