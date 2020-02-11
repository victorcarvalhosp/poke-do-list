import {IPokemon, Pokemon} from "./Pokemon";
import firebase from "firebase";

export interface ITask {
  id?: string;
  title: string;
  complete: boolean;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp;
}

export class Task implements  ITask{
  complete: boolean;
  title: string;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp;

  constructor() {
    this.complete = false;
    this.title = '';
  }

}
