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
        id: 4,
        name: "Charmander",
        description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        varieties: [
           4
        ]
    },
    5: {
        id: 5,
        name: "Charmeleon",
        description: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        varieties: [
            5
        ]
    },
    6: {
        id: 6,
        name: "Charizard",
        description: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
        varieties: [
            6, 10034, 10035
        ]
    },
    7: {
        id: 7,
        name: "Squirtle",
        description: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
        varieties: [
            7
        ]
    },
    8: {
        id: 8,
        name: "Wartortle",
        description: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler.",
        varieties: [
            8
        ]
    },
    9: {
        id: 9,
        name: "Blastoise",
        description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
        varieties: [
            9, 10036
        ]
    }
}
