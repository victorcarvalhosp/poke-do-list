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
    type: "battle" | "mission" | "event";
    firstTimeAwards: number[]; //Change to item
    awards: number[]; //Change to item
    trainerInfo?: ITrainerInfo;
    appearAfter: number|null;
    enableAfter: number|null;
}

export class ExploreItem implements IExploreItem {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    image: { type?: "human" | "pokemon" | "item", name: string, animationActive?: boolean, direction?: "up" | "down" | "left" | "right" };
    type: "battle" | "mission" | "event";
    awards: number[];
    firstTimeAwards: number[];
    appearAfter: number|null;
    enableAfter: number|null;

    constructor() {
        this.id = 0;
        this.name = "";
        this.shortDescription = "";
        this.description = "";
        this.image = {name: ""};
        this.type = "battle";
        this.awards = [];
        this.firstTimeAwards = [];
        this.appearAfter = null;
        this.enableAfter = null;
    }

}
