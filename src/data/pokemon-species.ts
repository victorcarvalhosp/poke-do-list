import {IPokemonSpecie} from "../models/PokemonSpecie";

export const pokemonSpecies: Record<number, IPokemonSpecie> = {
    1: {
        id: 1,
        name: "Bulbasaur",
        description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
        varieties: [
            1
        ]
    },
    2: {
        id: 2,
        name: "Ivysaur",
        description: "There is a bud on this Pokémon’s back. To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon.",
        varieties: [
            2
        ]
    } ,
    3: {
        id: 3,
        name: "Venusaur",
        description: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.",
        varieties: [
            3, 10033
        ]
    },
    4: {
        "id": 4,
        "name": "Charmander",
        "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        "varieties": [
           4
        ]
    },
    7: {
        id: 7,
        name: "Squirtle",
        description: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
        varieties: [
            7
        ]
    }
}
