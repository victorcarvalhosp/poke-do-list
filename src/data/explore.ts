import {IMove} from "../models/IMove";
import {IExploreItem} from "../models/IExploreItem";
import {
    ExploreAwardBadge, ExploreAwardLevel,
    ExploreAwardPokemon,
    IExploreAward,
    IExploreAwardBadge,
    IExploreAwardPokemon
} from "../models/IExploreAward";
import {CLOUDINARY_URL_POKEMON_OVERWORLD} from "../utils/consts";
import {image} from "ionicons/icons";

export const exploreAwards: Record<number, IExploreAward|IExploreAwardBadge|IExploreAwardPokemon> =
    {
        0: new ExploreAwardLevel(0, "Power Up",""),
        1: new ExploreAwardPokemon(1, "Pokémon", 95, 1),
        1000: new ExploreAwardBadge(1000,"Boulder Badge", "Gym Badge from Pewter City","Boulder_Badge.png"),
        1001: new ExploreAwardBadge(1001,"Cascade Badge", "Gym Badge from Cerulean City","Cascade_Badge.png"),
        1002: new ExploreAwardBadge(1002,"Thunder Badge", "Gym Badge from Vermilion City","Thunder_Badge.png"),
        1003: new ExploreAwardBadge(1003,"Rainbow Badge", "Gym Badge from Celadon City","Rainbow_Badge.png"),
        1004: new ExploreAwardBadge(1004,"Soul Badge", "Gym Badge from Fuchsia City","Soul_Badge.png"),
        1005: new ExploreAwardBadge(1005,"Marsh Badge", "Gym Badge from Saffron City","Marsh_Badge.png"),
        1006: new ExploreAwardBadge(1006,"Volcano Badge", "Gym Badge from Gym Badge from Cinnabar City","Volcano_Badge.png"),
        1007: new ExploreAwardBadge(1007,"Earth Badge", "Gym Badge from Viridian City","Earth_Badge.png"),
    }

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
            shortDescription: "Boulder Badge",
            description: "Beat Brock to win the Boulder Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "brock.png", direction: "down"},
            firstTimeAwards: [1000, 1],
            awards: [0],
            trainerInfo: {
                sprite: "brock.png",
                name: 'Brock',
                type: "rock",
                pokemon: [{variety: 74, level: 5}, {variety: 95, level: 5}, {variety: 74, level: 5}],
                maxLevel: 5
            },
            appearAfter: null,
            enableAfter: null
        },
        2: {
            id: 2,
            name: "Misty",
            shortDescription: "Cascade Badge",
            description: "Beat Misty to win the Cascade Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "misty.png", direction: "down"},
            firstTimeAwards: [1001],
            awards: [0],
            trainerInfo: {
                sprite: "misty.png",
                name: 'Misty',
                type: "water",
                pokemon: [{variety: 55, level: 8}, {variety: 121, level: 8}, {variety: 131, level: 8}],
                maxLevel: 8
            },
            appearAfter: null,
            enableAfter: 1
        },
        3: {
            id: 3,
            name: "Surge",
            shortDescription: "Thunder Badge",
            description: "Beat Surge to win the Thunder Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "surge.png", direction: "down"},
            firstTimeAwards: [1002],
            awards: [0],
            trainerInfo: {
                sprite: "surge.png",
                name: 'Surge',
                type: "electric",
                pokemon: [{variety: 100, level: 12}, {variety: 26, level: 12}, {variety: 25, level: 12}],
                maxLevel: 12
            },
            appearAfter: 1,
            enableAfter: 2
        },
        4: {
            id: 4,
            name: "Erika",
            shortDescription: "Rainbow Badge",
            description: "Beat Erika to win the Rainbow Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "erika.png", direction: "down"},
            firstTimeAwards: [1003],
            awards: [0],
            trainerInfo: {
                sprite: "erika.png",
                name: 'Erika',
                type: "grass",
                pokemon: [{variety: 71, level: 16}, {variety: 45, level: 16}, {variety: 114, level: 16}],
                maxLevel: 16
            },
            appearAfter: 2,
            enableAfter: 3
        },
        5: {
            id: 5,
            name: "Koga",
            shortDescription: "Soul Badge",
            description: "Beat Koga to win the Soul Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "koga.png", direction: "down"},
            firstTimeAwards: [1004],
            awards: [0],
            trainerInfo: {
                sprite: "koga.png",
                name: 'Koga',
                type: "poison",
                pokemon: [{variety: 109, level: 20}, {variety: 89, level: 20}, {variety: 110, level: 20}],
                maxLevel: 20
            },
            appearAfter: 3,
            enableAfter: 4
        },
        6: {
            id: 6,
            name: "Sabrina",
            shortDescription: "Marsh Badge",
            description: "Beat Sabrina to win the Marsh Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "sabrina.png", direction: "down"},
            firstTimeAwards: [1005],
            awards: [0],
            trainerInfo: {
                sprite: "sabrina.png",
                name: 'Sabrina',
                type: "psychic",
                pokemon: [{variety: 122, level: 24}, {variety: 65, level: 24}, {variety: 49, level: 24}],
                maxLevel: 24
            },
            appearAfter: 4,
            enableAfter: 5
        },
        7: {
            id: 7,
            name: "Blaine",
            shortDescription: "Volcano Badge",
            description: "Beat Blaine to win the Volcano Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "blaine.png", direction: "down"},
            firstTimeAwards: [1006],
            awards: [0],
            trainerInfo: {
                sprite: "blaine.png",
                name: 'Blaine',
                type: "fire",
                pokemon: [{variety: 77, level: 28}, {variety: 78, level: 28}, {variety: 58, level: 28}],
                maxLevel: 28
            },
            appearAfter: 5,
            enableAfter: 6
        },
        8: {
            id: 8,
            name: "Blue",
            shortDescription: "Earth Badge",
            description: "Beat Blue to win the Earth Badge",
            type: "battle",
            image: {type: "human", animationActive: true, name: "blue.png", direction: "down"},
            firstTimeAwards: [1007],
            awards: [0],
            trainerInfo: {
                sprite: "blue.png",
                name: 'Blue',
                type: "unknown",
                pokemon: [{variety: 111, level: 32}, {variety: 59, level: 32}, {variety: 18, level: 32}],
                maxLevel: 32
            },
            appearAfter: 6,
            enableAfter: 7
        },
        80: {
            id: 80,
            name: "Trade #001",
            shortDescription: "Trade Onix for Bellsprout",
            description: "Trade Onix for Bellsprout",
            type: "mission",
            image: {type: "pokemon", animationActive: true, name: "69.png", direction: "down"},
            firstTimeAwards: [],
            awards: [],
            appearAfter: null,
            enableAfter: null
        },
        81: {
            id: 81,
            name: "Gigantamax Pikachu",
            shortDescription: "Fight Gigantamax Pikachu",
            description: "Fight Gigantamax Pikachu",
            type: "event",
            image: {type: "pokemon", animationActive: true, name: "25.png", direction: "down"},
            firstTimeAwards: [],
            awards: [],
            trainerInfo: {
                sprite: "",
                name: 'Gigantamax Pikachu',
                type: "electric",
                pokemon: [{variety: 172, level: 2}, {variety: 25, level: 5, gigantamax: true}, {
                    variety: 172,
                    level: 2
                }],
                maxLevel: 5
            },
            appearAfter: null,
            enableAfter: null
        },
    }


