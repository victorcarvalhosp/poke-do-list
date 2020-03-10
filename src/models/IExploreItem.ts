import {IExploreAward} from "./IExploreAward";
import {IPokemon} from "./Pokemon";

export interface IPokemonDetailsToRandomGeneration{
    variety: number;
    level: number;
    gigantamax?: boolean;
}
export interface ITrainerInfo {
    sprite: string,
    name: string,
    pokemon: IPokemonDetailsToRandomGeneration[];
    type?: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
    maxLevel?: number;
}

export interface IExploreItem {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    image: { type?: "human" | "pokemon" | "item", name: string, animationActive?: boolean, direction?: "up" | "down" | "left" | "right" };
    type: "battle" | "battle" | "mission" | "event";
    awards: IExploreAward[]; //Change to item
    trainerInfo?: ITrainerInfo;
}

export class ExploreItem implements IExploreItem {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    image: { type?: "human" | "pokemon" | "item", name: string, animationActive?: boolean, direction?: "up" | "down" | "left" | "right" };
    type: "battle" | "battle" | "mission" | "event";
    awards: IExploreAward[]; //Change to item

    constructor() {
        this.id = 0;
        this.name = "";
        this.shortDescription = "";
        this.description = "";
        this.image = {name: ""};
        this.type = "battle";
        this.awards = []; //Change to item
    }

}
