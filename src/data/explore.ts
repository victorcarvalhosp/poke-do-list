import {IExploreItem} from "../models/IExploreItem";
import {
    ExploreAwardBadge,
    ExploreAwardLevel,
    ExploreAwardPokemon,
    IExploreAward,
    IExploreAwardBadge,
    IExploreAwardPokemon
} from "../models/IExploreAward";

export const exploreAwards: Record<number, IExploreAward|IExploreAwardBadge|IExploreAwardPokemon> =
    {
        0: new ExploreAwardLevel(0, "Power Up",""),
        1: new ExploreAwardPokemon(1, "Pokémon", 95, 1),
        2: new ExploreAwardPokemon(2, "Pokémon", 21, 1),
        3: new ExploreAwardPokemon(3, "Pokémon", 23, 5),
        4: new ExploreAwardPokemon(4, "Pokémon", 299, 1),
        5: new ExploreAwardPokemon(5, "Pokémon", 387, 1),
        6: new ExploreAwardPokemon(6, "Pokémon", 519, 1),
        7: new ExploreAwardPokemon(7, "Pokémon", 120, 4),
        8: new ExploreAwardPokemon(8, "Pokémon", 13, 1),
        9: new ExploreAwardPokemon(9, "Prof Elm Pokémon", 155, 1),
        10: new ExploreAwardPokemon(10, "Remoraid", 223, 1),
        11: new ExploreAwardPokemon(11, "Makuhita", 296, 1),
        12: new ExploreAwardPokemon(12, "Gastly", 92, 5),

        1000: new ExploreAwardBadge(1000,"Boulder Badge", "Gym Badge from Pewter City in Kanto","Boulder_Badge.png"),
        1001: new ExploreAwardBadge(1001,"Cascade Badge", "Gym Badge from Cerulean City in Kanto","Cascade_Badge.png"),
        1002: new ExploreAwardBadge(1002,"Thunder Badge", "Gym Badge from Vermilion City in Kanto","Thunder_Badge.png"),
        1003: new ExploreAwardBadge(1003,"Rainbow Badge", "Gym Badge from Celadon City in Kanto","Rainbow_Badge.png"),
        1004: new ExploreAwardBadge(1004,"Soul Badge", "Gym Badge from Fuchsia City in Kanto","Soul_Badge.png"),
        1005: new ExploreAwardBadge(1005,"Marsh Badge", "Gym Badge from Saffron City in Kanto","Marsh_Badge.png"),
        1006: new ExploreAwardBadge(1006,"Volcano Badge", "Gym Badge from Cinnabar City in Kanto","Volcano_Badge.png"),
        1007: new ExploreAwardBadge(1007,"Earth Badge", "Gym Badge from Viridian City in Kanto","Earth_Badge.png"),
        1008: new ExploreAwardBadge(1008,"Zephyr Badge", "Gym Badge from Violet City in Johto","Zephyr_Badge.png"),
        1009: new ExploreAwardBadge(1009,"Hive Badge", "Gym Badge from Azalea City in Johto","Hive_Badge.png"),
        1010: new ExploreAwardBadge(1010,"Plain Badge", "Gym Badge from Goldenrod City in Johto","Plain_Badge.png"),
        1011: new ExploreAwardBadge(1011,"Fog Badge", "Gym Badge from Ecruteak City in Johto","Fog_Badge.png"),
        1012: new ExploreAwardBadge(1012,"Storm Badge", "Gym Badge from Cianwood City in Johto","Storm_Badge.png"),
        1013: new ExploreAwardBadge(1013,"Mineral Badge", "Gym Badge from Olivine City in Johto","Mineral_Badge.png"),
        1014: new ExploreAwardBadge(1014,"Glacier Badge", "Gym Badge from Mahogany City in Johto","Glacier_Badge.png"),
        1015: new ExploreAwardBadge(1015,"Rising Badge", "Gym Badge from Blackthorn City in Johto","Rising_Badge.png"),
        1016: new ExploreAwardBadge(1016,"Stone Badge", "Gym Badge from Rustboro City in Hoenn","Stone_Badge.png"),
        1017: new ExploreAwardBadge(1017,"Knuckle Badge", "Gym Badge from Dewford City in Hoenn","Knuckle_Badge.png"),
        1018: new ExploreAwardBadge(1018,"Dynamo Badge", "Gym Badge from Mauville City in Hoenn","Dynamo_Badge.png"),
        1019: new ExploreAwardBadge(1019,"Heat Badge", "Gym Badge from Lavaridge City in Hoenn","Heat_Badge.png"),
        1020: new ExploreAwardBadge(1020,"Balance Badge", "Gym Badge from Petalburg City in Hoenn","Balance_Badge.png"),
        1021: new ExploreAwardBadge(1021,"Feather Badge", "Gym Badge from Fortree City in Hoenn","Feather_Badge.png"),
        1022: new ExploreAwardBadge(1022,"Mind Badge", "Gym Badge from Mossdeep City in Hoenn","Mind_Badge.png"),
        1023: new ExploreAwardBadge(1023,"Rain Badge", "Gym Badge from Sootopolis City in Hoenn","Rain_Badge.png"),
        1024: new ExploreAwardBadge(1024,"Coal Badge", "Gym Badge from Oreburgh City in Sinnoh","Coal_Badge.png"),
        1025: new ExploreAwardBadge(1025,"Forest Badge", "Gym Badge from Eterna City in Sinnoh","Forest_Badge.png"),
        1026: new ExploreAwardBadge(1026,"Cobble Badge", "Gym Badge from Veilstone City in Sinnoh","Cobble_Badge.png"),
        1027: new ExploreAwardBadge(1027,"Fen Badge", "Gym Badge from Pastoria City in Sinnoh","Fen_Badge.png"),
        1028: new ExploreAwardBadge(1028,"Relic Badge", "Gym Badge from Hearthome City in Sinnoh","Relic_Badge.png"),
        1029: new ExploreAwardBadge(1029,"Mine Badge", "Gym Badge from Canalave City in Sinnoh","Mine_Badge.png"),
        1030: new ExploreAwardBadge(1030,"Icicle Badge", "Gym Badge from Snowpoint City in Sinnoh","Icicle_Badge.png"),
        1031: new ExploreAwardBadge(1031,"Beacon Badge", "Gym Badge from Sunyshore City in Sinnoh","Beacon_Badge.png"),
        1032: new ExploreAwardBadge(1032,"Basic Badge", "Gym Badge from Aspertia City in Unova","Basic_Badge.png"),
        1033: new ExploreAwardBadge(1033,"Toxic Badge", "Gym Badge from Virbank City in Unova","Toxic_Badge.png"),
        1034: new ExploreAwardBadge(1034,"Insect Badge", "Gym Badge from Castelia City in Unova","Insect_Badge.png"),
        1035: new ExploreAwardBadge(1035,"Bolt Badge", "Gym Badge from Nimbasa City in Unova","Bolt_Badge.png"),
        1036: new ExploreAwardBadge(1036,"Quake Badge", "Gym Badge from Driftveil City in Unova","Quake_Badge.png"),
        1037: new ExploreAwardBadge(1037,"Jet Badge", "Gym Badge from Mistralton City in Unova","Jet_Badge.png"),
        1038: new ExploreAwardBadge(1038,"Legend Badge", "Gym Badge from Opelucid City in Unova","Legend_Badge.png"),
        1039: new ExploreAwardBadge(1039,"Wave Badge", "Gym Badge from Humilau City in Unova","Wave_Badge.png"),
    }

export const exploreItems: Record<number, IExploreItem> =
    {
        // 0: {
        //     id: 0,
        //     name: "-",
        //     description: "-",
        //     shortDescription: "",
        //     type: "league",
        //     image: "",
        //     awards: [],
        // },
        1: {
            id: 1,
            name: "Lass",
            shortDescription: "An unexperienced Pokémon trainer",
            description: "An unexperienced Pokémon trainer",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer002c.png", direction: "down"},
            firstTimeAwards: [0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer002c.png",
                name: 'Lass',
                type: "normal",
                pokemon: [{variety: 16, level: 3}, {variety: 19, level: 5}, {variety: 52, level: 3}],
                maxLevel: 5
            },
            appearAfter: null,
            enableAfter: null
        },
        2: {
            id: 2,
            name: "Youngster",
            shortDescription: "An unexperienced Pokémon trainer",
            description: "An unexperienced Pokémon trainer",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer003cA.png", direction: "down"},
            firstTimeAwards: [0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer003cA.png",
                name: 'Youngster',
                type: "normal",
                pokemon: [{variety: 161, level: 3}, {variety: 163, level: 5}, {variety: 173, level: 3}],
                maxLevel: 5
            },
            appearAfter: null,
            enableAfter: null
        },
        3: {
            id: 3,
            name: "Brock",
            shortDescription: "Boulder Badge",
            description: "Known as the rock-solid Pokémon Trainer, he is a reliable Gym Leader who watches over and supports younger Trainers. Beat Brock to win the Boulder Badge",
            type: "league",
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
            enableAfter: 1
        },
        4: {
            id: 4,
            name: "Falkner",
            shortDescription: "Zephyr Badge",
            description: "Falkner is the Gym Leader of Violet City's Gym, known officially as the Violet Gym. He hands out the Zephyr Badge to Trainers who defeat him",
            type: "league",
            image: {type: "human", animationActive: true, name: "falkner.png", direction: "down"},
            firstTimeAwards: [1008, 2],
            awards: [0],
            trainerInfo: {
                sprite: "falkner.png",
                name: 'Falkner',
                type: "flying",
                pokemon: [{variety: 16, level: 5}, {variety: 17, level: 5}, {variety: 21, level: 5}],
                maxLevel: 5
            },
            appearAfter: null,
            enableAfter: 1
        },
        5: {
            id: 5,
            name: "Rocket Grunt Male",
            shortDescription: "Team Rocket is a villainous team in pursuit of evil and the exploitation of Pokémon. ",
            description: "Team Rocket is a villainous team in pursuit of evil and the exploitation of Pokémon. They are based in the Kanto and Johto regions, with a small outpost in the Sevii Islands.",
            type: "event",
            image: {type: "human", animationActive: true, name: "rocket_grunt.png", direction: "down"},
            firstTimeAwards: [0],
            awards: [0],
            trainerInfo: {
                sprite: "rocket_grunt.png",
                name: 'Rocket Grunt',
                type: "unknown",
                pokemon: [{variety: 41, level: 5}, {variety: 109, level: 5}, {variety: 19, level: 5}],
                maxLevel: 5
            },
            appearAfter: 3,
            enableAfter: 3
        },
        6: {
            id: 6,
            name: "Rocket Grunt Female",
            shortDescription: "Team Rocket is a villainous team in pursuit of evil and the exploitation of Pokémon. ",
            description: "Team Rocket is a villainous team in pursuit of evil and the exploitation of Pokémon. They are based in the Kanto and Johto regions, with a small outpost in the Sevii Islands.",
            type: "event",
            image: {type: "human", animationActive: true, name: "rocket_1.png", direction: "down"},
            firstTimeAwards: [0, 3],
            awards: [0],
            trainerInfo: {
                sprite: "rocket_1.png",
                name: 'Rocket Grunt',
                type: "unknown",
                pokemon: [{variety: 23, level: 6}, {variety: 24, level: 8}, {variety: 20, level: 6}],
                maxLevel: 8
            },
            appearAfter: 4,
            enableAfter: 5
        },
        7: {
            id: 7,
            name: "Roxanne",
            shortDescription: "Stone Badge",
            description: "An honors student at the Trainers’ School and a proud, skillful Gym Leader, she loves Rock-type Pokémon and fossils.",
            type: "league",
            image: {type: "human", animationActive: true, name: "roxane.png", direction: "down"},
            firstTimeAwards: [1016, 4],
            awards: [0],
            trainerInfo: {
                sprite: "roxane.png",
                name: 'Roxanne',
                type: "rock",
                pokemon: [{variety: 304, level: 8}, {variety: 299, level: 8}, {variety: 74, level: 8}],
                maxLevel: 8
            },
            appearAfter: 4,
            enableAfter: 5
        },
        8: {
            id: 8,
            name: "Gardenia",
            shortDescription: "Forest Badge",
            description: "This bold Gym Leader uses Grass-type Pokémon and is quite scared of ghosts and anything that surprises her. Her fear sometimes keeps her up at night.",
            type: "league",
            image: {type: "human", animationActive: true, name: "gardenia.png", direction: "down"},
            firstTimeAwards: [1025, 5],
            awards: [0],
            trainerInfo: {
                sprite: "gardenia.png",
                name: 'Gardenia',
                type: "grass",
                pokemon: [{variety: 420, level: 8}, {variety: 387, level: 8}, {variety: 407, level: 8}],
                maxLevel: 8
            },
            appearAfter: 4,
            enableAfter: 5
        },
        9: {
            id: 9,
            name: "Cheren",
            shortDescription: "Basic Badge",
            description: "Cheren is a Gym Leader of Aspertia City's Gym, known officially as the Aspertia Gym, in Pokémon Black 2 and White 2. As a Gym Leader, he specializes in Normal-type Pokémon. He gives the Basic Badge to Trainers who defeat him.",
            type: "league",
            image: {type: "human", animationActive: true, name: "cheren.png", direction: "down"},
            firstTimeAwards: [1032, 6],
            awards: [0],
            trainerInfo: {
                sprite: "cheren.png",
                name: 'Cheren',
                type: "normal",
                pokemon: [{variety: 504, level: 8}, {variety: 519, level: 8}, {variety: 506, level: 8}],
                maxLevel: 8
            },
            appearAfter: 4,
            enableAfter: 5
        },
        10: {
            id: 10,
            name: "School Kid Male",
            shortDescription: "An unexperienced Pokémon trainer",
            description: "A School Kid, is a type of Pokémon Trainer that debuted in the Generation II games as School boys. They are presented as young children carrying school bags, with the boys then growing up to become Super Nerds.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer013c.png", direction: "down"},
            firstTimeAwards: [0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer013c.png",
                name: 'School Kid',
                type: "unknown",
                pokemon: [{variety: 399, level: 6}, {variety: 300, level: 8}, {variety: 13, level: 6}],
                maxLevel: 8
            },
            appearAfter: null,
            enableAfter: 5
        },
        11: {
            id: 11,
            name: "School Kid Female",
            shortDescription: "An unexperienced Pokémon trainer",
            description: "A School Kid, is a type of Pokémon Trainer that debuted in the Generation II games as School boys. In Generation III, female variations were introduced and the class gained a gender-neutral name. They are presented as young children carrying school bags.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_117.png", direction: "down"},
            firstTimeAwards: [0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "HGSS_117.png",
                name: 'School Kid',
                type: "unknown",
                pokemon: [{variety: 114, level: 8}, {variety: 69, level: 10}, {variety: 263, level: 8}],
                maxLevel: 12
            },
            appearAfter: null,
            enableAfter: 10
        },
        12: {
            id: 12,
            name: "Tuber",
            shortDescription: "An unexperienced Pokémon trainer",
            description: "A Tuber is young children in inner tubes that are learning to swim. They appear to be younger versions of Swimmers.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "tuber.png", direction: "down"},
            firstTimeAwards: [0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "tuber.png",
                name: 'Tuber',
                type: "water",
                pokemon: [{variety: 370, level: 8}, {variety: 60, level: 10}, {variety: 298, level: 8}],
                maxLevel: 12
            },
            appearAfter: null,
            enableAfter: 10
        },
        13: {
            id: 13,
            name: "Misty",
            shortDescription: "Cascade Badge",
            description: "A Gym Leader known as the Tomboyish Mermaid, she has an upbeat personality but also acts tough and takes rules very seriously. Beat Misty to win the Cascade Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "misty.png", direction: "down"},
            firstTimeAwards: [1001, 7],
            awards: [0],
            trainerInfo: {
                sprite: "misty.png",
                name: 'Misty',
                type: "water",
                pokemon: [{variety: 55, level: 12}, {variety: 121, level: 12}, {variety: 131, level: 12}],
                maxLevel: 12
            },
            appearAfter: 9,
            enableAfter: 9
        },
        14: {
            id: 14,
            name: "Bugsy",
            shortDescription: "Hive Badge",
            description: "The youngest Gym Leader in Johto and a lover of bug Pokémon, he has great knowledge of Bug types and wants to become a Pokémon Professor.",
            type: "league",
            image: {type: "human", animationActive: true, name: "bugsy.png", direction: "down"},
            firstTimeAwards: [1009, 8],
            awards: [0],
            trainerInfo: {
                sprite: "bugsy.png",
                name: 'Bugsy',
                type: "bug",
                pokemon: [{variety: 11, level: 12}, {variety: 123, level: 12}, {variety: 14, level: 12}],
                maxLevel: 12
            },
            appearAfter: 8,
            enableAfter: 8
        },
        15: {
            id: 15,
            name: "Prof. Elm",
            shortDescription: "Professor Elm is the resident Pokémon Professor of New Bark Town in the Johto region.",
            description: "Professor Elm is the resident Pokémon Professor of New Bark Town in the Johto region. Saying so himself, Professor Elm studies unusual Pokémon Abilities. He also specializes in Pokémon breeding, and is credited with the discovery of Pokémon Eggs.",
            type: "event",
            image: {type: "human", animationActive: true, name: "elm.png", direction: "down"},
            firstTimeAwards: [0,0, 9],
            awards: [0],
            trainerInfo: {
                sprite: "elm.png",
                name: 'Prof. Elm',
                type: "unknown",
                pokemon: [{variety: 161, level: 12}, {variety: 155, level: 12}, {variety: 175, level: 12}],
                maxLevel: 12
            },
            appearAfter: 8,
            enableAfter: 8
        },
        16: {
            id: 16,
            name: "Hiker",
            shortDescription: "A Hiker is a large, typically bearded men carrying a walking stick and wearing hiking gear.",
            description: "A Hiker is a type of Pokémon Trainer that debuted in the Generation I games. They appear as large, typically bearded men carrying a walking stick and wearing hiking gear and also carry a large backpack.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_131.png", direction: "down"},
            firstTimeAwards: [0, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "HGSS_131.png",
                name: 'Hiker',
                type: "ground",
                pokemon: [{variety: 50, level: 10}, {variety: 75, level: 14}, {variety: 66, level: 10}],
                maxLevel: 16
            },
            appearAfter: null,
            enableAfter: 12
        },
        17: {
            id: 17,
            name: "Beauty",
            shortDescription: "A Beauty tend to use Pokémon that implement beauty and cuteness.",
            description: "A Beauty is a type of Pokémon Trainer that debuted in the Generation I games, and are generally depicted as vain young women. They use a variety of Pokémon, but tend to use those that implement beauty and cuteness.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer005c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer005c.png",
                name: 'Beauty',
                type: "unknown",
                pokemon: [{variety: 187, level: 14}, {variety: 36, level: 16}, {variety: 431, level: 12}],
                maxLevel: 16
            },
            appearAfter: null,
            enableAfter: 12
        },
        18: {
            id: 18,
            name: "Fisherman",
            shortDescription: "A Fisher is typically depicted as middle-aged men with rods, reels, and fishing gear, with a Poké Ball used as a lure.",
            description: "A Fisher is a type of Pokémon Trainer that first debuted in the Generation I games. They are typically depicted as middle-aged men with rods, reels, and fishing gear, with a Poké Ball used as a lure. ",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer006c.png", direction: "down"},
            firstTimeAwards: [0, 0, 10],
            awards: [0],
            trainerInfo: {
                sprite: "trainer006c.png",
                name: 'Fisherman',
                type: "water",
                pokemon: [{variety: 223, level: 14}, {variety: 118, level: 16}, {variety: 211, level: 14}],
                maxLevel: 16
            },
            appearAfter: null,
            enableAfter: 12
        },
        19: {
            id: 19,
            name: "Brawly",
            shortDescription: "Knuckle Badge",
            description: "The youngest Gym Leader in Johto and a lover of bug Pokémon, he has great knowledge of Bug types and wants to become a Pokémon Professor.",
            type: "league",
            image: {type: "human", animationActive: true, name: "brawly.png", direction: "down"},
            firstTimeAwards: [1017, 11, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "brawly.png",
                name: 'Brawly',
                type: "fighting",
                pokemon: [{variety: 66, level: 16}, {variety: 307, level: 16}, {variety: 296, level: 16}],
                maxLevel: 16
            },
            appearAfter: 14,
            enableAfter: 14
        },
        20: {
            id: 20,
            name: "Fantina",
            shortDescription: "Relic Badge",
            description: "This Gym Leader uses Ghost types and has made a reputation for herself in both contests and Pokémon battles. She is known for her avid study of Pokémon.",
            type: "league",
            image: {type: "human", animationActive: true, name: "fantina.png", direction: "down"},
            firstTimeAwards: [1028, 12, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "fantina.png",
                name: 'Fantina',
                type: "ghost",
                pokemon: [{variety: 425, level: 16}, {variety: 93, level: 16}, {variety: 200, level: 16}],
                maxLevel: 16
            },
            appearAfter: 13,
            enableAfter: 13
        },
        // 3: {
        //     id: 3,
        //     name: "Surge",
        //     shortDescription: "Thunder Badge",
        //     description: "This cautious Electric-type Gym Leader sets a lot of traps in his Gym. He excels at paralyzing his opponents in battle. Beat Surge to win the Thunder Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "surge.png", direction: "down"},
        //     firstTimeAwards: [1002],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "surge.png",
        //         name: 'Surge',
        //         type: "electric",
        //         pokemon: [{variety: 100, level: 12}, {variety: 26, level: 12}, {variety: 25, level: 12}],
        //         maxLevel: 12
        //     },
        //     appearAfter: 1,
        //     enableAfter: 2
        // },
        // 4: {
        //     id: 4,
        //     name: "Erika",
        //     shortDescription: "Rainbow Badge",
        //     description: "A cute Gym Leader who loves Grass-type Pokémon, this well-mannered Trainer teaches flower arrangement in Kanto. Beat Erika to win the Rainbow Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "erika.png", direction: "down"},
        //     firstTimeAwards: [1003],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "erika.png",
        //         name: 'Erika',
        //         type: "grass",
        //         pokemon: [{variety: 71, level: 16}, {variety: 45, level: 16}, {variety: 114, level: 16}],
        //         maxLevel: 16
        //     },
        //     appearAfter: 2,
        //     enableAfter: 3
        // },
        // 5: {
        //     id: 5,
        //     name: "Koga",
        //     shortDescription: "Soul Badge",
        //     description: "This modern-day ninja and member of the Elite Four wears down his opponents with his versatility and has also trained his daughter, Janine, in the ways of the ninja. Beat Koga to win the Soul Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "koga.png", direction: "down"},
        //     firstTimeAwards: [1004],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "koga.png",
        //         name: 'Koga',
        //         type: "poison",
        //         pokemon: [{variety: 109, level: 20}, {variety: 89, level: 20}, {variety: 110, level: 20}],
        //         maxLevel: 20
        //     },
        //     appearAfter: 3,
        //     enableAfter: 4
        // },
        // 6: {
        //     id: 6,
        //     name: "Sabrina",
        //     shortDescription: "Marsh Badge",
        //     description: "A powerful psychic herself, this Gym Leader who uses Psychic types can see the future with her precognitive powers. She allegedly does not like conflict. Beat Sabrina to win the Marsh Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "sabrina.png", direction: "down"},
        //     firstTimeAwards: [1005],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "sabrina.png",
        //         name: 'Sabrina',
        //         type: "psychic",
        //         pokemon: [{variety: 122, level: 24}, {variety: 65, level: 24}, {variety: 49, level: 24}],
        //         maxLevel: 24
        //     },
        //     appearAfter: 4,
        //     enableAfter: 5
        // },
        // 7: {
        //     id: 7,
        //     name: "Blaine",
        //     shortDescription: "Volcano Badge",
        //     description: "This old man with a passion for trivia is known as the hotheaded quiz master. He’s a Fire-type Gym Leader with a veteran Trainer’s skill and a researcher’s knowledge. Beat Blaine to win the Volcano Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "blaine.png", direction: "down"},
        //     firstTimeAwards: [1006],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "blaine.png",
        //         name: 'Blaine',
        //         type: "fire",
        //         pokemon: [{variety: 77, level: 28}, {variety: 78, level: 28}, {variety: 58, level: 28}],
        //         maxLevel: 28
        //     },
        //     appearAfter: 5,
        //     enableAfter: 6
        // },
        // 8: {
        //     id: 8,
        //     name: "Blue",
        //     shortDescription: "Earth Badge",
        //     description: "This highly skilled, powerhouse Trainer prominent in Kanto is the grandson of the famous Professor Oak. Red is both his lifelong rival and his best friend. Beat Blue to win the Earth Badge",
        //     type: "league",
        //     image: {type: "human", animationActive: true, name: "blue.png", direction: "down"},
        //     firstTimeAwards: [1007],
        //     awards: [0],
        //     trainerInfo: {
        //         sprite: "blue.png",
        //         name: 'Blue',
        //         type: "unknown",
        //         pokemon: [{variety: 111, level: 32}, {variety: 59, level: 32}, {variety: 18, level: 32}],
        //         maxLevel: 32
        //     },
        //     appearAfter: 6,
        //     enableAfter: 7
        // },
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


