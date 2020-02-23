import {IPokemon, Pokemon} from "./Pokemon";
import firebase from "firebase";
import {IProject} from "./Project";

export interface ITask {
  id?: string;
  title: string;
  complete: boolean;
  project?: IProject;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp | null;
  withTime?: boolean;
}

export class Task implements  ITask{
  id?: string;
  title: string;
  complete: boolean;
  project?: IProject;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp;
  withTime?: boolean;

  constructor() {
    this.complete = false;
    this.title = '';
    this.withTime = false;
  }

}
