import {IPokemon, Pokemon} from "./Pokemon";
import firebase from "firebase";

export interface IProject {
  id?: string;
  name: string;
  theme: "" |"red" | "blue" | "yellow" | "gold" | "silver" | "crystal";
}

export class Project implements  IProject{
  id?: string;
  name: string;
  theme: "" |"red" | "blue" | "yellow" | "gold" | "silver" | "crystal";

  constructor() {
    this.name = '';
    this.theme = "";
  }

}
