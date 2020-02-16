import {ITask} from "./Task";
import firebase from "firebase";


export interface IMove {
  id: number;
  name: string;
  exhibitionName: string;
  description: string;
  accuracy: number;
  type: "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
  power: number;
}

export class Move implements IMove{
  id: number;
  name: string;
  description: string;
  exhibitionName: string;
  accuracy: number;
  type: "normal"|"fighting"|"flying"|"poison"|"ground"|"rock"|"bug"|"ghost"|"steel"|"fire"|"water"|"grass"|"electric"|"psychic"|"ice"|"dragon"|"dark"|"fairy"|"unknown"|"shadow" ;
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
