import {IPokemonSpecie} from "../models/PokemonSpecie";
import {IPokemonVariety} from "../models/PokemonVariety";

export const pokemonVarieties: Record<number, IPokemonVariety> =
    {
        1: {
            "id": 1,
            "name": "bulbasaur",
            "specie": 1,
            "is_default": true,
            "type1": "grass",
            "type2": "poison"
        },
        2: {
            "id": 2,
            "name": "ivysaur",
            "specie": 2,
            "is_default": true,
            "type1": "grass",
            "type2": "poison"
        },
        3: {
            "id": 3,
            "name": "venusaur",
            "specie": 3,
            "is_default": true,
            "type1": "grass",
            "type2": "poison"
        },
        10033: {
            "id": 10033,
            "name": "venusaur-mega",
            "specie": 3,
            "is_default": false,
            "type1": "grass",
            "type2": "poison"
        },
        4: {
            "id": 4,
            "name": "charmander",
            "specie": 4,
            "is_default": true,
            "type1": "fire",
        },
        7: {
            "id": 7,
            "name": "squirtle",
            "specie": 7,
            "is_default": true,
            "type1": "water",
        },
    }
