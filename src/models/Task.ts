import {IPokemon} from "./Pokemon";

export interface ITask {
  id?: string;
  title: string;
  pokemon: IPokemon;
  complete: boolean;
}
