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
        13: new ExploreAwardPokemon(13, "Venipede", 543, 5),
        14: new ExploreAwardPokemon(14, "Pikachu", 25, 5),
        15: new ExploreAwardPokemon(15, "Miltank", 241, 5),
        16: new ExploreAwardPokemon(16, "Mudkip", 258, 1),
        17: new ExploreAwardPokemon(17, "Torchic", 255, 1),
        18: new ExploreAwardPokemon(18, "Wingull", 278, 1),
        19: new ExploreAwardPokemon(19, "Riolu", 447, 1),
        20: new ExploreAwardPokemon(20, "Combee", 415, 1),
        21: new ExploreAwardPokemon(21, "Shellder", 90, 1),
        22: new ExploreAwardPokemon(22, "Yanma", 193, 5),
        23: new ExploreAwardPokemon(23, "Magby", 240, 1),
        24: new ExploreAwardPokemon(24, "Gastly", 92, 5),
        25: new ExploreAwardPokemon(25, "Treecko", 252, 1),
        26: new ExploreAwardPokemon(26, "Vulpix", 37, 1),
        27: new ExploreAwardPokemon(27, "Solrock", 338, 8),
        28: new ExploreAwardPokemon(28, "Magikarp", 129, 1),
        29: new ExploreAwardPokemon(29, "Emolga", 587, 1),
        30: new ExploreAwardPokemon(30, "Hitmonlee", 106, 12),
        31: new ExploreAwardPokemon(31, "Eevee", 133, 1),
        32: new ExploreAwardPokemon(32, "Bulbasaur", 1, 1),
        33: new ExploreAwardPokemon(33, "Seel", 86, 10),
        34: new ExploreAwardPokemon(34, "Glameow", 431, 1),
        35: new ExploreAwardPokemon(35, "Stunky", 434, 1),
        36: new ExploreAwardPokemon(36, "Vigoroth", 288, 5),
        37: new ExploreAwardPokemon(37, "Cranidos", 408, 5),
        38: new ExploreAwardPokemon(38, "Tympole", 535, 1),
        39: new ExploreAwardPokemon(39, "Magnemite", 81, 1),
        40: new ExploreAwardPokemon(40, "Mime Jr.", 439, 1),
        41: new ExploreAwardPokemon(41, "Skarmory", 227, 10),
        42: new ExploreAwardPokemon(42, "Miltank", 241, 5),
        43: new ExploreAwardPokemon(43, "Tauros", 128, 8),
        44: new ExploreAwardPokemon(44, "Electrike", 309, 8),
        45: new ExploreAwardPokemon(45, "Sneasel", 215, 16),
        46: new ExploreAwardPokemon(46, "Ducklett", 580, 8),
        47: new ExploreAwardPokemon(47, "Cubone", 104, 8),
        48: new ExploreAwardPokemon(48, "Koffing", 109, 24),
        49: new ExploreAwardPokemon(49, "Hitmonchan", 107, 12),
        50: new ExploreAwardPokemon(50, "Trubbish", 568, 12),
        51: new ExploreAwardPokemon(51, "Purrloin", 509, 8),
        52: new ExploreAwardPokemon(52, "Numel", 322, 12),
        53: new ExploreAwardPokemon(53, "Bronzor", 436, 12),
        54: new ExploreAwardPokemon(54, "Swablu", 333, 12),
        55: new ExploreAwardPokemon(55, "Minccino", 572, 12),
        56: new ExploreAwardPokemon(56, "Growlithe", 58, 12),
        57: new ExploreAwardPokemon(57, "Dratini", 147, 8),
        58: new ExploreAwardPokemon(58, "Piplup", 393, 1),
        59: new ExploreAwardPokemon(59, "Chimchar", 390, 1),
        60: new ExploreAwardPokemon(60, "Spheal", 363, 1),
        61: new ExploreAwardPokemon(61, "Elekid", 239, 1),
        62: new ExploreAwardPokemon(62, "Vanillite", 582, 1),


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
        1039: new ExploreAwardBadge(1039,"Freeze Badge", "Gym Badge from Icirrus City in Unova","Freeze_Badge.png"),
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
            shortDescription: "A Lass is an average young girls in clothing resembling school uniforms. ",
            description: "A Lass is a type of Pokémon Trainer that first debuted in the Generation I games. They are depicted as average young girls in clothing resembling school uniforms. Lasses appear to be the female counterparts of Youngsters and they grow up to be Beauties.",
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
            shortDescription: "A Youngster is an average young boy wearing cap and short pants.",
            description: "A Youngster is a type of Pokémon Trainer that debuted in the Generation I games. They are depicted as average young boys wearing caps and short pants.",
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
            shortDescription: "A School Kid is a young children carrying school bags,",
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
            shortDescription: "A School Kid is a young children carrying school bags.",
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
            name: "Tuber Male",
            shortDescription: "A Tuber is young children in inner tubes that are learning to swim.",
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
            description: "This Gym Leader is skilled with Fighting-type Pokémon and also trains his body to surf. He moved from Kanto to Hoenn for the waves.",
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
        21: {
            id: 21,
            name: "Roxie",
            shortDescription: "Toxic Badge",
            description: "Highly popular in the Unova region, this bassist balances her time between her band and being a Poison-type Gym Leader.",
            type: "league",
            image: {type: "human", animationActive: true, name: "roxie.png", direction: "down"},
            firstTimeAwards: [1033, 13, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "roxie.png",
                name: 'Roxie',
                type: "poison",
                pokemon: [{variety: 544, level: 20}, {variety: 545, level: 20}, {variety: 569, level: 20}],
                maxLevel: 20
            },
            appearAfter: 20,
            enableAfter: 20
        },
        22: {
            id: 22,
            name: "Lady",
            shortDescription: "A Lady is depicted as girls dressed in elaborate and fancy clothing.",
            description: "A Lady is a type of Pokémon Trainer that first debuted in the Generation III games. They are depicted as girls dressed in elaborate and fancy clothing.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer007c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer007c.png",
                name: 'Lady',
                type: "unknown",
                pokemon: [{variety: 179, level: 16}, {variety: 270, level: 18}, {variety: 263, level: 16}],
                maxLevel: 20
            },
            appearAfter: null,
            enableAfter: 18
        },
        23: {
            id: 23,
            name: "Cyclist",
            shortDescription: "A Cyclist is a young men on bicycles who wear spandex.",
            description: "A Cyclist is a type of Pokémon Trainer that first debuted in the Generation IV games. They are young men and women on bicycles who wear spandex.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer008c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "trainer008c.png",
                name: 'Cyclist',
                type: "unknown",
                pokemon: [{variety: 396, level: 18}, {variety: 83, level: 18}, {variety: 84, level: 18}],
                maxLevel: 20
            },
            appearAfter: null,
            enableAfter: 18
        },
        24: {
            id: 24,
            name: "Surge",
            shortDescription: "Thunder Badge",
            description: "This cautious Electric-type Gym Leader sets a lot of traps in his Gym. He excels at paralyzing his opponents in battle. Beat Surge to win the Thunder Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "surge.png", direction: "down"},
            firstTimeAwards: [1002, 14, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "surge.png",
                name: 'Surge',
                type: "electric",
                pokemon: [{variety: 100, level: 20}, {variety: 26, level: 20}, {variety: 25, level: 20}],
                maxLevel: 20
            },
            appearAfter: 20,
            enableAfter: 20
        },
        25: {
            id: 25,
            name: "Whitney",
            shortDescription: "Plain Badge",
            description: "A lively, talkative, trend-following Gym Leader who’s proud of her cute Pokémon, she cries in disappointment when she loses a battle.",
            type: "league",
            image: {type: "human", animationActive: true, name: "whitney.png", direction: "down"},
            firstTimeAwards: [1010, 15, 0, 0],
            awards: [0],
            trainerInfo: {
                sprite: "whitney.png",
                name: 'Whitney',
                type: "normal",
                pokemon: [{variety: 36, level: 20}, {variety: 241, level: 20}, {variety: 203, level: 20}],
                maxLevel: 20
            },
            appearAfter: 20,
            enableAfter: 20
        },
        26: {
            id: 26,
            name: "Team Aqua",
            shortDescription: "Team Aqua's ultimate goal is to expand the amount of water in the world.",
            description: "Team Aqua is one of two villainous teams found in the Hoenn region, alongside their rivals, Team Magma. Team Aqua's ultimate goal is to expand the amount of water in the world.",
            type: "event",
            image: {type: "human", animationActive: true, name: "aqua.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 16],
            awards: [0,0],
            trainerInfo: {
                sprite: "aqua.png",
                name: 'Team Aqua',
                type: "water",
                pokemon: [{variety: 261, level: 24}, {variety: 260, level: 24}, {variety: 279, level: 24}],
                maxLevel: 24
            },
            appearAfter: 20,
            enableAfter: 25
        },
        27: {
            id: 27,
            name: "Team Magma",
            shortDescription: "Team Magma's ultimate goal is to expand the amount of landmass in the world.",
            description: "Team Magma is one of two villainous teams found in the Hoenn region, alongside their rivals, Team Aqua. Team Magma's ultimate goal is to expand the amount of landmass in the world.",
            type: "event",
            image: {type: "human", animationActive: true, name: "magma.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 17],
            awards: [0,0],
            trainerInfo: {
                sprite: "magma.png",
                name: 'Team Magma',
                type: "fire",
                pokemon: [{variety: 264, level: 24}, {variety: 256, level: 24}, {variety: 322, level: 24}],
                maxLevel: 24
            },
            appearAfter: 20,
            enableAfter: 25
        },
        28: {
            id: 28,
            name: "Winona",
            shortDescription: "Feather Badge.",
            description: "This Gym Leader loves bird Pokémon more than anything. She has passionate fans in the Fortree City Gym thanks to her graceful appearance.",
            type: "league",
            image: {type: "human", animationActive: true, name: "winona.png", direction: "down"},
            firstTimeAwards: [1021, 18, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "winona.png",
                name: 'Winona',
                type: "flying",
                pokemon: [{variety: 277, level: 24}, {variety: 279, level: 24}, {variety: 334, level: 24}],
                maxLevel: 24
            },
            appearAfter: 25,
            enableAfter: 25
        },
        29: {
            id: 29,
            name: "Maylene",
            shortDescription: "Cobble Badge.",
            description: "This young fighting genius is a Gym Leader who is always training with her Fighting-type Pokémon. She never forgets to express her gratitude to her opponents.",
            type: "league",
            image: {type: "human", animationActive: true, name: "maylene.png", direction: "down"},
            firstTimeAwards: [1026, 19, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "maylene.png",
                name: 'Maylene',
                type: "bug",
                pokemon: [{variety: 237, level: 24}, {variety: 448, level: 24}, {variety: 334, level: 24}],
                maxLevel: 24
            },
            appearAfter: 25,
            enableAfter: 25
        },
        30: {
            id: 30,
            name: "Burgh",
            shortDescription: "Insect Badge.",
            description: "Burgh is an artist who is the Gym Leader of Castelia City's Gym, known officially as the Castelia Gym. He specializes in Bug-type Pokémon. He gives the Insect Badge to Trainers who defeat him.",
            type: "league",
            image: {type: "human", animationActive: true, name: "burgh.png", direction: "down"},
            firstTimeAwards: [1034, 20, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "burgh.png",
                name: 'Burgh',
                type: "bug",
                pokemon: [{variety: 617, level: 24}, {variety: 416, level: 24}, {variety: 632, level: 24}],
                maxLevel: 24
            },
            appearAfter: 25,
            enableAfter: 25
        },
        31: {
            id: 31,
            name: "Sailor",
            shortDescription: "A Sailor is often depicted as burly men in sailor suits flexing their muscles.",
            description: "A Sailor is a type of Pokémon Trainer that debuted in the Generation I games. Originally they were often depicted as burly men in sailor suits flexing their muscles, though their actual physical shape varies between games. ",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer046cA.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer046cA.png",
                name: 'Sailor',
                type: "water",
                pokemon: [{variety: 61, level: 21}, {variety: 99, level: 24}, {variety: 66, level: 21}],
                maxLevel: 24
            },
            appearAfter: null,
            enableAfter: 25
        },
        32: {
            id: 32,
            name: "Boarder",
            shortDescription: "A Boarder is generally depicted as young men in winter clothing, riding a snowboard",
            description: "A Boarder is a type of Pokémon Trainer that debuted in the Generation II games. They are generally depicted as young men in winter clothing, riding a snowboard.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_177.png", direction: "down"},
            firstTimeAwards: [21, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_177.png",
                name: 'Boarder',
                type: "ice",
                pokemon: [{variety: 86, level: 24}, {variety: 87, level: 24}, {variety: 220, level: 24}],
                maxLevel: 28
            },
            appearAfter: null,
            enableAfter: 31
        },
        33: {
            id: 33,
            name: "Bug Catcher",
            shortDescription: "A Bug Catcher is generally depicted as little boys in hats, carrying nets and what appears to be their lunchboxes, or containers to keep caught bugs in.",
            description: "A Bug Catcher is a type of Pokémon Trainer that debuted in the Generation I games. They are generally depicted as little boys in hats, carrying nets and what appears to be their lunchboxes, or containers to keep caught bugs in, held by a strap after Generation II. Most Bug Catchers have been considered just hobbyists.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer012c.png", direction: "down"},
            firstTimeAwards: [22, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer012c.png",
                name: 'Bug Catcher',
                type: "bug",
                pokemon: [{variety: 46, level: 24}, {variety: 49, level: 28}, {variety: 48, level: 24}],
                maxLevel: 28
            },
            appearAfter: null,
            enableAfter: 31
        },
        34: {
            id: 34,
            name: "Blaine",
            shortDescription: "Volcano Badge",
            description: "This old man with a passion for trivia is known as the hotheaded quiz master. He’s a Fire-type Gym Leader with a veteran Trainer’s skill and a researcher’s knowledge. Beat Blaine to win the Volcano Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "blaine.png", direction: "down"},
            firstTimeAwards: [1006, 23, 0 , 0, 0],
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
        35: {
            id: 35,
            name: "Morty",
            shortDescription: "Fog Badge.",
            description: "Morty (Japanese: マツバ Matsuba) is the Gym Leader of Ecruteak City's Gym, known officially as the Ecruteak Gym. He hands out the Fog Badge to Trainers who defeat him.",
            type: "league",
            image: {type: "human", animationActive: true, name: "morty.png", direction: "down"},
            firstTimeAwards: [1011, 24, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "morty.png",
                name: 'Morty',
                type: "ghost",
                pokemon: [{variety: 92, level: 28}, {variety: 95, level: 28}, {variety: 93, level: 28}],
                maxLevel: 28
            },
            appearAfter: 30,
            enableAfter: 30
        },
        36: {
            id: 36,
            name: "Prof. Birch",
            shortDescription: "Professor Birch is the resident Pokémon Professor of Littleroot Town and the Hoenn region.",
            description: "Professor Birch is the resident Pokémon Professor of Littleroot Town and the Hoenn region. He specializes in Pokémon habitats and distribution.",
            type: "event",
            image: {type: "human", animationActive: true, name: "prof_birch.png", direction: "down"},
            firstTimeAwards: [25,0, 0, 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "prof_birch.png",
                name: 'Prof. Birch',
                type: "unknown",
                pokemon: [{variety: 256, level: 28}, {variety: 254, level: 28}, {variety: 262, level: 28}],
                maxLevel: 28
            },
            appearAfter: 30,
            enableAfter: 35
        },
        37: {
            id: 37,
            name: "Picnicker",
            shortDescription: "A Picnicker is a younger girl in uniform.",
            description: "A Picnicker is a type of Pokémon Trainer that first debuted in the Generation I games. They are generally depicted as younger girls in uniforms. Their male counterpart is Camper.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer060c.png", direction: "down"},
            firstTimeAwards: [26, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer060c.png",
                name: 'Picnicker',
                type: "unknown",
                pokemon: [{variety: 70, level: 28}, {variety: 37, level: 28}, {variety: 35, level: 28}],
                maxLevel: 32
            },
            appearAfter: null,
            enableAfter: 33
        },
        38: {
            id: 38,
            name: "Camper",
            shortDescription: "A Camper is a little boy in uniform.",
            description: "A Camper is a type of Pokémon Trainer that debuted in the Generation I games. They are generally depicted as little boys in uniforms. Their female counterpart is Picnicker.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer059c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer059c.png",
                name: 'Camper',
                type: "unknown",
                pokemon: [{variety: 27, level: 28}, {variety: 56, level: 28}, {variety: 352, level: 32}],
                maxLevel: 32
            },
            appearAfter: null,
            enableAfter: 33
        },
        39: {
            id: 39,
            name: "Liza",
            shortDescription: "Mind Badge.",
            description: "One of a rare pair of twin Gym Leaders, she helps at the Mossdeep Space Center and excels at cooperation in battle—much like her twin, Tate.",
            type: "league",
            image: {type: "human", animationActive: false, name: "liza_gym.png", direction: "down"},
            firstTimeAwards: [1022, 27, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "liza_gym.png",
                name: 'Liza',
                type: "psychic",
                pokemon: [{variety: 337, level: 32}, {variety: 338, level: 32}, {variety: 178, level: 32}],
                maxLevel: 32
            },
            appearAfter: 35,
            enableAfter: 35
        },
        40: {
            id: 40,
            name: "Crasher Wake",
            shortDescription: "Fen Badge.",
            description: "A Gym Leader who uses Water-type Pokémon, Crasher Wake is beloved by his many fans for his passionate performances.",
            type: "league",
            image: {type: "human", animationActive: false, name: "wake.png", direction: "down"},
            firstTimeAwards: [1027, 28, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "wake.png",
                name: 'Crasher Wake',
                type: "water",
                pokemon: [{variety: 130, level: 32}, {variety: 195, level: 32}, {variety: 419, level: 32}],
                maxLevel: 32
            },
            appearAfter: 35,
            enableAfter: 35
        },
        41: {
            id: 41,
            name: "Elesa",
            shortDescription: "Bolt Badge.",
            description: "This Electric-type Gym Leader also works as a model. Watching her battle in the beautiful, bright lights of her Gym can be mesmerizing.",
            type: "league",
            image: {type: "human", animationActive: false, name: "elesa.png", direction: "down"},
            firstTimeAwards: [1035, 29, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "elesa.png",
                name: 'Elesa',
                type: "electric",
                pokemon: [{variety: 587, level: 32}, {variety: 596, level: 32}, {variety: 523, level: 32}],
                maxLevel: 32
            },
            appearAfter: 35,
            enableAfter: 35
        },
        42: {
            id: 72,
            name: "Black Belt",
            shortDescription: "A Black Belt is a generic martial artist, in headband and gi striking a fighting pose.",
            description: "A Black Belt is a Trainer class that debuted in the Generation I games. They are generally depicted as generic martial artists, in headband and gi striking a fighting pose.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer016c.png", direction: "down"},
            firstTimeAwards: [30, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer016c.png",
                name: 'Black Belt',
                type: "fighting",
                pokemon: [{variety: 106, level: 32}, {variety: 56, level: 32}, {variety: 107, level: 32}],
                maxLevel: 36
            },
            appearAfter: null,
            enableAfter: 38
        },
        43: {
            id: 43,
            name: "Kimono Girl",
            shortDescription: "A Kimono Girl is a young women dressed in kimono.",
            description: "A Kimono Girl is a type of Pokémon Trainer that first debuted in the Generation II games. They appear as young women dressed in kimonos.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "kimono_girl.png", direction: "down"},
            firstTimeAwards: [31, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "kimono_girl.png",
                name: 'Black Belt',
                type: "unknown",
                pokemon: [{variety: 134, level: 34}, {variety: 135, level: 34}, {variety: 136, level: 34}],
                maxLevel: 36
            },
            appearAfter: null,
            enableAfter: 42
        },
        44: {
            id: 44,
            name: "Erika",
            shortDescription: "Rainbow Badge",
            description: "A cute Gym Leader who loves Grass-type Pokémon, this well-mannered Trainer teaches flower arrangement in Kanto. Beat Erika to win the Rainbow Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "erika.png", direction: "down"},
            firstTimeAwards: [1003, 32, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "erika.png",
                name: 'Erika',
                type: "grass",
                pokemon: [{variety: 71, level: 36}, {variety: 45, level: 36}, {variety: 114, level: 36}],
                maxLevel: 36
            },
            appearAfter: 40,
            enableAfter: 40
        },
        45: {
            id: 45,
            name: "Pryce",
            shortDescription: "Glacier Badge",
            description: "This veteran Gym Leader with over 50 years experience is known as the Winter Trainer. He stays healthy with his daily routine of early morning Pokémon battling.",
            type: "league",
            image: {type: "human", animationActive: true, name: "pryce.png", direction: "down"},
            firstTimeAwards: [1014, 33, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "pryce.png",
                name: 'Pryce',
                type: "ice",
                pokemon: [{variety: 91, level: 36}, {variety: 87, level: 36}, {variety: 221, level: 36}],
                maxLevel: 36
            },
            appearAfter: 40,
            enableAfter: 40
        },
        46: {
            id: 46,
            name: "Galactic Grunt Female",
            shortDescription: "A Galactic Grunt Female is a grunt of Team Galactic.",
            description: "They are the grunts of Team Galactic. There are male and female versions, and they all dress in the spacesuit-looking outfits that are the Team Galactic uniforms and have turquoise hair that is cut quite short and rounded.",
            type: "event",
            image: {type: "human", animationActive: true, name: "galactic2.png", direction: "down"},
            firstTimeAwards: [34,0, 0, 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "galactic2.png",
                name: 'Galactic Grunt Female',
                type: "unknown",
                pokemon: [{variety: 431, level: 36}, {variety: 434, level: 36}, {variety: 453, level: 36}],
                maxLevel: 36
            },
            appearAfter: 45,
            enableAfter: 45
        },
        47: {
            id: 47,
            name: "Galactic Grunt Female",
            shortDescription: "A Galactic Grunt Male is a grunt of Team Galactic.",
            description: "They are the grunts of Team Galactic. There are male and female versions, and they all dress in the spacesuit-looking outfits that are the Team Galactic uniforms and have turquoise hair that is cut quite short and rounded.",
            type: "event",
            image: {type: "human", animationActive: true, name: "galactic1.png", direction: "down"},
            firstTimeAwards: [35,0, 0, 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "galactic1.png",
                name: 'Galactic Grunt Female',
                type: "unknown",
                pokemon: [{variety: 42, level: 40}, {variety: 466, level: 40}, {variety: 198, level: 40}],
                maxLevel: 40
            },
            appearAfter: 45,
            enableAfter: 45
        },
        48: {
            id: 48,
            name: "Norman",
            shortDescription: "Balance Badge",
            description: "This Gym Leader is a serious, stoic family man who never neglects his training to become stronger—nor caring for his family—in his pursuit of victory.",
            type: "league",
            image: {type: "human", animationActive: true, name: "norman.png", direction: "down"},
            firstTimeAwards: [1020, 36, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "norman.png",
                name: 'Norman',
                type: "normal",
                pokemon: [{variety: 289, level: 40}, {variety: 288, level: 40}, {variety: 289, level: 40}],
                maxLevel: 40
            },
            appearAfter: 44,
            enableAfter: 44
        },
        49: {
            id: 49,
            name: "Roark",
            shortDescription: "Coal Badge",
            description: "A Gym Leader who uses Rock types and works in a mine, he’s good at digging holes and likes to collect fossils. He respects his father, Byron, who is also a Gym Leader.",
            type: "league",
            image: {type: "human", animationActive: true, name: "roark.png", direction: "down"},
            firstTimeAwards: [1024, 37, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "roark.png",
                name: 'Roark',
                type: "rock",
                pokemon: [{variety: 409, level: 40}, {variety: 76, level: 40}, {variety: 369, level: 40}],
                maxLevel: 40
            },
            appearAfter: 45,    
            enableAfter: 45
        },
        50: {
            id: 50,
            name: "Clay",
            shortDescription: "Quake Badge",
            description: "This Ground-type Gym Leader runs a mining company in Unova. He is a bit pushy but is admired by his employees and the community for his strong sense of justice.",
            type: "league",
            image: {type: "human", animationActive: true, name: "clay.png", direction: "down"},
            firstTimeAwards: [1036, 38, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "clay.png",
                name: 'Clay',
                type: "ground",
                pokemon: [{variety: 552, level: 40}, {variety: 537, level: 40}, {variety: 530, level: 40}],
                maxLevel: 40
            },
            appearAfter: 45,
            enableAfter: 45
        },
        51: {
            id: 51,
            name: "Cameraman",
            shortDescription: "A Cameraman is young men working as television cameramen.",
            description: "A Cameraman is a type of Pokémon Trainer that first debuted in the Generation IV games. They are young men working as television cameramen. Cameramen are the male counterparts of Reporters. When paired with Reporters in Double Battles, they are called Interviewers.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer024cM.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer024cM.png",
                name: 'Cameraman',
                type: "unknown",
                pokemon: [{variety: 81, level: 36}, {variety: 122, level: 38}, {variety: 417, level: 36}],
                maxLevel: 40
            },
            appearAfter: null,
            enableAfter: 43
        },
        52: {
            id: 52,
            name: "Tuber Female",
            shortDescription: "A Tuber is young children in inner tubes that are learning to swim.",
            description: "A Tuber is young children in inner tubes that are learning to swim. They appear to be younger versions of Swimmers.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer025cA.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer025cA.png",
                name: 'Tuber Female',
                type: "water",
                pokemon: [{variety: 120, level: 36}, {variety: 61, level: 38}, {variety: 118, level: 36}],
                maxLevel: 40
            },
            appearAfter: null,
            enableAfter: 43
        },
        53: {
            id: 53,
            name: "Tuber Female",
            shortDescription: "A Tuber is young children in inner tubes that are learning to swim.",
            description: "A Tuber is young children in inner tubes that are learning to swim. They appear to be younger versions of Swimmers.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer025cA.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer025cA.png",
                name: 'Tuber Female',
                type: "water",
                pokemon: [{variety: 120, level: 40}, {variety: 61, level: 40}, {variety: 118, level: 40}],
                maxLevel: 44
            },
            appearAfter: null,
            enableAfter: 43
        },
        54: {
            id: 54,
            name: "Guitarist",
            shortDescription: "A Guitarist is a young, blond men playing guitars.",
            description: "A Guitarist a type of Pokémon Trainer that debuted in Generation II games. They appear as young, blond men playing guitars.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer027c.png", direction: "down"},
            firstTimeAwards: [39, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer027c.png",
                name: 'Guitarist',
                type: "electric",
                pokemon: [{variety: 82, level: 40}, {variety: 100, level: 40}, {variety: 309, level: 40}],
                maxLevel: 44
            },
            appearAfter: null,
            enableAfter: 43
        },
        55: {
            id: 55,
            name: "Gentleman",
            shortDescription: "A Gentleman is an older men in dapper suits.",
            description: "A Gentleman (Japanese: ジェントルマン Gentleman) is a type of Pokémon Trainer that debuted in the Generation I games. They are older men in dapper suits.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer028c.png", direction: "down"},
            firstTimeAwards: [39, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer028c.png",
                name: 'Gentleman',
                type: "unknown",
                pokemon: [{variety: 164, level: 42}, {variety: 53, level: 44}, {variety: 58, level: 42}],
                maxLevel: 44
            },
            appearAfter: null,
            enableAfter: 43
        },
        56: {
            id: 56,
            name: "Sabrina",
            shortDescription: "Marsh Badge",
            description: "A powerful psychic herself, this Gym Leader who uses Psychic types can see the future with her precognitive powers. She allegedly does not like conflict. Beat Sabrina to win the Marsh Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "sabrina.png", direction: "down"},
            firstTimeAwards: [1005, 40, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "sabrina.png",
                name: 'Sabrina',
                type: "psychic",
                pokemon: [{variety: 122, level: 44}, {variety: 65, level: 44}, {variety: 49, level: 44}],
                maxLevel: 44
            },
            appearAfter: 50,
            enableAfter: 50
        },
        57: {
            id: 57,
            name: "Jasmine",
            shortDescription: "Mineral Badge",
            description: "Jasmine is the Gym Leader of Olivine City's Gym, known officially as the Olivine Gym. She specializes in Steel-type Pokémon, and she gives the Mineral Badge to Trainers who defeat her in battle.",
            type: "league",
            image: {type: "human", animationActive: true, name: "jasmine.png", direction: "down"},
            firstTimeAwards: [1013, 41, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "jasmine.png",
                name: 'Jasmine',
                type: "steel",
                pokemon: [{variety: 208, level: 44}, {variety: 227, level: 44}, {variety: 462, level: 44}],
                maxLevel: 44
            },
            appearAfter: 50,
            enableAfter: 50
        },
        58: {
            id: 58,
            name: "Cowgirl",
            shortDescription: "A Cowgirl is a young women in cowgirl outfits.",
            description: "A Cowgirl is a type of Pokémon Trainer that debuted in the Generation IV games. They are depicted as young women in cowgirl outfits. Cowgirls are the female counterparts of Ranchers.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_043.png", direction: "down"},
            firstTimeAwards: [42, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_043.png",
                name: 'Cowgirl',
                type: "unknown",
                pokemon: [{variety: 241, level: 44}, {variety: 77, level: 44}, {variety: 399, level: 44}],
                maxLevel: 48
            },
            appearAfter: null,
            enableAfter: 55
        },
        59: {
            id: 59,
            name: "Rancher",
            shortDescription: "A Rancher is a middle-aged man, wearing cowboy hat and overalls, and carrying a pitchfork",
            description: "A Rancher is a type of Pokémon Trainer that first debuted in the Generation IV games. They are depicted as middle-aged men, wearing cowboy hats and overalls, and carry pitchforks. Ranchers are the male counterparts of Cowgirls. ",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_042.png", direction: "down"},
            firstTimeAwards: [43, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_042.png",
                name: 'Rancher',
                type: "normal",
                pokemon: [{variety: 128, level: 44}, {variety: 203, level: 44}, {variety: 424, level: 44}],
                maxLevel: 48
            },
            appearAfter: null,
            enableAfter: 55
        },
        60: {
            id: 60,
            name: "Wattson",
            shortDescription: "Dynamo Badge",
            description: "Wattson is the Gym Leader of Mauville City's Gym, known officially as the Mauville Gym. Trainers who defeat him receive the Dynamo Badge. He is a jolly old man who specializes in Electric-type Pokémon.",
            type: "league",
            image: {type: "human", animationActive: true, name: "wattson.png", direction: "down"},
            firstTimeAwards: [1018, 44, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "wattson.png",
                name: 'Wattson',
                type: "electric",
                pokemon: [{variety: 82, level: 48}, {variety: 310, level: 48}, {variety: 181, level: 48}],
                maxLevel: 48
            },
            appearAfter: 57,
            enableAfter: 57
        },
        61: {
            id: 61,
            name: "Candice",
            shortDescription: "Icicle Badge",
            description: "This passionate Gym Leader has a fixation on focus. However, she sometimes wonders if she should play it cooler as an Ice-type Pokémon user.",
            type: "league",
            image: {type: "human", animationActive: true, name: "candice.png", direction: "down"},
            firstTimeAwards: [1030, 45, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "candice.png",
                name: 'Candice',
                type: "ice",
                pokemon: [{variety: 215, level: 48}, {variety: 460, level: 48}, {variety: 478, level: 48}],
                maxLevel: 48
            },
            appearAfter: 57,
            enableAfter: 57
        },
        62: {
            id: 62,
            name: "Skyla",
            shortDescription: "Jet Badge",
            description: "Normally a cargo plane pilot, this Gym Leader flies through the sky with her Pokémon. Her cheery personality has earned her many fans.",
            type: "league",
            image: {type: "human", animationActive: true, name: "skyla.png", direction: "down"},
            firstTimeAwards: [1037, 46, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "skyla.png",
                name: 'Skyla',
                type: "flying",
                pokemon: [{variety: 528, level: 48}, {variety: 561, level: 48}, {variety: 581, level: 48}],
                maxLevel: 48
            },
            appearAfter: 57,
            enableAfter: 57
        },
        63: {
            id: 63,
            name: "Battle Girl",
            shortDescription: "A Battle is a young girl dressed in midriff-baring crop tops and shorts and striking a fighting pose.",
            description: "A Battle Girl is a type of Pokémon Trainer that debuted in the Generation III games. They are generally depicted as young girls or young women, dressed in midriff-baring crop tops and shorts and striking a fighting pose.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer033c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer033c.png",
                name: 'Battle Girl',
                type: "fighting",
                pokemon: [{variety: 286, level: 48}, {variety: 297, level: 48}, {variety: 308, level: 48}],
                maxLevel: 52
            },
            appearAfter: null,
            enableAfter: 55
        },
        64: {
            id: 64,
            name: "Battle Girl",
            shortDescription: "A Battle is a young girl dressed in midriff-baring crop tops and shorts and striking a fighting pose.",
            description: "A Battle Girl is a type of Pokémon Trainer that debuted in the Generation III games. They are generally depicted as young girls or young women, dressed in midriff-baring crop tops and shorts and striking a fighting pose.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer033c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer033c.png",
                name: 'Battle Girl',
                type: "fighting",
                pokemon: [{variety: 286, level: 48}, {variety: 297, level: 48}, {variety: 308, level: 48}],
                maxLevel: 52
            },
            appearAfter: null,
            enableAfter: 55
        },
        65: {
            id: 65,
            name: "Ace Trainer Man",
            shortDescription: "An Ace Trainer is an young adult who frequently travel around the world to take part in Pokémon League competitions.",
            description: "An Ace Trainer is a type of Pokémon Trainer that debuted in the Generation I games. They are depicted as teens or young adults and can be male or female. They are Trainers who frequently travel around the world to meet new Trainers and take part in Pokémon League competitions. ",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_011.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_011.png",
                name: 'Ace Trainer Man',
                type: "unknown",
                pokemon: [{variety: 452, level: 50}, {variety: 455, level: 50}, {variety: 428, level: 50}],
                maxLevel: 52
            },
            appearAfter: null,
            enableAfter: 55
        },
        66: {
            id: 66,
            name: "Ace Trainer Woman",
            shortDescription: "An Ace Trainer is an young adult who frequently travel around the world to take part in Pokémon League competitions.",
            description: "An Ace Trainer is a type of Pokémon Trainer that debuted in the Generation I games. They are depicted as teens or young adults and can be male or female. They are Trainers who frequently travel around the world to meet new Trainers and take part in Pokémon League competitions. ",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_015.png", direction: "down"},
            firstTimeAwards: [47, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_015.png",
                name: 'Ace Trainer Woman',
                type: "unknown",
                pokemon: [{variety: 421, level: 50}, {variety: 36, level: 50}, {variety: 267, level: 50}],
                maxLevel: 52
            },
            appearAfter: null,
            enableAfter: 55
        },
        67: {
            id: 67,
            name: "Koga",
            shortDescription: "Soul Badge",
            description: "This modern-day ninja and member of the Elite Four wears down his opponents with his versatility and has also trained his daughter, Janine, in the ways of the ninja. Beat Koga to win the Soul Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "koga.png", direction: "down"},
            firstTimeAwards: [1004, 48, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "koga.png",
                name: 'Koga',
                type: "poison",
                pokemon: [{variety: 109, level: 52}, {variety: 89, level: 52}, {variety: 110, level: 52}],
                maxLevel: 52
            },
            appearAfter: 62,
            enableAfter: 62
        },
        68: {
            id: 68,
            name: "Chuck",
            shortDescription: "Storm Badge",
            description: "Chuck is the Gym Leader of Cianwood City's Gym, officially known as the Cianwood Gym. He specializes in Fighting-type Pokémon. Chuck gives out the Storm Badge to Trainers who defeat him.",
            type: "league",
            image: {type: "human", animationActive: true, name: "chuck.png", direction: "down"},
            firstTimeAwards: [1012, 49, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "chuck.png",
                name: 'Chuck',
                type: "fighting",
                pokemon: [{variety: 62, level: 52}, {variety: 68, level: 52}, {variety: 107, level: 52}],
                maxLevel: 52
            },
            appearAfter: 62,
            enableAfter: 62
        },
        69: {
            id: 69,
            name: "Team Plasma Grunt Female",
            shortDescription: "Team Plasma is the villainous team in Unova.",
            description: "Team Plasma is the villainous team in Unova. Team Plasma's original goal was to \"liberate\" all Pokémon from their Trainers, by either convincing the Trainer to release their Pokémon, or by theft. Ghetsis, one of Team Plasma's leaders, exploited the group in an attempt to rule Unova as the only one with Pokémon.",
            type: "event",
            image: {type: "human", animationActive: true, name: "BW092.png", direction: "down"},
            firstTimeAwards: [50 ,0, 0, 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "BW092.png",
                name: 'Galactic Grunt Female',
                type: "unknown",
                pokemon: [{variety: 552, level: 54}, {variety: 510, level: 54}, {variety: 569, level: 54}],
                maxLevel: 56
            },
            appearAfter: 68,
            enableAfter: 68
        },
        70: {
            id: 70,
            name: "Team Plasma Grunt Male",
            shortDescription: "Team Plasma is the villainous team in Unova.",
            description: "Team Plasma is the villainous team in Unova. Team Plasma's original goal was to \"liberate\" all Pokémon from their Trainers, by either convincing the Trainer to release their Pokémon, or by theft. Ghetsis, one of Team Plasma's leaders, exploited the group in an attempt to rule Unova as the only one with Pokémon.",
            type: "event",
            image: {type: "human", animationActive: true, name: "BW091.png", direction: "down"},
            firstTimeAwards: [50 ,0, 0, 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "BW091.png",
                name: 'Team Plasma Grunt Male',
                type: "unknown",
                pokemon: [{variety: 505, level: 56}, {variety: 452, level: 56}, {variety: 624, level: 56}],
                maxLevel: 56
            },
            appearAfter: 68,
            enableAfter: 68
        },
        71: {
            id: 71,
            name: "Flannery",
            shortDescription: "Heat Badge",
            description: "A Gym Leader with a fiery, brave personality, she can be a bit too serious and sometimes tries too hard to conduct herself properly.",
            type: "league",
            image: {type: "human", animationActive: true, name: "flannery.png", direction: "down"},
            firstTimeAwards: [1019, 52, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "flannery.png",
                name: 'Flannery',
                type: "fire",
                pokemon: [{variety: 324, level: 56}, {variety: 323, level: 56}, {variety: 219, level: 56}],
                maxLevel: 56
            },
            appearAfter: 68,
            enableAfter: 68
        },
        72: {
            id: 72,
            name: "Byron",
            shortDescription: "Mine Badge",
            description: "Byron is the Gym Leader of Canalave City's Gym, known officially as the Canalave Gym. He hands out the Mine Badge to Trainers who defeat him. He specializes in Steel-type Pokémon. He is Roark's father.",
            type: "league",
            image: {type: "human", animationActive: true, name: "byron.png", direction: "down"},
            firstTimeAwards: [1029, 53, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "byron.png",
                name: 'Byron',
                type: "steel",
                pokemon: [{variety: 306, level: 56}, {variety: 437, level: 56}, {variety: 462, level: 56}],
                maxLevel: 56
            },
            appearAfter: 68,
            enableAfter: 68
        },
        73: {
            id: 73,
            name: "Drayden",
            shortDescription: "Legend Badge",
            description: "Byron is the Gym Leader of Canalave City's Gym, known officially as the Canalave Gym. He hands out the Mine Badge to Trainers who defeat him. He specializes in Steel-type Pokémon. He is Roark's father.",
            type: "league",
            image: {type: "human", animationActive: true, name: "byron.png", direction: "down"},
            firstTimeAwards: [1038, 54, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "byron.png",
                name: 'Byron',
                type: "dragon",
                pokemon: [{variety: 621, level: 56}, {variety: 330, level: 56}, {variety: 612, level: 56}],
                maxLevel: 56
            },
            appearAfter: 68,
            enableAfter: 68
        },
        74: {
            id: 74,
            name: "Waitress",
            shortDescription: "A Waitress is a young women in typical waitress clothing.",
            description: "A Waitress is a type of Pokémon Trainer that debuted in the Generation IV games. They are generally depicted as young girls or young women in typical waitress clothing. They are the female counterpart of the Waiter and Garçon classes.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_030.png", direction: "down"},
            firstTimeAwards: [55, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_030.png",
                name: 'Waitress',
                type: "unknown",
                pokemon: [{variety: 573, level: 58}, {variety: 609, level: 58}, {variety: 509, level: 58}],
                maxLevel: 60
            },
            appearAfter: null,
            enableAfter: 70
        },
        75: {
            id: 75,
            name: "Expert",
            shortDescription: "An Expert is an old men in keikogi and hakama.",
            description: "An Expert is a type of Pokémon Trainer that first debuted in the Generation III games. They are generally depicted as old men or old women in keikogi and hakama.",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "HGSS_018.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "HGSS_018.png",
                name: 'Expert',
                type: "fighting",
                pokemon: [{variety: 295, level: 58}, {variety: 297, level: 58}, {variety: 67, level: 58}],
                maxLevel: 60
            },
            appearAfter: null,
            enableAfter: 70
        },
        76: {
            id: 76,
            name: "Medium",
            shortDescription: "Medium is an old women with a large, lit candle in each hand.",
            description: "Medium is a type of Pokémon Trainer that first debuted in Generation II games. They are depicted as old women with little ghosts floating around them in Generation II, and as old women with a large, lit candle in each hand in Generation IV. As their Japanese name suggests, they're based on blind female shamans from northern Japan who dress in a white kimono during their training for initiation",
            type: "trainer",
            image: {type: "human", animationActive: true, name: "trainer038c.png", direction: "down"},
            firstTimeAwards: [0, 0, 0, 0, 0, 0],
            awards: [0,0],
            trainerInfo: {
                sprite: "trainer038c.png",
                name: 'Medium',
                type: "ghost",
                pokemon: [{variety: 92, level: 58}, {variety: 93, level: 58}, {variety: 94, level: 58}],
                maxLevel: 60
            },
            appearAfter: null,
            enableAfter: 70
        },
        77: {
            id: 77,
            name: "Blue",
            shortDescription: "Earth Badge",
            description: "This highly skilled, powerhouse Trainer prominent in Kanto is the grandson of the famous Professor Oak. Red is both his lifelong rival and his best friend. Beat Blue to win the Earth Badge",
            type: "league",
            image: {type: "human", animationActive: true, name: "blue.png", direction: "down"},
            firstTimeAwards: [1007, 56, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "blue.png",
                name: 'Blue',
                type: "unknown",
                pokemon: [{variety: 111, level: 60}, {variety: 59, level: 60}, {variety: 18, level: 60}],
                maxLevel: 60
            },
            appearAfter: 73,
            enableAfter: 73
        },
        78: {
            id: 78,
            name: "Clair",
            shortDescription: "Rising Badge",
            description: "She is a proud, confident Gym Leader who uses Dragon-type Pokémon. Her cousin Lance is also a Dragon-type Pokémon user.",
            type: "league",
            image: {type: "human", animationActive: true, name: "clair.png", direction: "down"},
            firstTimeAwards: [1015, 57, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "clair.png",
                name: 'Clair',
                type: "dragon",
                pokemon: [{variety: 230, level: 60}, {variety: 6, level: 60}, {variety: 149, level: 60}],
                maxLevel: 60
            },
            appearAfter: 73,
            enableAfter: 73
        },
        79: {
            id: 79,
            name: "Prof. Rowan",
            shortDescription: "Professor Rowan is the resident Pokémon Professor of Sandgem Town in the Sinnoh region.",
            description: "Professor Rowan is the resident Pokémon Professor of Sandgem Town in the Sinnoh region. He specializes in Pokémon evolution.",
            type: "event",
            image: {type: "human", animationActive: true, name: "prof_rowan.png", direction: "down"},
            firstTimeAwards: [58 , 59, 0 , 0, 0, 0 ],
            awards: [0, 0],
            trainerInfo: {
                sprite: "prof_rowan.png",
                name: 'Prof. Rowan',
                type: "unknown",
                pokemon: [{variety: 392, level: 64}, {variety: 395, level: 64}, {variety: 389, level: 64}],
                maxLevel: 64
            },
            appearAfter: 78,
            enableAfter: 78
        },
        80: {
            id: 80,
            name: "Wallace",
            shortDescription: "Rain Badge",
            description: "Wallace is a highly accomplished Trainer and Coordinator who specializes in Water-type Pokémon. He is the Gym Leader of Sootopolis City's Gym, known officially as the Sootopolis Gym, awarding the Rain Badge to those who defeat him.",
            type: "league",
            image: {type: "human", animationActive: true, name: "wallace.png", direction: "down"},
            firstTimeAwards: [1023, 60, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "wallace.png",
                name: 'Wallace',
                type: "water",
                pokemon: [{variety: 350, level: 64}, {variety: 340, level: 64}, {variety: 365, level: 64}],
                maxLevel: 64
            },
            appearAfter: 77,
            enableAfter: 77
        },
        81: {
            id: 81,
            name: "Volkner",
            shortDescription: "Beacon Badge",
            description: "Volkner (Japanese: デンジ Denzi) is the Gym Leader of Sunyshore City's Gym, known officially as the Sunyshore Gym. He hands out the Beacon Badge to Trainers who defeat him. He specializes in Electric-type Pokémon.",
            type: "league",
            image: {type: "human", animationActive: true, name: "volkner.png", direction: "down"},
            firstTimeAwards: [1031, 61, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "volkner.png",
                name: 'Volkner',
                type: "electric",
                pokemon: [{variety: 405, level: 64}, {variety: 466, level: 64}, {variety: 479, level: 64}],
                maxLevel: 64
            },
            appearAfter: 77,
            enableAfter: 77
        },
        82: {
            id: 82,
            name: "Brycen",
            shortDescription: "Freeze Badge",
            description: "Volkner (Japanese: デンジ Denzi) is the Gym Leader of Sunyshore City's Gym, known officially as the Sunyshore Gym. He hands out the Beacon Badge to Trainers who defeat him. He specializes in Electric-type Pokémon.",
            type: "league",
            image: {type: "human", animationActive: true, name: "brycen.png", direction: "down"},
            firstTimeAwards: [1039, 62, 0, 0, 0, 0, 0],
            awards: [0, 0],
            trainerInfo: {
                sprite: "brycen.png",
                name: 'Brycen',
                type: "ice",
                pokemon: [{variety: 615, level: 64}, {variety: 614, level: 64}, {variety: 584, level: 64}],
                maxLevel: 64
            },
            appearAfter: 77,
            enableAfter: 77
        },
        181: {
            id: 181,
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


