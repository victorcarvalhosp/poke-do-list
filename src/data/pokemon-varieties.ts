import {IPokemonSpecie} from "../models/PokemonSpecie";
import {IPokemonVariety} from "../models/PokemonVariety";

export const pokemonVarieties: Record<number, IPokemonVariety> =
    {
        0: {
            "id": 0,
            "name": "-",
            "specie": 0,
            "is_default": true,
            "type1": "unknown",
            evolutions:[]
        },
        1: {
            id: 1,
            name: "bulbasaur",
            specie: 1,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions:[{level:16,method:"level_up",to: 2}]
        },
        2: {
            id: 2,
            name: "ivysaur",
            specie: 2,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions:[{level:32,method:"level_up",to: 3}]
        },
        3: {
            id: 3,
            name: "venusaur",
            specie: 3,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions:[]
        },
        10033: {
            id: 10033,
            name: "venusaur-mega",
            specie: 3,
            is_default: false,
            type1: "grass",
            type2: "poison",
            evolutions:[]
        },
        4: {
            id: 4,
            name: "charmander",
            specie: 4,
            is_default: true,
            type1: "fire",
            evolutions:[{level:16,method:"level_up",to: 5}]
        },
        5: {
            id: 5,
            name: "charmeleon",
            specie: 5,
            is_default: true,
            type1: "fire",
            evolutions:[{level:36,method:"level_up",to: 6}]
        },
        6: {
            id: 6,
            name: "charizard",
            specie: 6,
            is_default: true,
            type1: "fire",
            type2: "flying",
            evolutions:[]
        },
        7: {
            id: 7,
            name: "squirtle",
            specie: 7,
            is_default: true,
            type1: "water",
            evolutions:[{level:16,method:"level_up",to: 8}]
        },
        8: {
            id: 8,
            name: "wartortle",
            specie: 8,
            is_default: true,
            type1: "water",
            evolutions:[{level:36,method:"level_up",to: 9}]
        },
        9: {
            id: 9,
            name: "blastoise",
            specie: 9,
            is_default: true,
            type1: "water",
            evolutions:[]
        },
        37: {
            id: 37,
            name: "vulpix",
            specie: 37,
            is_default: true,
            type1: "fire",
            evolutions:[]
        },
        10103: {
            id: 10103,
            name: "vulpix-alola",
            specie: 37,
            is_default: false,
            type1: "ice",
            evolutions:[]
        },
    }
