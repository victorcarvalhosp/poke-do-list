import {IExploreAward} from "./IExploreAward";

export interface IExploreItem {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    image: { type?: "human" | "pokemon" | "item", name: string, animationActive?: boolean, direction?: "up" | "down" | "left" | "right" };
    type: "battle" | "battle" | "mission" | "event";
    awards: IExploreAward[]; //Change to item
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
