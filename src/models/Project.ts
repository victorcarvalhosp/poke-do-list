import {ProjectThemes} from "./conditional-types-definitions";

export interface IProject {
  id?: string;
  name: string;
  theme: ProjectThemes;
}

export class Project implements  IProject{
  id?: string;
  name: string;
  theme: ProjectThemes;

  constructor() {
    this.name = '';
    this.theme = "";
  }

}
