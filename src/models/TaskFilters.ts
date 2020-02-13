import {IPokemon, Pokemon} from "./Pokemon";
import firebase from "firebase";
import {IProject} from "./Project";

export interface ITaskFilters {
  title?: string;
  complete?: boolean;
  projectId?: string;
  periodFilter?: "today" | "week" | "month";
}

export class TaskFilters implements  ITaskFilters{
  title?: string;
  complete?: boolean;
  projectId?: string;
  periodFilter?: "today" | "week" | "month";

  constructor() {
  }

}
