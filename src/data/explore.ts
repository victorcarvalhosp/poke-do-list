import {IMove} from "../models/IMove";
import {IExploreItem} from "../models/IExploreItem";

export const exploreItems: Record<number, IExploreItem> =
    {
        // 0: {
        //     id: 0,
        //     name: "-",
        //     description: "-",
        //     shortDescription: "",
        //     type: "battle",
        //     image: "",
        //     awards: [],
        // },
        1: {
            id: 1,
            name: "Brock",
            shortDescription: "Rock Badge",
            description: "Beat Brock to win the Rock Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "brock.png", direction: "down"},
            awards: [],
            trainerInfo: {sprite: "brock.png", name: 'Brock', type: "rock", pokemon: [{variety: 74, level:5}, {variety: 95, level: 5}, {variety: 74, level:5}], maxLevel: 5}
        },
        2: {
            id: 2,
            name: "Trade #001",
            shortDescription: "Trade Onix for Bellsprout",
            description: "Trade Onix for Bellsprout",
            type: "mission",
            image: {type: "pokemon", animationActive: true, name: "69.png", direction: "down"},
            awards: []
        },
        3: {
            id: 3,
            name: "Gigantamax Pikachu",
            shortDescription: "Fight Gigantamax Pikachu",
            description: "Fight Gigantamax Pikachu",
            type: "event",
            image: {type: "pokemon", animationActive: true, name: "25.png", direction: "down"},
            awards: [],
            trainerInfo: {sprite: "", name: 'Gigantamax Pikachu', type: "electric", pokemon: [{variety: 172, level:1}, {variety: 25, level: 5, gigantamax: true}, {variety: 172, level:1}], maxLevel: 5}
        },
    }


