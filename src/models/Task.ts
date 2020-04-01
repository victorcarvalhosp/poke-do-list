import {IPokemon} from "./Pokemon";
import firebase from "firebase";
import {IProject} from "./Project";

export interface ITask {
  id?: string;
  title: string;
  notes?: string;
  complete: boolean;
  project?: IProject;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp | null;
  withTime?: boolean;
  repeat: boolean;
  repeatFrequency?: "daily" | "monthly";
  mon?: boolean;
  tue?: boolean;
  wed?: boolean;
  thu?: boolean;
  fri?: boolean;
  sat?: boolean;
  sun?: boolean;
}

export class Task implements  ITask{
  id?: string;
  title: string;
  notes?: string;
  complete: boolean;
  project?: IProject;
  pokemon?: IPokemon;
  date?: firebase.firestore.Timestamp;
  withTime?: boolean;
  repeat: boolean;
  repeatFrequency?: "daily" | "monthly";
  mon?: boolean;
  tue?: boolean;
  wed?: boolean;
  thu?: boolean;
  fri?: boolean;
  sat?: boolean;
  sun?: boolean;

  constructor() {
    this.complete = false;
    this.title = '';
    this.notes = '';
    this.withTime = false;
    this.repeat = false;
    this.repeatFrequency = 'daily';
    this.mon = false;
    this.tue = false;
    this.wed = false;
    this.thu = false;
    this.fri = false;
    this.sat = false;
    this.sun = false;
  }

}
