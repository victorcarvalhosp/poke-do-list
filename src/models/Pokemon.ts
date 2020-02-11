
export interface IPokemon {
  id?: string;
  name: string;
  variety: number;
  level: number
}

export class Pokemon implements IPokemon{
  id?: string;
  name: string;
  variety: number;
  level: number;

  constructor() {
    this.name = '';
    this.variety = 0;
    this.level = 1;
  }

}
