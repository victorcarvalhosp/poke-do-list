import {IPokemon, Pokemon} from "./Pokemon";
import firebase from "firebase";

export interface IProject {
  id?: string;
  name: string;
  color: string;
}

export class Project implements  IProject{
  id?: string;
  name: string;
  color: string;

  constructor() {
    this.name = '';
    this.color = '';
  }

}
