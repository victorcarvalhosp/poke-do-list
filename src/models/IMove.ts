import {ITask} from "./Task";
import firebase from "firebase";
import {symlink} from "fs";
import {Types} from "./conditional-types-definitions";


export interface IMove {
  id: number;
  name: string;
  exhibitionName: string;
  description: string;
  accuracy: number;
  type: Types ;
  power: number;
}

export class Move implements IMove{
  id: number;
  name: string;
  description: string;
  exhibitionName: string;
  accuracy: number;
  type: Types ;
  power: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.exhibitionName = "";
    this.accuracy = 100;
    this.type = "normal"
    this.power = 40;
  }

}
