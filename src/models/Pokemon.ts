import {ITask} from "./Task";
import firebase from "firebase";

export interface IPokemon {
  id?: string;
  name: string;
  variety: number;
  level: number;
  task: string;
  date?: firebase.firestore.Timestamp;
}

export class Pokemon implements IPokemon{
  id?: string;
  name: string;
  variety: number;
  level: number;
  task: string;
  date?: firebase.firestore.Timestamp;

  constructor() {
    this.name = '';
    this.variety = 0;
    this.level = 1;
    this.task = '';
  }

}
