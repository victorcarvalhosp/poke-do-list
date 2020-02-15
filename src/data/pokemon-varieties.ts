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
            evolutions: []
        },
        1: {
            id: 1,
            name: "bulbasaur",
            specie: 1,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 2, method: "level_up", minLevel: 16},]
        },
        2: {
            id: 2,
            name: "ivysaur",
            specie: 2,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 3, method: "level_up", minLevel: 32},]
        },
        3: {id: 3, name: "venusaur", specie: 3, is_default: true, type1: "grass", type2: "poison", evolutions: []},
        4: {
            id: 4,
            name: "charmander",
            specie: 4,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 5, method: "level_up", minLevel: 16},]
        },
        5: {
            id: 5,
            name: "charmeleon",
            specie: 5,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 6, method: "level_up", minLevel: 36},]
        },
        6: {id: 6, name: "charizard", specie: 6, is_default: true, type1: "fire", type2: "flying", evolutions: []},
        7: {
            id: 7,
            name: "squirtle",
            specie: 7,
            is_default: true,
            type1: "water",
            evolutions: [{to: 8, method: "level_up", minLevel: 16},]
        },
        8: {
            id: 8,
            name: "wartortle",
            specie: 8,
            is_default: true,
            type1: "water",
            evolutions: [{to: 9, method: "level_up", minLevel: 36},]
        },
        9: {id: 9, name: "blastoise", specie: 9, is_default: true, type1: "water", evolutions: []},
        10: {
            id: 10,
            name: "caterpie",
            specie: 10,
            is_default: true,
            type1: "bug",
            evolutions: [{to: 11, method: "level_up", minLevel: 7},]
        },
        11: {
            id: 11,
            name: "metapod",
            specie: 11,
            is_default: true,
            type1: "bug",
            evolutions: [{to: 12, method: "level_up", minLevel: 10},]
        },
        12: {id: 12, name: "butterfree", specie: 12, is_default: true, type1: "bug", type2: "flying", evolutions: []},
        13: {
            id: 13,
            name: "weedle",
            specie: 13,
            is_default: true,
            type1: "bug",
            type2: "poison",
            evolutions: [{to: 14, method: "level_up", minLevel: 7},]
        },
        14: {
            id: 14,
            name: "kakuna",
            specie: 14,
            is_default: true,
            type1: "bug",
            type2: "poison",
            evolutions: [{to: 15, method: "level_up", minLevel: 10},]
        },
        15: {id: 15, name: "beedrill", specie: 15, is_default: true, type1: "bug", type2: "poison", evolutions: []},
        16: {
            id: 16,
            name: "pidgey",
            specie: 16,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: [{to: 17, method: "level_up", minLevel: 18},]
        },
        17: {
            id: 17,
            name: "pidgeotto",
            specie: 17,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: [{to: 18, method: "level_up", minLevel: 36},]
        },
        18: {id: 18, name: "pidgeot", specie: 18, is_default: true, type1: "normal", type2: "flying", evolutions: []},
        19: {
            id: 19,
            name: "rattata",
            specie: 19,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 20, method: "level_up", minLevel: 20},]
        },
        20: {id: 20, name: "raticate", specie: 20, is_default: true, type1: "normal", evolutions: []},
        21: {
            id: 21,
            name: "spearow",
            specie: 21,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: [{to: 22, method: "level_up", minLevel: 20},]
        },
        22: {id: 22, name: "fearow", specie: 22, is_default: true, type1: "normal", type2: "flying", evolutions: []},
        23: {
            id: 23,
            name: "ekans",
            specie: 23,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 24, method: "level_up", minLevel: 22},]
        },
        24: {id: 24, name: "arbok", specie: 24, is_default: true, type1: "poison", evolutions: []},
        25: {
            id: 25,
            name: "pikachu",
            specie: 25,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 26, method: "level_up", minLevel: 32},]
        },
        26: {id: 26, name: "raichu", specie: 26, is_default: true, type1: "electric", evolutions: []},
        27: {
            id: 27,
            name: "sandshrew",
            specie: 27,
            is_default: true,
            type1: "ground",
            evolutions: [{to: 28, method: "level_up", minLevel: 22},]
        },
        28: {id: 28, name: "sandslash", specie: 28, is_default: true, type1: "ground", evolutions: []},
        29: {
            id: 29,
            name: "nidoran-f",
            specie: 29,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 30, method: "level_up", minLevel: 16},]
        },
        30: {
            id: 30,
            name: "nidorina",
            specie: 30,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 31, method: "level_up", minLevel: 32},]
        },
        31: {id: 31, name: "nidoqueen", specie: 31, is_default: true, type1: "poison", type2: "ground", evolutions: []},
        32: {
            id: 32,
            name: "nidoran-m",
            specie: 32,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 33, method: "level_up", minLevel: 16},]
        },
        33: {
            id: 33,
            name: "nidorino",
            specie: 33,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 34, method: "level_up", minLevel: 32},]
        },
        34: {id: 34, name: "nidoking", specie: 34, is_default: true, type1: "poison", type2: "ground", evolutions: []},
        35: {
            id: 35,
            name: "clefairy",
            specie: 35,
            is_default: true,
            type1: "fairy",
            evolutions: [{to: 36, method: "level_up", minLevel: 32},]
        },
        36: {id: 36, name: "clefable", specie: 36, is_default: true, type1: "fairy", evolutions: []},
        37: {
            id: 37,
            name: "vulpix",
            specie: 37,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 38, method: "level_up", minLevel: 32},]
        },
        38: {id: 38, name: "ninetales", specie: 38, is_default: true, type1: "fire", evolutions: []},
        39: {
            id: 39,
            name: "jigglypuff",
            specie: 39,
            is_default: true,
            type1: "normal",
            type2: "fairy",
            evolutions: [{to: 40, method: "level_up", minLevel: 32},]
        },
        40: {id: 40, name: "wigglytuff", specie: 40, is_default: true, type1: "normal", type2: "fairy", evolutions: []},
        41: {
            id: 41,
            name: "zubat",
            specie: 41,
            is_default: true,
            type1: "poison",
            type2: "flying",
            evolutions: [{to: 42, method: "level_up", minLevel: 22},]
        },
        42: {
            id: 42,
            name: "golbat",
            specie: 42,
            is_default: true,
            type1: "poison",
            type2: "flying",
            evolutions: [{to: 169, method: "level_up", minLevel: 32},]
        },
        43: {
            id: 43,
            name: "oddish",
            specie: 43,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 44, method: "level_up", minLevel: 21},]
        },
        44: {
            id: 44,
            name: "gloom",
            specie: 44,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 45, method: "level_up", minLevel: 32}, {to: 182, method: "level_up", minLevel: 32},]
        },
        45: {id: 45, name: "vileplume", specie: 45, is_default: true, type1: "grass", type2: "poison", evolutions: []},
        46: {
            id: 46,
            name: "paras",
            specie: 46,
            is_default: true,
            type1: "bug",
            type2: "grass",
            evolutions: [{to: 47, method: "level_up", minLevel: 24},]
        },
        47: {id: 47, name: "parasect", specie: 47, is_default: true, type1: "bug", type2: "grass", evolutions: []},
        48: {
            id: 48,
            name: "venonat",
            specie: 48,
            is_default: true,
            type1: "bug",
            type2: "poison",
            evolutions: [{to: 49, method: "level_up", minLevel: 31},]
        },
        49: {id: 49, name: "venomoth", specie: 49, is_default: true, type1: "bug", type2: "poison", evolutions: []},
        50: {
            id: 50,
            name: "diglett",
            specie: 50,
            is_default: true,
            type1: "ground",
            evolutions: [{to: 51, method: "level_up", minLevel: 26},]
        },
        51: {id: 51, name: "dugtrio", specie: 51, is_default: true, type1: "ground", evolutions: []},
        52: {
            id: 52,
            name: "meowth",
            specie: 52,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 53, method: "level_up", minLevel: 28},]
        },
        53: {id: 53, name: "persian", specie: 53, is_default: true, type1: "normal", evolutions: []},
        54: {
            id: 54,
            name: "psyduck",
            specie: 54,
            is_default: true,
            type1: "water",
            evolutions: [{to: 55, method: "level_up", minLevel: 33},]
        },
        55: {id: 55, name: "golduck", specie: 55, is_default: true, type1: "water", evolutions: []},
        56: {
            id: 56,
            name: "mankey",
            specie: 56,
            is_default: true,
            type1: "fighting",
            evolutions: [{to: 57, method: "level_up", minLevel: 28},]
        },
        57: {id: 57, name: "primeape", specie: 57, is_default: true, type1: "fighting", evolutions: []},
        58: {
            id: 58,
            name: "growlithe",
            specie: 58,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 59, method: "level_up", minLevel: 32},]
        },
        59: {id: 59, name: "arcanine", specie: 59, is_default: true, type1: "fire", evolutions: []},
        60: {
            id: 60,
            name: "poliwag",
            specie: 60,
            is_default: true,
            type1: "water",
            evolutions: [{to: 61, method: "level_up", minLevel: 25},]
        },
        61: {
            id: 61,
            name: "poliwhirl",
            specie: 61,
            is_default: true,
            type1: "water",
            evolutions: [{to: 62, method: "level_up", minLevel: 32}, {to: 186, method: "level_up", minLevel: 32},]
        },
        62: {
            id: 62,
            name: "poliwrath",
            specie: 62,
            is_default: true,
            type1: "water",
            type2: "fighting",
            evolutions: []
        },
        63: {
            id: 63,
            name: "abra",
            specie: 63,
            is_default: true,
            type1: "psychic",
            evolutions: [{to: 64, method: "level_up", minLevel: 16},]
        },
        64: {
            id: 64,
            name: "kadabra",
            specie: 64,
            is_default: true,
            type1: "psychic",
            evolutions: [{to: 65, method: "level_up", minLevel: 32},]
        },
        65: {id: 65, name: "alakazam", specie: 65, is_default: true, type1: "psychic", evolutions: []},
        66: {
            id: 66,
            name: "machop",
            specie: 66,
            is_default: true,
            type1: "fighting",
            evolutions: [{to: 67, method: "level_up", minLevel: 28},]
        },
        67: {
            id: 67,
            name: "machoke",
            specie: 67,
            is_default: true,
            type1: "fighting",
            evolutions: [{to: 68, method: "level_up", minLevel: 32},]
        },
        68: {id: 68, name: "machamp", specie: 68, is_default: true, type1: "fighting", evolutions: []},
        69: {
            id: 69,
            name: "bellsprout",
            specie: 69,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 70, method: "level_up", minLevel: 21},]
        },
        70: {
            id: 70,
            name: "weepinbell",
            specie: 70,
            is_default: true,
            type1: "grass",
            type2: "poison",
            evolutions: [{to: 71, method: "level_up", minLevel: 32},]
        },
        71: {id: 71, name: "victreebel", specie: 71, is_default: true, type1: "grass", type2: "poison", evolutions: []},
        72: {
            id: 72,
            name: "tentacool",
            specie: 72,
            is_default: true,
            type1: "water",
            type2: "poison",
            evolutions: [{to: 73, method: "level_up", minLevel: 30},]
        },
        73: {id: 73, name: "tentacruel", specie: 73, is_default: true, type1: "water", type2: "poison", evolutions: []},
        74: {
            id: 74,
            name: "geodude",
            specie: 74,
            is_default: true,
            type1: "rock",
            type2: "ground",
            evolutions: [{to: 75, method: "level_up", minLevel: 25},]
        },
        75: {
            id: 75,
            name: "graveler",
            specie: 75,
            is_default: true,
            type1: "rock",
            type2: "ground",
            evolutions: [{to: 76, method: "level_up", minLevel: 32},]
        },
        76: {id: 76, name: "golem", specie: 76, is_default: true, type1: "rock", type2: "ground", evolutions: []},
        77: {
            id: 77,
            name: "ponyta",
            specie: 77,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 78, method: "level_up", minLevel: 40},]
        },
        78: {id: 78, name: "rapidash", specie: 78, is_default: true, type1: "fire", evolutions: []},
        79: {
            id: 79,
            name: "slowpoke",
            specie: 79,
            is_default: true,
            type1: "water",
            type2: "psychic",
            evolutions: [{to: 80, method: "level_up", minLevel: 37}, {to: 199, method: "level_up", minLevel: 32},]
        },
        80: {id: 80, name: "slowbro", specie: 80, is_default: true, type1: "water", type2: "psychic", evolutions: []},
        81: {
            id: 81,
            name: "magnemite",
            specie: 81,
            is_default: true,
            type1: "electric",
            type2: "steel",
            evolutions: [{to: 82, method: "level_up", minLevel: 30},]
        },
        82: {
            id: 82,
            name: "magneton",
            specie: 82,
            is_default: true,
            type1: "electric",
            type2: "steel",
            evolutions: [{to: 462, method: "level_up", minLevel: 32},]
        },
        83: {id: 83, name: "farfetchd", specie: 83, is_default: true, type1: "normal", type2: "flying", evolutions: []},
        84: {
            id: 84,
            name: "doduo",
            specie: 84,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: [{to: 85, method: "level_up", minLevel: 31},]
        },
        85: {id: 85, name: "dodrio", specie: 85, is_default: true, type1: "normal", type2: "flying", evolutions: []},
        86: {
            id: 86,
            name: "seel",
            specie: 86,
            is_default: true,
            type1: "water",
            evolutions: [{to: 87, method: "level_up", minLevel: 34},]
        },
        87: {id: 87, name: "dewgong", specie: 87, is_default: true, type1: "water", type2: "ice", evolutions: []},
        88: {
            id: 88,
            name: "grimer",
            specie: 88,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 89, method: "level_up", minLevel: 38},]
        },
        89: {id: 89, name: "muk", specie: 89, is_default: true, type1: "poison", evolutions: []},
        90: {
            id: 90,
            name: "shellder",
            specie: 90,
            is_default: true,
            type1: "water",
            evolutions: [{to: 91, method: "level_up", minLevel: 32},]
        },
        91: {id: 91, name: "cloyster", specie: 91, is_default: true, type1: "water", type2: "ice", evolutions: []},
        92: {
            id: 92,
            name: "gastly",
            specie: 92,
            is_default: true,
            type1: "ghost",
            type2: "poison",
            evolutions: [{to: 93, method: "level_up", minLevel: 25},]
        },
        93: {
            id: 93,
            name: "haunter",
            specie: 93,
            is_default: true,
            type1: "ghost",
            type2: "poison",
            evolutions: [{to: 94, method: "level_up", minLevel: 32},]
        },
        94: {id: 94, name: "gengar", specie: 94, is_default: true, type1: "ghost", type2: "poison", evolutions: []},
        95: {
            id: 95,
            name: "onix",
            specie: 95,
            is_default: true,
            type1: "rock",
            type2: "ground",
            evolutions: [{to: 208, method: "level_up", minLevel: 32},]
        },
        96: {
            id: 96,
            name: "drowzee",
            specie: 96,
            is_default: true,
            type1: "psychic",
            evolutions: [{to: 97, method: "level_up", minLevel: 26},]
        },
        97: {id: 97, name: "hypno", specie: 97, is_default: true, type1: "psychic", evolutions: []},
        98: {
            id: 98,
            name: "krabby",
            specie: 98,
            is_default: true,
            type1: "water",
            evolutions: [{to: 99, method: "level_up", minLevel: 28},]
        },
        99: {id: 99, name: "kingler", specie: 99, is_default: true, type1: "water", evolutions: []},
        100: {
            id: 100,
            name: "voltorb",
            specie: 100,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 101, method: "level_up", minLevel: 30},]
        },
        101: {id: 101, name: "electrode", specie: 101, is_default: true, type1: "electric", evolutions: []},
        102: {
            id: 102,
            name: "exeggcute",
            specie: 102,
            is_default: true,
            type1: "grass",
            type2: "psychic",
            evolutions: [{to: 103, method: "level_up", minLevel: 32},]
        },
        103: {
            id: 103,
            name: "exeggutor",
            specie: 103,
            is_default: true,
            type1: "grass",
            type2: "psychic",
            evolutions: []
        },
        104: {
            id: 104,
            name: "cubone",
            specie: 104,
            is_default: true,
            type1: "ground",
            evolutions: [{to: 105, method: "level_up", minLevel: 28},]
        },
        105: {id: 105, name: "marowak", specie: 105, is_default: true, type1: "ground", evolutions: []},
        106: {id: 106, name: "hitmonlee", specie: 106, is_default: true, type1: "fighting", evolutions: []},
        107: {id: 107, name: "hitmonchan", specie: 107, is_default: true, type1: "fighting", evolutions: []},
        108: {
            id: 108,
            name: "lickitung",
            specie: 108,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 463, method: "level_up", minLevel: 32},]
        },
        109: {
            id: 109,
            name: "koffing",
            specie: 109,
            is_default: true,
            type1: "poison",
            evolutions: [{to: 110, method: "level_up", minLevel: 35},]
        },
        110: {id: 110, name: "weezing", specie: 110, is_default: true, type1: "poison", evolutions: []},
        111: {
            id: 111,
            name: "rhyhorn",
            specie: 111,
            is_default: true,
            type1: "ground",
            type2: "rock",
            evolutions: [{to: 112, method: "level_up", minLevel: 42},]
        },
        112: {
            id: 112,
            name: "rhydon",
            specie: 112,
            is_default: true,
            type1: "ground",
            type2: "rock",
            evolutions: [{to: 464, method: "level_up", minLevel: 32},]
        },
        113: {
            id: 113,
            name: "chansey",
            specie: 113,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 242, method: "level_up", minLevel: 32},]
        },
        114: {
            id: 114,
            name: "tangela",
            specie: 114,
            is_default: true,
            type1: "grass",
            evolutions: [{to: 465, method: "level_up", minLevel: 32},]
        },
        115: {id: 115, name: "kangaskhan", specie: 115, is_default: true, type1: "normal", evolutions: []},
        116: {
            id: 116,
            name: "horsea",
            specie: 116,
            is_default: true,
            type1: "water",
            evolutions: [{to: 117, method: "level_up", minLevel: 32},]
        },
        117: {
            id: 117,
            name: "seadra",
            specie: 117,
            is_default: true,
            type1: "water",
            evolutions: [{to: 230, method: "level_up", minLevel: 32},]
        },
        118: {
            id: 118,
            name: "goldeen",
            specie: 118,
            is_default: true,
            type1: "water",
            evolutions: [{to: 119, method: "level_up", minLevel: 33},]
        },
        119: {id: 119, name: "seaking", specie: 119, is_default: true, type1: "water", evolutions: []},
        120: {
            id: 120,
            name: "staryu",
            specie: 120,
            is_default: true,
            type1: "water",
            evolutions: [{to: 121, method: "level_up", minLevel: 32},]
        },
        121: {
            id: 121,
            name: "starmie",
            specie: 121,
            is_default: true,
            type1: "water",
            type2: "psychic",
            evolutions: []
        },
        122: {
            id: 122,
            name: "mr-mime",
            specie: 122,
            is_default: true,
            type1: "psychic",
            type2: "fairy",
            evolutions: []
        },
        123: {
            id: 123,
            name: "scyther",
            specie: 123,
            is_default: true,
            type1: "bug",
            type2: "flying",
            evolutions: [{to: 212, method: "level_up", minLevel: 32},]
        },
        124: {id: 124, name: "jynx", specie: 124, is_default: true, type1: "ice", type2: "psychic", evolutions: []},
        125: {
            id: 125,
            name: "electabuzz",
            specie: 125,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 466, method: "level_up", minLevel: 32},]
        },
        126: {
            id: 126,
            name: "magmar",
            specie: 126,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 467, method: "level_up", minLevel: 32},]
        },
        127: {id: 127, name: "pinsir", specie: 127, is_default: true, type1: "bug", evolutions: []},
        128: {id: 128, name: "tauros", specie: 128, is_default: true, type1: "normal", evolutions: []},
        129: {
            id: 129,
            name: "magikarp",
            specie: 129,
            is_default: true,
            type1: "water",
            evolutions: [{to: 130, method: "level_up", minLevel: 20},]
        },
        130: {
            id: 130,
            name: "gyarados",
            specie: 130,
            is_default: true,
            type1: "water",
            type2: "flying",
            evolutions: []
        },
        131: {id: 131, name: "lapras", specie: 131, is_default: true, type1: "water", type2: "ice", evolutions: []},
        132: {id: 132, name: "ditto", specie: 132, is_default: true, type1: "normal", evolutions: []},
        133: {
            id: 133,
            name: "eevee",
            specie: 133,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 134, method: "level_up", minLevel: 32}, {
                to: 135,
                method: "level_up",
                minLevel: 32
            }, {to: 136, method: "level_up", minLevel: 32}, {to: 196, method: "level_up", minLevel: 32}, {
                to: 197,
                method: "level_up",
                minLevel: 32
            }, {to: 470, method: "level_up", minLevel: 32}, {to: 471, method: "level_up", minLevel: 32}, {
                to: 700,
                method: "level_up",
                minLevel: 32
            },]
        },
        134: {id: 134, name: "vaporeon", specie: 134, is_default: true, type1: "water", evolutions: []},
        135: {id: 135, name: "jolteon", specie: 135, is_default: true, type1: "electric", evolutions: []},
        136: {id: 136, name: "flareon", specie: 136, is_default: true, type1: "fire", evolutions: []},
        137: {
            id: 137,
            name: "porygon",
            specie: 137,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 233, method: "level_up", minLevel: 32},]
        },
        138: {
            id: 138,
            name: "omanyte",
            specie: 138,
            is_default: true,
            type1: "rock",
            type2: "water",
            evolutions: [{to: 139, method: "level_up", minLevel: 40},]
        },
        139: {id: 139, name: "omastar", specie: 139, is_default: true, type1: "rock", type2: "water", evolutions: []},
        140: {
            id: 140,
            name: "kabuto",
            specie: 140,
            is_default: true,
            type1: "rock",
            type2: "water",
            evolutions: [{to: 141, method: "level_up", minLevel: 40},]
        },
        141: {id: 141, name: "kabutops", specie: 141, is_default: true, type1: "rock", type2: "water", evolutions: []},
        142: {
            id: 142,
            name: "aerodactyl",
            specie: 142,
            is_default: true,
            type1: "rock",
            type2: "flying",
            evolutions: []
        },
        143: {id: 143, name: "snorlax", specie: 143, is_default: true, type1: "normal", evolutions: []},
        144: {id: 144, name: "articuno", specie: 144, is_default: true, type1: "ice", type2: "flying", evolutions: []},
        145: {
            id: 145,
            name: "zapdos",
            specie: 145,
            is_default: true,
            type1: "electric",
            type2: "flying",
            evolutions: []
        },
        146: {id: 146, name: "moltres", specie: 146, is_default: true, type1: "fire", type2: "flying", evolutions: []},
        147: {
            id: 147,
            name: "dratini",
            specie: 147,
            is_default: true,
            type1: "dragon",
            evolutions: [{to: 148, method: "level_up", minLevel: 30},]
        },
        148: {
            id: 148,
            name: "dragonair",
            specie: 148,
            is_default: true,
            type1: "dragon",
            evolutions: [{to: 149, method: "level_up", minLevel: 55},]
        },
        149: {
            id: 149,
            name: "dragonite",
            specie: 149,
            is_default: true,
            type1: "dragon",
            type2: "flying",
            evolutions: []
        },
        150: {id: 150, name: "mewtwo", specie: 150, is_default: true, type1: "psychic", evolutions: []},
        151: {id: 151, name: "mew", specie: 151, is_default: true, type1: "psychic", evolutions: []},
        10103: {
            id: 10103,
            name: "vulpix-alola",
            specie: 37,
            is_default: false,
            type1: "ice",
            evolutions: []
        },
        152: {
            id: 152,
            name: "chikorita",
            specie: 152,
            is_default: true,
            type1: "grass",
            evolutions: [{to: 153, method: "level_up", minLevel: 16},]
        },
        153: {
            id: 153,
            name: "bayleef",
            specie: 153,
            is_default: true,
            type1: "grass",
            evolutions: [{to: 154, method: "level_up", minLevel: 32},]
        },
        154: {id: 154, name: "meganium", specie: 154, is_default: true, type1: "grass", evolutions: []},
        155: {
            id: 155,
            name: "cyndaquil",
            specie: 155,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 156, method: "level_up", minLevel: 14},]
        },
        156: {
            id: 156,
            name: "quilava",
            specie: 156,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 157, method: "level_up", minLevel: 36},]
        },
        157: {id: 157, name: "typhlosion", specie: 157, is_default: true, type1: "fire", evolutions: []},
        158: {
            id: 158,
            name: "totodile",
            specie: 158,
            is_default: true,
            type1: "water",
            evolutions: [{to: 159, method: "level_up", minLevel: 18},]
        },
        159: {
            id: 159,
            name: "croconaw",
            specie: 159,
            is_default: true,
            type1: "water",
            evolutions: [{to: 160, method: "level_up", minLevel: 30},]
        },
        160: {id: 160, name: "feraligatr", specie: 160, is_default: true, type1: "water", evolutions: []},
        161: {
            id: 161,
            name: "sentret",
            specie: 161,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 162, method: "level_up", minLevel: 15},]
        },
        162: {id: 162, name: "furret", specie: 162, is_default: true, type1: "normal", evolutions: []},
        163: {
            id: 163,
            name: "hoothoot",
            specie: 163,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: [{to: 164, method: "level_up", minLevel: 20},]
        },
        164: {
            id: 164,
            name: "noctowl",
            specie: 164,
            is_default: true,
            type1: "normal",
            type2: "flying",
            evolutions: []
        },
        165: {
            id: 165,
            name: "ledyba",
            specie: 165,
            is_default: true,
            type1: "bug",
            type2: "flying",
            evolutions: [{to: 166, method: "level_up", minLevel: 18},]
        },
        166: {id: 166, name: "ledian", specie: 166, is_default: true, type1: "bug", type2: "flying", evolutions: []},
        167: {
            id: 167,
            name: "spinarak",
            specie: 167,
            is_default: true,
            type1: "bug",
            type2: "poison",
            evolutions: [{to: 168, method: "level_up", minLevel: 22},]
        },
        168: {id: 168, name: "ariados", specie: 168, is_default: true, type1: "bug", type2: "poison", evolutions: []},
        169: {id: 169, name: "crobat", specie: 169, is_default: true, type1: "poison", type2: "flying", evolutions: []},
        170: {
            id: 170,
            name: "chinchou",
            specie: 170,
            is_default: true,
            type1: "water",
            type2: "electric",
            evolutions: [{to: 171, method: "level_up", minLevel: 27},]
        },
        171: {
            id: 171,
            name: "lanturn",
            specie: 171,
            is_default: true,
            type1: "water",
            type2: "electric",
            evolutions: []
        },
        172: {
            id: 172,
            name: "pichu",
            specie: 172,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 25, method: "level_up", minLevel: 32},]
        },
        173: {
            id: 173,
            name: "cleffa",
            specie: 173,
            is_default: true,
            type1: "fairy",
            evolutions: [{to: 35, method: "level_up", minLevel: 32},]
        },
        174: {
            id: 174,
            name: "igglybuff",
            specie: 174,
            is_default: true,
            type1: "normal",
            type2: "fairy",
            evolutions: [{to: 39, method: "level_up", minLevel: 32},]
        },
        175: {
            id: 175,
            name: "togepi",
            specie: 175,
            is_default: true,
            type1: "fairy",
            evolutions: [{to: 176, method: "level_up", minLevel: 32},]
        },
        176: {
            id: 176,
            name: "togetic",
            specie: 176,
            is_default: true,
            type1: "fairy",
            type2: "flying",
            evolutions: [{to: 468, method: "level_up", minLevel: 32},]
        },
        177: {
            id: 177,
            name: "natu",
            specie: 177,
            is_default: true,
            type1: "psychic",
            type2: "flying",
            evolutions: [{to: 178, method: "level_up", minLevel: 25},]
        },
        178: {id: 178, name: "xatu", specie: 178, is_default: true, type1: "psychic", type2: "flying", evolutions: []},
        179: {
            id: 179,
            name: "mareep",
            specie: 179,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 180, method: "level_up", minLevel: 15},]
        },
        180: {
            id: 180,
            name: "flaaffy",
            specie: 180,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 181, method: "level_up", minLevel: 30},]
        },
        181: {id: 181, name: "ampharos", specie: 181, is_default: true, type1: "electric", evolutions: []},
        182: {id: 182, name: "bellossom", specie: 182, is_default: true, type1: "grass", evolutions: []},
        183: {
            id: 183,
            name: "marill",
            specie: 183,
            is_default: true,
            type1: "water",
            type2: "fairy",
            evolutions: [{to: 184, method: "level_up", minLevel: 18},]
        },
        184: {
            id: 184,
            name: "azumarill",
            specie: 184,
            is_default: true,
            type1: "water",
            type2: "fairy",
            evolutions: []
        },
        185: {id: 185, name: "sudowoodo", specie: 185, is_default: true, type1: "rock", evolutions: []},
        186: {id: 186, name: "politoed", specie: 186, is_default: true, type1: "water", evolutions: []},
        187: {
            id: 187,
            name: "hoppip",
            specie: 187,
            is_default: true,
            type1: "grass",
            type2: "flying",
            evolutions: [{to: 188, method: "level_up", minLevel: 18},]
        },
        188: {
            id: 188,
            name: "skiploom",
            specie: 188,
            is_default: true,
            type1: "grass",
            type2: "flying",
            evolutions: [{to: 189, method: "level_up", minLevel: 27},]
        },
        189: {
            id: 189,
            name: "jumpluff",
            specie: 189,
            is_default: true,
            type1: "grass",
            type2: "flying",
            evolutions: []
        },
        190: {
            id: 190,
            name: "aipom",
            specie: 190,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 424, method: "level_up", minLevel: 32},]
        },
        191: {
            id: 191,
            name: "sunkern",
            specie: 191,
            is_default: true,
            type1: "grass",
            evolutions: [{to: 192, method: "level_up", minLevel: 32},]
        },
        192: {id: 192, name: "sunflora", specie: 192, is_default: true, type1: "grass", evolutions: []},
        193: {
            id: 193,
            name: "yanma",
            specie: 193,
            is_default: true,
            type1: "bug",
            type2: "flying",
            evolutions: [{to: 469, method: "level_up", minLevel: 32},]
        },
        194: {
            id: 194,
            name: "wooper",
            specie: 194,
            is_default: true,
            type1: "water",
            type2: "ground",
            evolutions: [{to: 195, method: "level_up", minLevel: 20},]
        },
        195: {
            id: 195,
            name: "quagsire",
            specie: 195,
            is_default: true,
            type1: "water",
            type2: "ground",
            evolutions: []
        },
        196: {id: 196, name: "espeon", specie: 196, is_default: true, type1: "psychic", evolutions: []},
        197: {id: 197, name: "umbreon", specie: 197, is_default: true, type1: "dark", evolutions: []},
        198: {
            id: 198,
            name: "murkrow",
            specie: 198,
            is_default: true,
            type1: "dark",
            type2: "flying",
            evolutions: [{to: 430, method: "level_up", minLevel: 32},]
        },
        199: {
            id: 199,
            name: "slowking",
            specie: 199,
            is_default: true,
            type1: "water",
            type2: "psychic",
            evolutions: []
        },
        200: {
            id: 200,
            name: "misdreavus",
            specie: 200,
            is_default: true,
            type1: "ghost",
            evolutions: [{to: 429, method: "level_up", minLevel: 32},]
        },
        201: {id: 201, name: "unown", specie: 201, is_default: true, type1: "psychic", evolutions: []},
        202: {id: 202, name: "wobbuffet", specie: 202, is_default: true, type1: "psychic", evolutions: []},
        203: {
            id: 203,
            name: "girafarig",
            specie: 203,
            is_default: true,
            type1: "normal",
            type2: "psychic",
            evolutions: []
        },
        204: {
            id: 204,
            name: "pineco",
            specie: 204,
            is_default: true,
            type1: "bug",
            evolutions: [{to: 205, method: "level_up", minLevel: 31},]
        },
        205: {id: 205, name: "forretress", specie: 205, is_default: true, type1: "bug", type2: "steel", evolutions: []},
        206: {id: 206, name: "dunsparce", specie: 206, is_default: true, type1: "normal", evolutions: []},
        207: {
            id: 207,
            name: "gligar",
            specie: 207,
            is_default: true,
            type1: "ground",
            type2: "flying",
            evolutions: [{to: 472, method: "level_up", minLevel: 32},]
        },
        208: {id: 208, name: "steelix", specie: 208, is_default: true, type1: "steel", type2: "ground", evolutions: []},
        209: {
            id: 209,
            name: "snubbull",
            specie: 209,
            is_default: true,
            type1: "fairy",
            evolutions: [{to: 210, method: "level_up", minLevel: 23},]
        },
        210: {id: 210, name: "granbull", specie: 210, is_default: true, type1: "fairy", evolutions: []},
        211: {
            id: 211,
            name: "qwilfish",
            specie: 211,
            is_default: true,
            type1: "water",
            type2: "poison",
            evolutions: []
        },
        212: {id: 212, name: "scizor", specie: 212, is_default: true, type1: "bug", type2: "steel", evolutions: []},
        213: {id: 213, name: "shuckle", specie: 213, is_default: true, type1: "bug", type2: "rock", evolutions: []},
        214: {
            id: 214,
            name: "heracross",
            specie: 214,
            is_default: true,
            type1: "bug",
            type2: "fighting",
            evolutions: []
        },
        215: {
            id: 215,
            name: "sneasel",
            specie: 215,
            is_default: true,
            type1: "dark",
            type2: "ice",
            evolutions: [{to: 461, method: "level_up", minLevel: 32},]
        },
        216: {
            id: 216,
            name: "teddiursa",
            specie: 216,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 217, method: "level_up", minLevel: 30},]
        },
        217: {id: 217, name: "ursaring", specie: 217, is_default: true, type1: "normal", evolutions: []},
        218: {
            id: 218,
            name: "slugma",
            specie: 218,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 219, method: "level_up", minLevel: 38},]
        },
        219: {id: 219, name: "magcargo", specie: 219, is_default: true, type1: "fire", type2: "rock", evolutions: []},
        220: {
            id: 220,
            name: "swinub",
            specie: 220,
            is_default: true,
            type1: "ice",
            type2: "ground",
            evolutions: [{to: 221, method: "level_up", minLevel: 33},]
        },
        221: {
            id: 221,
            name: "piloswine",
            specie: 221,
            is_default: true,
            type1: "ice",
            type2: "ground",
            evolutions: [{to: 473, method: "level_up", minLevel: 32},]
        },
        222: {id: 222, name: "corsola", specie: 222, is_default: true, type1: "water", type2: "rock", evolutions: []},
        223: {
            id: 223,
            name: "remoraid",
            specie: 223,
            is_default: true,
            type1: "water",
            evolutions: [{to: 224, method: "level_up", minLevel: 25},]
        },
        224: {id: 224, name: "octillery", specie: 224, is_default: true, type1: "water", evolutions: []},
        225: {id: 225, name: "delibird", specie: 225, is_default: true, type1: "ice", type2: "flying", evolutions: []},
        226: {id: 226, name: "mantine", specie: 226, is_default: true, type1: "water", type2: "flying", evolutions: []},
        227: {
            id: 227,
            name: "skarmory",
            specie: 227,
            is_default: true,
            type1: "steel",
            type2: "flying",
            evolutions: []
        },
        228: {
            id: 228,
            name: "houndour",
            specie: 228,
            is_default: true,
            type1: "dark",
            type2: "fire",
            evolutions: [{to: 229, method: "level_up", minLevel: 24},]
        },
        229: {id: 229, name: "houndoom", specie: 229, is_default: true, type1: "dark", type2: "fire", evolutions: []},
        230: {id: 230, name: "kingdra", specie: 230, is_default: true, type1: "water", type2: "dragon", evolutions: []},
        231: {
            id: 231,
            name: "phanpy",
            specie: 231,
            is_default: true,
            type1: "ground",
            evolutions: [{to: 232, method: "level_up", minLevel: 25},]
        },
        232: {id: 232, name: "donphan", specie: 232, is_default: true, type1: "ground", evolutions: []},
        233: {
            id: 233,
            name: "porygon2",
            specie: 233,
            is_default: true,
            type1: "normal",
            evolutions: [{to: 474, method: "level_up", minLevel: 32},]
        },
        234: {id: 234, name: "stantler", specie: 234, is_default: true, type1: "normal", evolutions: []},
        235: {id: 235, name: "smeargle", specie: 235, is_default: true, type1: "normal", evolutions: []},
        236: {
            id: 236,
            name: "tyrogue",
            specie: 236,
            is_default: true,
            type1: "fighting",
            evolutions: [{to: 106, method: "level_up", minLevel: 20}, {
                to: 107,
                method: "level_up",
                minLevel: 20
            }, {to: 237, method: "level_up", minLevel: 20},]
        },
        237: {id: 237, name: "hitmontop", specie: 237, is_default: true, type1: "fighting", evolutions: []},
        238: {
            id: 238,
            name: "smoochum",
            specie: 238,
            is_default: true,
            type1: "ice",
            type2: "psychic",
            evolutions: [{to: 124, method: "level_up", minLevel: 30},]
        },
        239: {
            id: 239,
            name: "elekid",
            specie: 239,
            is_default: true,
            type1: "electric",
            evolutions: [{to: 125, method: "level_up", minLevel: 30},]
        },
        240: {
            id: 240,
            name: "magby",
            specie: 240,
            is_default: true,
            type1: "fire",
            evolutions: [{to: 126, method: "level_up", minLevel: 30},]
        },
        241: {id: 241, name: "miltank", specie: 241, is_default: true, type1: "normal", evolutions: []},
        242: {id: 242, name: "blissey", specie: 242, is_default: true, type1: "normal", evolutions: []},
        243: {id: 243, name: "raikou", specie: 243, is_default: true, type1: "electric", evolutions: []},
        244: {id: 244, name: "entei", specie: 244, is_default: true, type1: "fire", evolutions: []},
        245: {id: 245, name: "suicune", specie: 245, is_default: true, type1: "water", evolutions: []},
        246: {
            id: 246,
            name: "larvitar",
            specie: 246,
            is_default: true,
            type1: "rock",
            type2: "ground",
            evolutions: [{to: 247, method: "level_up", minLevel: 30},]
        },
        247: {
            id: 247,
            name: "pupitar",
            specie: 247,
            is_default: true,
            type1: "rock",
            type2: "ground",
            evolutions: [{to: 248, method: "level_up", minLevel: 55},]
        },
        248: {id: 248, name: "tyranitar", specie: 248, is_default: true, type1: "rock", type2: "dark", evolutions: []},
        249: {id: 249, name: "lugia", specie: 249, is_default: true, type1: "psychic", type2: "flying", evolutions: []},
        250: {id: 250, name: "ho-oh", specie: 250, is_default: true, type1: "fire", type2: "flying", evolutions: []},
        251: {id: 251, name: "celebi", specie: 251, is_default: true, type1: "psychic", type2: "grass", evolutions: []},
    }
