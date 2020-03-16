export interface IExploreAward {
  id: number;
  name: string;
  type: "badge"|"pokemon"|"level";
}

export interface IExploreAwardLevel extends  IExploreAward{
  image: string;
}

export interface IExploreAwardBadge extends  IExploreAward{
  description: string;
  image: string;
}

export interface IExploreAwardPokemon extends  IExploreAward{
  pokemonId: number;
  level: number;
}

export class ExploreAwardBadge implements  IExploreAwardBadge{
  id: number;
  name: string;
  type: "badge" | "pokemon" | "level" = "badge";
  description: string;
  image: string;

  constructor(id: number, name: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.type = "badge";
  }

}

export class ExploreAwardPokemon implements  IExploreAwardPokemon{
  id: number;
  name: string;
  type: "badge" | "pokemon" | "level" = "pokemon";
  pokemonId: number;
  level: number;

  constructor(id: number, name: string, pokemonId: number, level: number) {
    this.id = id;
    this.name = name;
    this.pokemonId = pokemonId;
    this.level = level;
    this.type = "pokemon";
  }

}

export class ExploreAwardLevel implements  IExploreAwardLevel{
  id: number;
  name: string;
  type: "badge" | "pokemon" | "level" = "level";
  image: string;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = "level";
  }

}
