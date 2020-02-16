import {IMove} from "../models/IMove";

export const moves: Record<number, IMove> =
    {
        0: {
            id: 0,
            exhibitionName: "-",
            name: "-",
            description: "-",
            type: "normal",
            accuracy: 50,
            power: 10
        },
        1: {
            id: 1,
            exhibitionName: "Pound",
            name: "pound",
            description: "The target is physically pounded with a long tail, a foreleg, or the like.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        2: {
            id: 2,
            exhibitionName: "Karate Chop",
            name: "karate-chop",
            description: "The target is attacked with a sharp chop. Critical hits land more easily.",
            type: "fighting",
            accuracy: 100,
            power: 50
        },
        3: {
            id: 3,
            exhibitionName: "Double Slap",
            name: "double-slap",
            description: "The target is slapped repeatedly, back and forth, two to five times in a row.",
            type: "normal",
            accuracy: 85,
            power: 15
        },
        4: {
            id: 4,
            exhibitionName: "Comet Punch",
            name: "comet-punch",
            description: "The target is hit with a flurry of punches that strike two to five times in a row.",
            type: "normal",
            accuracy: 85,
            power: 18
        },
        5: {
            id: 5,
            exhibitionName: "Mega Punch",
            name: "mega-punch",
            description: "The target is slugged by a punch thrown with muscle-packed power.",
            type: "normal",
            accuracy: 85,
            power: 80
        },
        6: {
            id: 6,
            exhibitionName: "Pay Day",
            name: "pay-day",
            description: "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        7: {
            id: 7,
            exhibitionName: "Fire Punch",
            name: "fire-punch",
            description: "The target is punched with a fiery fist. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 100,
            power: 75
        },
        8: {
            id: 8,
            exhibitionName: "Ice Punch",
            name: "ice-punch",
            description: "The target is punched with an icy fist. This may also leave the target frozen.",
            type: "ice",
            accuracy: 100,
            power: 75
        },
        9: {
            id: 9,
            exhibitionName: "Thunder Punch",
            name: "thunder-punch",
            description: "The target is punched with an electrified fist. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 75
        },
        10: {
            id: 10,
            exhibitionName: "Scratch",
            name: "scratch",
            description: "Hard, pointed, sharp claws rake the target to inflict damage.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        11: {
            id: 11,
            exhibitionName: "Vice Grip",
            name: "vice-grip",
            description: "The target is gripped and squeezed from both sides to inflict damage.",
            type: "normal",
            accuracy: 100,
            power: 55
        },
        13: {
            id: 13,
            exhibitionName: "Razor Wind",
            name: "razor-wind",
            description: "In this two-turn attack, blades of wind hit opposing Pokémon on the second turn. Critical hits land more easily.",
            type: "normal",
            accuracy: 100,
            power: 80
        },
        15: {
            id: 15,
            exhibitionName: "Cut",
            name: "cut",
            description: "The target is cut with a scythe or claw.",
            type: "normal",
            accuracy: 95,
            power: 50
        },
        16: {
            id: 16,
            exhibitionName: "Gust",
            name: "gust",
            description: "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
            type: "flying",
            accuracy: 100,
            power: 40
        },
        17: {
            id: 17,
            exhibitionName: "Wing Attack",
            name: "wing-attack",
            description: "The target is struck with large, imposing wings spread wide to inflict damage.",
            type: "flying",
            accuracy: 100,
            power: 60
        },
        19: {
            id: 19,
            exhibitionName: "Fly",
            name: "fly",
            description: "The user soars and then strikes its target on the next turn.",
            type: "flying",
            accuracy: 95,
            power: 90
        },
        20: {
            id: 20,
            exhibitionName: "Bind",
            name: "bind",
            description: "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
            type: "normal",
            accuracy: 85,
            power: 15
        },
        21: {
            id: 21,
            exhibitionName: "Slam",
            name: "slam",
            description: "The target is slammed with a long tail, vines, or the like to inflict damage.",
            type: "normal",
            accuracy: 75,
            power: 80
        },
        22: {
            id: 22,
            exhibitionName: "Vine Whip",
            name: "vine-whip",
            description: "The target is struck with slender, whiplike vines to inflict damage.",
            type: "grass",
            accuracy: 100,
            power: 45
        },
        23: {
            id: 23,
            exhibitionName: "Stomp",
            name: "stomp",
            description: "The target is stomped with a big foot. This may also make the target flinch.",
            type: "normal",
            accuracy: 100,
            power: 65
        },
        24: {
            id: 24,
            exhibitionName: "Double Kick",
            name: "double-kick",
            description: "The target is quickly kicked twice in succession using both feet.",
            type: "fighting",
            accuracy: 100,
            power: 30
        },
        25: {
            id: 25,
            exhibitionName: "Mega Kick",
            name: "mega-kick",
            description: "The target is attacked by a kick launched with muscle-packed power.",
            type: "normal",
            accuracy: 75,
            power: 120
        },
        26: {
            id: 26,
            exhibitionName: "Jump Kick",
            name: "jump-kick",
            description: "The user jumps up high, then strikes with a kick. If the kick misses, the user hurts itself.",
            type: "fighting",
            accuracy: 95,
            power: 100
        },
        27: {
            id: 27,
            exhibitionName: "Rolling Kick",
            name: "rolling-kick",
            description: "The user lashes out with a quick, spinning kick. This may also make the target flinch.",
            type: "fighting",
            accuracy: 85,
            power: 60
        },
        29: {
            id: 29,
            exhibitionName: "Headbutt",
            name: "headbutt",
            description: "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        30: {
            id: 30,
            exhibitionName: "Horn Attack",
            name: "horn-attack",
            description: "The target is jabbed with a sharply pointed horn to inflict damage.",
            type: "normal",
            accuracy: 100,
            power: 65
        },
        31: {
            id: 31,
            exhibitionName: "Fury Attack",
            name: "fury-attack",
            description: "The target is jabbed repeatedly with a horn or beak two to five times in a row.",
            type: "normal",
            accuracy: 85,
            power: 15
        },
        33: {
            id: 33,
            exhibitionName: "Tackle",
            name: "tackle",
            description: "A physical attack in which the user charges and slams into the target with its whole body.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        34: {
            id: 34,
            exhibitionName: "Body Slam",
            name: "body-slam",
            description: "The user drops onto the target with its full body weight. This may also leave the target with paralysis.",
            type: "normal",
            accuracy: 100,
            power: 85
        },
        35: {
            id: 35,
            exhibitionName: "Wrap",
            name: "wrap",
            description: "A long body, vines, or the like are used to wrap and  squeeze the target for four to five turns.",
            type: "normal",
            accuracy: 90,
            power: 15
        },
        36: {
            id: 36,
            exhibitionName: "Take Down",
            name: "take-down",
            description: "A reckless, full-body charge attack for slamming into the target. This also damages the user a little.",
            type: "normal",
            accuracy: 85,
            power: 90
        },
        37: {
            id: 37,
            exhibitionName: "Thrash",
            name: "thrash",
            description: "The user rampages and attacks for two to three turns. The user then becomes confused.",
            type: "normal",
            accuracy: 100,
            power: 120
        },
        38: {
            id: 38,
            exhibitionName: "Double-Edge",
            name: "double-edge",
            description: "A reckless, life-risking tackle. This also damages the user quite a lot.",
            type: "normal",
            accuracy: 100,
            power: 120
        },
        40: {
            id: 40,
            exhibitionName: "Poison Sting",
            name: "poison-sting",
            description: "The user stabs the target with a poisonous stinger. This may also poison the target.",
            type: "poison",
            accuracy: 100,
            power: 15
        },
        41: {
            id: 41,
            exhibitionName: "Twineedle",
            name: "twineedle",
            description: "The user damages the target twice in succession by jabbing it with two spikes. This may also poison the target.",
            type: "bug",
            accuracy: 100,
            power: 25
        },
        42: {
            id: 42,
            exhibitionName: "Pin Missile",
            name: "pin-missile",
            description: "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
            type: "bug",
            accuracy: 95,
            power: 25
        },
        44: {
            id: 44,
            exhibitionName: "Bite",
            name: "bite",
            description: "The target is bitten with viciously sharp fangs. This may also make the target flinch.",
            type: "dark",
            accuracy: 100,
            power: 60
        },
        51: {
            id: 51,
            exhibitionName: "Acid",
            name: "acid",
            description: "The opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stat.",
            type: "poison",
            accuracy: 100,
            power: 40
        },
        52: {
            id: 52,
            exhibitionName: "Ember",
            name: "ember",
            description: "The target is attacked with small flames. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 100,
            power: 40
        },
        53: {
            id: 53,
            exhibitionName: "Flamethrower",
            name: "flamethrower",
            description: "The target is scorched with an intense blast of fire. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 100,
            power: 90
        },
        55: {
            id: 55,
            exhibitionName: "Water Gun",
            name: "water-gun",
            description: "The target is blasted with a forceful shot of water.",
            type: "water",
            accuracy: 100,
            power: 40
        },
        56: {
            id: 56,
            exhibitionName: "Hydro Pump",
            name: "hydro-pump",
            description: "The target is blasted by a huge volume of water launched under great pressure.",
            type: "water",
            accuracy: 80,
            power: 110
        },
        57: {
            id: 57,
            exhibitionName: "Surf",
            name: "surf",
            description: "The user attacks everything around it by swamping its surroundings with a giant wave.",
            type: "water",
            accuracy: 100,
            power: 90
        },
        58: {
            id: 58,
            exhibitionName: "Ice Beam",
            name: "ice-beam",
            description: "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
            type: "ice",
            accuracy: 100,
            power: 90
        },
        59: {
            id: 59,
            exhibitionName: "Blizzard",
            name: "blizzard",
            description: "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
            type: "ice",
            accuracy: 70,
            power: 110
        },
        60: {
            id: 60,
            exhibitionName: "Psybeam",
            name: "psybeam",
            description: "The target is attacked with a peculiar ray. This may also leave the target confused.",
            type: "psychic",
            accuracy: 100,
            power: 65
        },
        61: {
            id: 61,
            exhibitionName: "Bubble Beam",
            name: "bubble-beam",
            description: "A spray of bubbles is forcefully ejected at the target. This may also lower its Speed stat.",
            type: "water",
            accuracy: 100,
            power: 65
        },
        62: {
            id: 62,
            exhibitionName: "Aurora Beam",
            name: "aurora-beam",
            description: "The target is hit with a rainbow-colored beam. This may also lower the target’s Attack stat.",
            type: "ice",
            accuracy: 100,
            power: 65
        },
        63: {
            id: 63,
            exhibitionName: "Hyper Beam",
            name: "hyper-beam",
            description: "The target is attacked with a powerful beam. The user can’t move on the next turn.",
            type: "normal",
            accuracy: 90,
            power: 150
        },
        64: {
            id: 64,
            exhibitionName: "Peck",
            name: "peck",
            description: "The target is jabbed with a sharply pointed beak or horn.",
            type: "flying",
            accuracy: 100,
            power: 35
        },
        65: {
            id: 65,
            exhibitionName: "Drill Peck",
            name: "drill-peck",
            description: "A corkscrewing attack with a sharp beak acting as a drill.",
            type: "flying",
            accuracy: 100,
            power: 80
        },
        66: {
            id: 66,
            exhibitionName: "Submission",
            name: "submission",
            description: "The user grabs the target and recklessly dives for the ground. This also damages the user a little.",
            type: "fighting",
            accuracy: 80,
            power: 80
        },
        70: {
            id: 70,
            exhibitionName: "Strength",
            name: "strength",
            description: "The target is slugged with a punch thrown at maximum power.",
            type: "normal",
            accuracy: 100,
            power: 80
        },
        71: {
            id: 71,
            exhibitionName: "Absorb",
            name: "absorb",
            description: "A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.",
            type: "grass",
            accuracy: 100,
            power: 20
        },
        72: {
            id: 72,
            exhibitionName: "Mega Drain",
            name: "mega-drain",
            description: "A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.",
            type: "grass",
            accuracy: 100,
            power: 40
        },
        75: {
            id: 75,
            exhibitionName: "Razor Leaf",
            name: "razor-leaf",
            description: "Sharp-edged leaves are launched to slash at the opposing Pokémon. Critical hits land more easily.",
            type: "grass",
            accuracy: 95,
            power: 55
        },
        76: {
            id: 76,
            exhibitionName: "Solar Beam",
            name: "solar-beam",
            description: "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
            type: "grass",
            accuracy: 100,
            power: 120
        },
        80: {
            id: 80,
            exhibitionName: "Petal Dance",
            name: "petal-dance",
            description: "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
            type: "grass",
            accuracy: 100,
            power: 120
        },
        83: {
            id: 83,
            exhibitionName: "Fire Spin",
            name: "fire-spin",
            description: "The target becomes trapped within a fierce vortex of fire that rages for four to five turns.",
            type: "fire",
            accuracy: 85,
            power: 35
        },
        84: {
            id: 84,
            exhibitionName: "Thunder Shock",
            name: "thunder-shock",
            description: "A jolt of electricity crashes down on the target to inflict damage. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 40
        },
        85: {
            id: 85,
            exhibitionName: "Thunderbolt",
            name: "thunderbolt",
            description: "A strong electric blast crashes down on the target. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 90
        },
        87: {
            id: 87,
            exhibitionName: "Thunder",
            name: "thunder",
            description: "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 70,
            power: 110
        },
        88: {
            id: 88,
            exhibitionName: "Rock Throw",
            name: "rock-throw",
            description: "The user picks up and throws a small rock at the target to attack.",
            type: "rock",
            accuracy: 90,
            power: 50
        },
        89: {
            id: 89,
            exhibitionName: "Earthquake",
            name: "earthquake",
            description: "The user sets off an earthquake that strikes every Pokémon around it.",
            type: "ground",
            accuracy: 100,
            power: 100
        },
        91: {
            id: 91,
            exhibitionName: "Dig",
            name: "dig",
            description: "The user burrows, then attacks on the next turn.",
            type: "ground",
            accuracy: 100,
            power: 80
        },
        93: {
            id: 93,
            exhibitionName: "Confusion",
            name: "confusion",
            description: "The target is hit by a weak telekinetic force. This may also confuse the target.",
            type: "psychic",
            accuracy: 100,
            power: 50
        },
        94: {
            id: 94,
            exhibitionName: "Psychic",
            name: "psychic",
            description: "The target is hit by a strong telekinetic force. This may also lower the target’s Sp. Def stat.",
            type: "psychic",
            accuracy: 100,
            power: 90
        },
        98: {
            id: 98,
            exhibitionName: "Quick Attack",
            name: "quick-attack",
            description: "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        99: {
            id: 99,
            exhibitionName: "Rage",
            name: "rage",
            description: "As long as this move is in use, the power of rage raises the Attack stat each time the user is hit in battle.",
            type: "normal",
            accuracy: 100,
            power: 20
        },
        120: {
            id: 120,
            exhibitionName: "Self-Destruct",
            name: "self-destruct",
            description: "The user attacks everything around it by causing an explosion. The user faints upon using this move.",
            type: "normal",
            accuracy: 100,
            power: 200
        },
        121: {
            id: 121,
            exhibitionName: "Egg Bomb",
            name: "egg-bomb",
            description: "A large egg is hurled at the target with maximum force to inflict damage.",
            type: "normal",
            accuracy: 75,
            power: 100
        },
        122: {
            id: 122,
            exhibitionName: "Lick",
            name: "lick",
            description: "The target is licked with a long tongue, causing damage. This may also leave the target with paralysis.",
            type: "ghost",
            accuracy: 100,
            power: 30
        },
        123: {
            id: 123,
            exhibitionName: "Smog",
            name: "smog",
            description: "The target is attacked with a discharge of filthy gases. This may also poison the target.",
            type: "poison",
            accuracy: 70,
            power: 30
        },
        124: {
            id: 124,
            exhibitionName: "Sludge",
            name: "sludge",
            description: "Unsanitary sludge is hurled at the target. This may also poison the target.",
            type: "poison",
            accuracy: 100,
            power: 65
        },
        125: {
            id: 125,
            exhibitionName: "Bone Club",
            name: "bone-club",
            description: "The user clubs the target with a bone. This may also make the target flinch.",
            type: "ground",
            accuracy: 85,
            power: 65
        },
        126: {
            id: 126,
            exhibitionName: "Fire Blast",
            name: "fire-blast",
            description: "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 85,
            power: 110
        },
        127: {
            id: 127,
            exhibitionName: "Waterfall",
            name: "waterfall",
            description: "The user charges at the target and may make it flinch.",
            type: "water",
            accuracy: 100,
            power: 80
        },
        128: {
            id: 128,
            exhibitionName: "Clamp",
            name: "clamp",
            description: "The target is clamped and squeezed by the user’s very thick and sturdy shell for four to five turns.",
            type: "water",
            accuracy: 85,
            power: 35
        },
        129: {
            id: 129,
            exhibitionName: "Swift",
            name: "swift",
            description: "Star-shaped rays are shot at the opposing Pokémon. This attack never misses.",
            type: "normal",
            accuracy: 100,
            power: 60
        },
        130: {
            id: 130,
            exhibitionName: "Skull Bash",
            name: "skull-bash",
            description: "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
            type: "normal",
            accuracy: 100,
            power: 130
        },
        131: {
            id: 131,
            exhibitionName: "Spike Cannon",
            name: "spike-cannon",
            description: "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
            type: "normal",
            accuracy: 100,
            power: 20
        },
        132: {
            id: 132,
            exhibitionName: "Constrict",
            name: "constrict",
            description: "The target is attacked with long, creeping tentacles, vines, or the like. This may also lower the target’s  Speed stat.",
            type: "normal",
            accuracy: 100,
            power: 10
        },
        136: {
            id: 136,
            exhibitionName: "High Jump Kick",
            name: "high-jump-kick",
            description: "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.",
            type: "fighting",
            accuracy: 90,
            power: 130
        },
        138: {
            id: 138,
            exhibitionName: "Dream Eater",
            name: "dream-eater",
            description: "The user eats the dreams of a sleeping target. It absorbs half the damage caused to heal its own HP.",
            type: "psychic",
            accuracy: 100,
            power: 100
        },
        140: {
            id: 140,
            exhibitionName: "Barrage",
            name: "barrage",
            description: "Round objects are hurled at the target to strike two to five times in a row.",
            type: "normal",
            accuracy: 85,
            power: 15
        },
        141: {
            id: 141,
            exhibitionName: "Leech Life",
            name: "leech-life",
            description: "The user drains the target’s blood. The user’s HP is restored by half the damage taken by the target.",
            type: "bug",
            accuracy: 100,
            power: 80
        },
        143: {
            id: 143,
            exhibitionName: "Sky Attack",
            name: "sky-attack",
            description: "A second-turn attack move where critical hits land more easily. This may also make the target flinch.",
            type: "flying",
            accuracy: 90,
            power: 140
        },
        145: {
            id: 145,
            exhibitionName: "Bubble",
            name: "bubble",
            description: "A spray of countless bubbles is jetted at the opposing Pokémon. This may also lower their Speed stat.",
            type: "water",
            accuracy: 100,
            power: 40
        },
        146: {
            id: 146,
            exhibitionName: "Dizzy Punch",
            name: "dizzy-punch",
            description: "The target is hit with rhythmically launched punches. This may also leave the target confused.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        152: {
            id: 152,
            exhibitionName: "Crabhammer",
            name: "crabhammer",
            description: "The target is hammered with a large pincer. Critical hits land more easily.",
            type: "water",
            accuracy: 90,
            power: 100
        },
        153: {
            id: 153,
            exhibitionName: "Explosion",
            name: "explosion",
            description: "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
            type: "normal",
            accuracy: 100,
            power: 250
        },
        154: {
            id: 154,
            exhibitionName: "Fury Swipes",
            name: "fury-swipes",
            description: "The target is raked with sharp claws or scythes quickly two to five times in a row.",
            type: "normal",
            accuracy: 80,
            power: 18
        },
        155: {
            id: 155,
            exhibitionName: "Bonemerang",
            name: "bonemerang",
            description: "The user throws the bone it holds. The bone loops around to hit the target twice—coming and going.",
            type: "ground",
            accuracy: 90,
            power: 50
        },
        157: {
            id: 157,
            exhibitionName: "Rock Slide",
            name: "rock-slide",
            description: "Large boulders are hurled at the opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
            type: "rock",
            accuracy: 90,
            power: 75
        },
        158: {
            id: 158,
            exhibitionName: "Hyper Fang",
            name: "hyper-fang",
            description: "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
            type: "normal",
            accuracy: 90,
            power: 80
        },
        161: {
            id: 161,
            exhibitionName: "Tri Attack",
            name: "tri-attack",
            description: "The user strikes with a simultaneous three-beam attack. May also burn, freeze, or paralyze the target.",
            type: "normal",
            accuracy: 100,
            power: 80
        },
        163: {
            id: 163,
            exhibitionName: "Slash",
            name: "slash",
            description: "The target is attacked with a slash of claws or blades. Critical hits land more easily.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        165: {
            id: 165,
            exhibitionName: "Struggle",
            name: "struggle",
            description: "This attack is used in desperation only if the user has no PP. It also damages the user a little.",
            type: "normal",
            accuracy: 100,
            power: 50
        },
        167: {
            id: 167,
            exhibitionName: "Triple Kick",
            name: "triple-kick",
            description: "A consecutive three-kick attack that becomes more powerful with each successful hit.",
            type: "fighting",
            accuracy: 90,
            power: 10
        },
        168: {
            id: 168,
            exhibitionName: "Thief",
            name: "thief",
            description: "The user attacks and steals the target’s held item simultaneously. The user can’t steal anything if it already holds an item.",
            type: "dark",
            accuracy: 100,
            power: 60
        },
        172: {
            id: 172,
            exhibitionName: "Flame Wheel",
            name: "flame-wheel",
            description: "The user cloaks itself in fire and charges at the target. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 100,
            power: 60
        },
        173: {
            id: 173,
            exhibitionName: "Snore",
            name: "snore",
            description: "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
            type: "normal",
            accuracy: 100,
            power: 50
        },
        177: {
            id: 177,
            exhibitionName: "Aeroblast",
            name: "aeroblast",
            description: "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.",
            type: "flying",
            accuracy: 95,
            power: 100
        },
        181: {
            id: 181,
            exhibitionName: "Powder Snow",
            name: "powder-snow",
            description: "The user attacks with a chilling gust of powdery snow. This may also freeze the opposing Pokémon.",
            type: "ice",
            accuracy: 100,
            power: 40
        },
        183: {
            id: 183,
            exhibitionName: "Mach Punch",
            name: "mach-punch",
            description: "The user throws a punch at blinding speed. This move always goes first.",
            type: "fighting",
            accuracy: 100,
            power: 40
        },
        185: {
            id: 185,
            exhibitionName: "Feint Attack",
            name: "feint-attack",
            description: "The user approaches the target disarmingly, then throws a sucker punch. This attack never misses.",
            type: "dark",
            accuracy: 100,
            power: 60
        },
        188: {
            id: 188,
            exhibitionName: "Sludge Bomb",
            name: "sludge-bomb",
            description: "Unsanitary sludge is hurled at the target. This may also poison the target.",
            type: "poison",
            accuracy: 100,
            power: 90
        },
        189: {
            id: 189,
            exhibitionName: "Mud-Slap",
            name: "mud-slap",
            description: "The user hurls mud in the target’s face to inflict damage and lower its accuracy.",
            type: "ground",
            accuracy: 100,
            power: 20
        },
        190: {
            id: 190,
            exhibitionName: "Octazooka",
            name: "octazooka",
            description: "The user attacks by spraying ink in the target’s face or eyes. This may also lower the target’s accuracy.",
            type: "water",
            accuracy: 85,
            power: 65
        },
        192: {
            id: 192,
            exhibitionName: "Zap Cannon",
            name: "zap-cannon",
            description: "The user fires an electric blast like a cannon to inflict damage and cause paralysis.",
            type: "electric",
            accuracy: 50,
            power: 120
        },
        196: {
            id: 196,
            exhibitionName: "Icy Wind",
            name: "icy-wind",
            description: "The user attacks with a gust of chilled air. This also lowers the opposing Pokémon’s Speed stats.",
            type: "ice",
            accuracy: 95,
            power: 55
        },
        198: {
            id: 198,
            exhibitionName: "Bone Rush",
            name: "bone-rush",
            description: "The user strikes the target with a hard bone two to five times in a row.",
            type: "ground",
            accuracy: 90,
            power: 25
        },
        200: {
            id: 200,
            exhibitionName: "Outrage",
            name: "outrage",
            description: "The user rampages and attacks for two to three turns. The user then becomes confused.",
            type: "dragon",
            accuracy: 100,
            power: 120
        },
        202: {
            id: 202,
            exhibitionName: "Giga Drain",
            name: "giga-drain",
            description: "A nutrient-draining attack. The user’s HP is restored by half the damage taken by the target.",
            type: "grass",
            accuracy: 100,
            power: 75
        },
        205: {
            id: 205,
            exhibitionName: "Rollout",
            name: "rollout",
            description: "The user continually rolls into the target over five turns. It becomes more powerful each time it hits.",
            type: "rock",
            accuracy: 90,
            power: 30
        },
        206: {
            id: 206,
            exhibitionName: "False Swipe",
            name: "false-swipe",
            description: "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        209: {
            id: 209,
            exhibitionName: "Spark",
            name: "spark",
            description: "The user throws an electrically charged tackle at the target. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 65
        },
        210: {
            id: 210,
            exhibitionName: "Fury Cutter",
            name: "fury-cutter",
            description: "The target is slashed with scythes or claws. This attack becomes more powerful if it hits in succession.",
            type: "bug",
            accuracy: 95,
            power: 40
        },
        211: {
            id: 211,
            exhibitionName: "Steel Wing",
            name: "steel-wing",
            description: "The target is hit with wings of steel. This may also raise the user’s Defense stat.",
            type: "steel",
            accuracy: 90,
            power: 70
        },
        221: {
            id: 221,
            exhibitionName: "Sacred Fire",
            name: "sacred-fire",
            description: "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 95,
            power: 100
        },
        223: {
            id: 223,
            exhibitionName: "Dynamic Punch",
            name: "dynamic-punch",
            description: "The user punches the target with full, concentrated power. This confuses the target if it hits.",
            type: "fighting",
            accuracy: 50,
            power: 100
        },
        224: {
            id: 224,
            exhibitionName: "Megahorn",
            name: "megahorn",
            description: "Using its tough and impressive horn, the user rams into the target with no letup.",
            type: "bug",
            accuracy: 85,
            power: 120
        },
        225: {
            id: 225,
            exhibitionName: "Dragon Breath",
            name: "dragon-breath",
            description: "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
            type: "dragon",
            accuracy: 100,
            power: 60
        },
        228: {
            id: 228,
            exhibitionName: "Pursuit",
            name: "pursuit",
            description: "The power of this attack move is doubled if it’s used on a target that’s switching out of battle.",
            type: "dark",
            accuracy: 100,
            power: 40
        },
        229: {
            id: 229,
            exhibitionName: "Rapid Spin",
            name: "rapid-spin",
            description: "A spin attack that can also eliminate such moves as Bind, Wrap, Leech Seed, and Spikes.",
            type: "normal",
            accuracy: 100,
            power: 20
        },
        231: {
            id: 231,
            exhibitionName: "Iron Tail",
            name: "iron-tail",
            description: "The target is slammed with a steel-hard tail. This may also lower the target’s Defense stat.",
            type: "steel",
            accuracy: 75,
            power: 100
        },
        232: {
            id: 232,
            exhibitionName: "Metal Claw",
            name: "metal-claw",
            description: "The target is raked with steel claws. This may also raise the user’s Attack stat.",
            type: "steel",
            accuracy: 95,
            power: 50
        },
        233: {
            id: 233,
            exhibitionName: "Vital Throw",
            name: "vital-throw",
            description: "The user attacks last. In return, this throw move never misses.",
            type: "fighting",
            accuracy: 100,
            power: 70
        },
        237: {
            id: 237,
            exhibitionName: "Hidden Power",
            name: "hidden-power",
            description: "A unique attack that varies in type depending on the Pokémon using it.",
            type: "normal",
            accuracy: 100,
            power: 60
        },
        238: {
            id: 238,
            exhibitionName: "Cross Chop",
            name: "cross-chop",
            description: "The user delivers a double chop with its forearms crossed. Critical hits land more easily.",
            type: "fighting",
            accuracy: 80,
            power: 100
        },
        239: {
            id: 239,
            exhibitionName: "Twister",
            name: "twister",
            description: "The user whips up a vicious tornado to tear at the opposing Pokémon. This may also make them flinch.",
            type: "dragon",
            accuracy: 100,
            power: 40
        },
        242: {
            id: 242,
            exhibitionName: "Crunch",
            name: "crunch",
            description: "The user crunches up the target with sharp fangs. This may also lower the target’s Defense stat.",
            type: "dark",
            accuracy: 100,
            power: 80
        },
        245: {
            id: 245,
            exhibitionName: "Extreme Speed",
            name: "extreme-speed",
            description: "The user charges the target at blinding speed. This move always goes first.",
            type: "normal",
            accuracy: 100,
            power: 80
        },
        246: {
            id: 246,
            exhibitionName: "Ancient Power",
            name: "ancient-power",
            description: "The user attacks with a prehistoric power. This may also raise all the user’s stats at once.",
            type: "rock",
            accuracy: 100,
            power: 60
        },
        247: {
            id: 247,
            exhibitionName: "Shadow Ball",
            name: "shadow-ball",
            description: "The user hurls a shadowy blob at the target. This may also lower the target’s Sp. Def stat.",
            type: "ghost",
            accuracy: 100,
            power: 80
        },
        248: {
            id: 248,
            exhibitionName: "Future Sight",
            name: "future-sight",
            description: "Two turns after this move is used, a hunk of psychic energy attacks the target.",
            type: "psychic",
            accuracy: 100,
            power: 120
        },
        249: {
            id: 249,
            exhibitionName: "Rock Smash",
            name: "rock-smash",
            description: "The user attacks with a punch. This may also lower the target’s Defense stat.",
            type: "fighting",
            accuracy: 100,
            power: 40
        },
        250: {
            id: 250,
            exhibitionName: "Whirlpool",
            name: "whirlpool",
            description: "The user traps the target in a violent swirling whirlpool for four to five turns.",
            type: "water",
            accuracy: 85,
            power: 35
        },
        252: {
            id: 252,
            exhibitionName: "Fake Out",
            name: "fake-out",
            description: "This attack hits first and makes the target flinch. It only works the first turn the user is in battle.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        253: {
            id: 253,
            exhibitionName: "Uproar",
            name: "uproar",
            description: "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep.",
            type: "normal",
            accuracy: 100,
            power: 90
        },
        257: {
            id: 257,
            exhibitionName: "Heat Wave",
            name: "heat-wave",
            description: "The user attacks by exhaling hot breath on the opposing Pokémon. This may also leave those Pokémon with a burn.",
            type: "fire",
            accuracy: 90,
            power: 95
        },
        263: {
            id: 263,
            exhibitionName: "Facade",
            name: "facade",
            description: "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        264: {
            id: 264,
            exhibitionName: "Focus Punch",
            name: "focus-punch",
            description: "The user focuses its mind before launching a punch. This move fails if the user is hit before it is used.",
            type: "fighting",
            accuracy: 100,
            power: 150
        },
        265: {
            id: 265,
            exhibitionName: "Smelling Salts",
            name: "smelling-salts",
            description: "This attack’s power is doubled when used on a target with paralysis. This also cures the target’s paralysis, however.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        276: {
            id: 276,
            exhibitionName: "Superpower",
            name: "superpower",
            description: "The user attacks the target with great power. However, this also lowers the user’s Attack and Defense stats.",
            type: "fighting",
            accuracy: 100,
            power: 120
        },
        279: {
            id: 279,
            exhibitionName: "Revenge",
            name: "revenge",
            description: "This attack move’s power is doubled if the user has been hurt by the opponent in the same turn.",
            type: "fighting",
            accuracy: 100,
            power: 60
        },
        280: {
            id: 280,
            exhibitionName: "Brick Break",
            name: "brick-break",
            description: "The user attacks with a swift chop. It can also break barriers, such as Light Screen and Reflect.",
            type: "fighting",
            accuracy: 100,
            power: 75
        },
        282: {
            id: 282,
            exhibitionName: "Knock Off",
            name: "knock-off",
            description: "The user slaps down the target’s held item, and that item can’t be used in that battle. The move does more damage if the target has a held item.",
            type: "dark",
            accuracy: 100,
            power: 65
        },
        284: {
            id: 284,
            exhibitionName: "Eruption",
            name: "eruption",
            description: "The user attacks opposing Pokémon with explosive fury. The lower the user’s HP, the lower the move’s power.",
            type: "fire",
            accuracy: 100,
            power: 150
        },
        290: {
            id: 290,
            exhibitionName: "Secret Power",
            name: "secret-power",
            description: "The additional effects of this attack depend upon where it was used.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        291: {
            id: 291,
            exhibitionName: "Dive",
            name: "dive",
            description: "Diving on the first turn, the user floats up and attacks on the next turn.",
            type: "water",
            accuracy: 100,
            power: 80
        },
        292: {
            id: 292,
            exhibitionName: "Arm Thrust",
            name: "arm-thrust",
            description: "The user lets loose a flurry of open-palmed arm thrusts that hit two to five times in a row.",
            type: "fighting",
            accuracy: 100,
            power: 15
        },
        295: {
            id: 295,
            exhibitionName: "Luster Purge",
            name: "luster-purge",
            description: "The user lets loose a damaging burst of light. This may also lower the target’s Sp. Def stat.",
            type: "psychic",
            accuracy: 100,
            power: 70
        },
        296: {
            id: 296,
            exhibitionName: "Mist Ball",
            name: "mist-ball",
            description: "A mist-like flurry of down envelops and damages the target. This may also lower the target’s Sp. Atk stat.",
            type: "psychic",
            accuracy: 100,
            power: 70
        },
        299: {
            id: 299,
            exhibitionName: "Blaze Kick",
            name: "blaze-kick",
            description: "The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 90,
            power: 85
        },
        301: {
            id: 301,
            exhibitionName: "Ice Ball",
            name: "ice-ball",
            description: "The user attacks the target for five turns. The move’s power increases each time it hits.",
            type: "ice",
            accuracy: 90,
            power: 30
        },
        302: {
            id: 302,
            exhibitionName: "Needle Arm",
            name: "needle-arm",
            description: "The user attacks by wildly swinging its thorny arms. This may also make the target flinch.",
            type: "grass",
            accuracy: 100,
            power: 60
        },
        304: {
            id: 304,
            exhibitionName: "Hyper Voice",
            name: "hyper-voice",
            description: "The user lets loose a horribly echoing shout with the power to inflict damage.",
            type: "normal",
            accuracy: 100,
            power: 90
        },
        305: {
            id: 305,
            exhibitionName: "Poison Fang",
            name: "poison-fang",
            description: "The user bites the target with toxic fangs. This may also leave the target badly poisoned.",
            type: "poison",
            accuracy: 100,
            power: 50
        },
        306: {
            id: 306,
            exhibitionName: "Crush Claw",
            name: "crush-claw",
            description: "The user slashes the target with hard and sharp claws. This may also lower the target’s Defense stat.",
            type: "normal",
            accuracy: 95,
            power: 75
        },
        307: {
            id: 307,
            exhibitionName: "Blast Burn",
            name: "blast-burn",
            description: "The target is razed by a fiery explosion. The user can’t move on the next turn.",
            type: "fire",
            accuracy: 90,
            power: 150
        },
        308: {
            id: 308,
            exhibitionName: "Hydro Cannon",
            name: "hydro-cannon",
            description: "The target is hit with a watery blast. The user can’t move on the next turn.",
            type: "water",
            accuracy: 90,
            power: 150
        },
        309: {
            id: 309,
            exhibitionName: "Meteor Mash",
            name: "meteor-mash",
            description: "The target is hit with a hard punch fired like a meteor. This may also raise the user’s Attack stat.",
            type: "steel",
            accuracy: 90,
            power: 90
        },
        310: {
            id: 310,
            exhibitionName: "Astonish",
            name: "astonish",
            description: "The user attacks the target while shouting in a startling fashion. This may also make the target flinch.",
            type: "ghost",
            accuracy: 100,
            power: 30
        },
        311: {
            id: 311,
            exhibitionName: "Weather Ball",
            name: "weather-ball",
            description: "This attack move varies in power and type depending on the weather.",
            type: "normal",
            accuracy: 100,
            power: 50
        },
        314: {
            id: 314,
            exhibitionName: "Air Cutter",
            name: "air-cutter",
            description: "The user launches razor-like wind to slash the opposing Pokémon. Critical hits land more easily.",
            type: "flying",
            accuracy: 95,
            power: 60
        },
        315: {
            id: 315,
            exhibitionName: "Overheat",
            name: "overheat",
            description: "The user attacks the target at full power. The attack’s recoil harshly lowers the user’s Sp. Atk stat.",
            type: "fire",
            accuracy: 90,
            power: 130
        },
        317: {
            id: 317,
            exhibitionName: "Rock Tomb",
            name: "rock-tomb",
            description: "Boulders are hurled at the target. This also lowers the target’s Speed stat by preventing its movement.",
            type: "rock",
            accuracy: 95,
            power: 60
        },
        318: {
            id: 318,
            exhibitionName: "Silver Wind",
            name: "silver-wind",
            description: "The target is attacked with powdery scales blown by the wind. This may also raise all the user’s stats.",
            type: "bug",
            accuracy: 100,
            power: 60
        },
        323: {
            id: 323,
            exhibitionName: "Water Spout",
            name: "water-spout",
            description: "The user spouts water to damage opposing Pokémon. The lower the user’s HP, the lower the move’s power.",
            type: "water",
            accuracy: 100,
            power: 150
        },
        324: {
            id: 324,
            exhibitionName: "Signal Beam",
            name: "signal-beam",
            description: "The user attacks with a sinister beam of light. This may also confuse the target.",
            type: "bug",
            accuracy: 100,
            power: 75
        },
        325: {
            id: 325,
            exhibitionName: "Shadow Punch",
            name: "shadow-punch",
            description: "The user throws a punch from the shadows. This attack never misses.",
            type: "ghost",
            accuracy: 100,
            power: 60
        },
        326: {
            id: 326,
            exhibitionName: "Extrasensory",
            name: "extrasensory",
            description: "The user attacks with an odd, unseeable power. This may also make the target flinch.",
            type: "psychic",
            accuracy: 100,
            power: 80
        },
        327: {
            id: 327,
            exhibitionName: "Sky Uppercut",
            name: "sky-uppercut",
            description: "The user attacks the target with an uppercut thrown skyward with force.",
            type: "fighting",
            accuracy: 90,
            power: 85
        },
        328: {
            id: 328,
            exhibitionName: "Sand Tomb",
            name: "sand-tomb",
            description: "The user traps the target inside a harshly raging sandstorm for four to five turns.",
            type: "ground",
            accuracy: 85,
            power: 35
        },
        330: {
            id: 330,
            exhibitionName: "Muddy Water",
            name: "muddy-water",
            description: "The user attacks by shooting muddy water at the opposing Pokémon. This may also lower their accuracy.",
            type: "water",
            accuracy: 85,
            power: 90
        },
        331: {
            id: 331,
            exhibitionName: "Bullet Seed",
            name: "bullet-seed",
            description: "The user forcefully shoots seeds at the target two to five times in a row.",
            type: "grass",
            accuracy: 100,
            power: 25
        },
        332: {
            id: 332,
            exhibitionName: "Aerial Ace",
            name: "aerial-ace",
            description: "The user confounds the target with speed, then slashes. This attack never misses.",
            type: "flying",
            accuracy: 100,
            power: 60
        },
        333: {
            id: 333,
            exhibitionName: "Icicle Spear",
            name: "icicle-spear",
            description: "The user launches sharp icicles at the target two to five times in a row.",
            type: "ice",
            accuracy: 100,
            power: 25
        },
        337: {
            id: 337,
            exhibitionName: "Dragon Claw",
            name: "dragon-claw",
            description: "The user slashes the target with huge sharp claws.",
            type: "dragon",
            accuracy: 100,
            power: 80
        },
        338: {
            id: 338,
            exhibitionName: "Frenzy Plant",
            name: "frenzy-plant",
            description: "The user slams the target with an enormous tree. The user can’t move on the next turn.",
            type: "grass",
            accuracy: 90,
            power: 150
        },
        340: {
            id: 340,
            exhibitionName: "Bounce",
            name: "bounce",
            description: "The user bounces up high, then drops on the target on the second turn. This may also leave the target with paralysis.",
            type: "flying",
            accuracy: 85,
            power: 85
        },
        341: {
            id: 341,
            exhibitionName: "Mud Shot",
            name: "mud-shot",
            description: "The user attacks by hurling a blob of mud at the target. This also lowers the target’s Speed stat.",
            type: "ground",
            accuracy: 95,
            power: 55
        },
        342: {
            id: 342,
            exhibitionName: "Poison Tail",
            name: "poison-tail",
            description: "The user hits the target with its tail. This may also poison the target. Critical hits land more easily.",
            type: "poison",
            accuracy: 100,
            power: 50
        },
        343: {
            id: 343,
            exhibitionName: "Covet",
            name: "covet",
            description: "The user endearingly approaches the target, then steals the target’s held item.",
            type: "normal",
            accuracy: 100,
            power: 60
        },
        344: {
            id: 344,
            exhibitionName: "Volt Tackle",
            name: "volt-tackle",
            description: "The user electrifies itself and charges the target. This also damages the user quite a lot. This attack may leave the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 120
        },
        345: {
            id: 345,
            exhibitionName: "Magical Leaf",
            name: "magical-leaf",
            description: "The user scatters curious leaves that chase the target. This attack never misses.",
            type: "grass",
            accuracy: 100,
            power: 60
        },
        348: {
            id: 348,
            exhibitionName: "Leaf Blade",
            name: "leaf-blade",
            description: "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
            type: "grass",
            accuracy: 100,
            power: 90
        },
        350: {
            id: 350,
            exhibitionName: "Rock Blast",
            name: "rock-blast",
            description: "The user hurls hard rocks at the target. Two to five rocks are launched in a row.",
            type: "rock",
            accuracy: 90,
            power: 25
        },
        351: {
            id: 351,
            exhibitionName: "Shock Wave",
            name: "shock-wave",
            description: "The user strikes the target with a quick jolt of electricity. This attack never misses.",
            type: "electric",
            accuracy: 100,
            power: 60
        },
        352: {
            id: 352,
            exhibitionName: "Water Pulse",
            name: "water-pulse",
            description: "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
            type: "water",
            accuracy: 100,
            power: 60
        },
        353: {
            id: 353,
            exhibitionName: "Doom Desire",
            name: "doom-desire",
            description: "Two turns after this move is used, a concentrated bundle of light blasts the target. ",
            type: "steel",
            accuracy: 100,
            power: 140
        },
        354: {
            id: 354,
            exhibitionName: "Psycho Boost",
            name: "psycho-boost",
            description: "The user attacks the target at full power. The attack’s recoil harshly lowers the user’s Sp. Atk stat.",
            type: "psychic",
            accuracy: 90,
            power: 140
        },
        358: {
            id: 358,
            exhibitionName: "Wake-Up Slap",
            name: "wake-up-slap",
            description: "This attack inflicts big damage on a sleeping target. This also wakes the target up, however.",
            type: "fighting",
            accuracy: 100,
            power: 70
        },
        359: {
            id: 359,
            exhibitionName: "Hammer Arm",
            name: "hammer-arm",
            description: "The user swings and hits with its strong, heavy fist. It lowers the user’s Speed, however.",
            type: "fighting",
            accuracy: 90,
            power: 100
        },
        362: {
            id: 362,
            exhibitionName: "Brine",
            name: "brine",
            description: "If the target’s HP is half or less, this attack will hit with double the power.",
            type: "water",
            accuracy: 100,
            power: 65
        },
        364: {
            id: 364,
            exhibitionName: "Feint",
            name: "feint",
            description: "This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.",
            type: "normal",
            accuracy: 100,
            power: 30
        },
        365: {
            id: 365,
            exhibitionName: "Pluck",
            name: "pluck",
            description: "The user pecks the target. If the target is holding a Berry, the user eats it and gains its effect.",
            type: "flying",
            accuracy: 100,
            power: 60
        },
        369: {
            id: 369,
            exhibitionName: "U-turn",
            name: "u-turn",
            description: "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
            type: "bug",
            accuracy: 100,
            power: 70
        },
        370: {
            id: 370,
            exhibitionName: "Close Combat",
            name: "close-combat",
            description: "The user fights the target up close without guarding itself. This also lowers the user’s Defense and Sp. Def stats.",
            type: "fighting",
            accuracy: 100,
            power: 120
        },
        371: {
            id: 371,
            exhibitionName: "Payback",
            name: "payback",
            description: "The user stores power, then attacks. If the user moves after the target, this attack’s power will be doubled.",
            type: "dark",
            accuracy: 100,
            power: 50
        },
        372: {
            id: 372,
            exhibitionName: "Assurance",
            name: "assurance",
            description: "If the target has already taken some damage in the same turn, this attack’s power is doubled.",
            type: "dark",
            accuracy: 100,
            power: 60
        },
        387: {
            id: 387,
            exhibitionName: "Last Resort",
            name: "last-resort",
            description: "This move can be used only after the user has used all the other moves it knows in the battle.",
            type: "normal",
            accuracy: 100,
            power: 140
        },
        389: {
            id: 389,
            exhibitionName: "Sucker Punch",
            name: "sucker-punch",
            description: "This move enables the user to attack first. This move fails if the target is not readying an attack.",
            type: "dark",
            accuracy: 100,
            power: 70
        },
        394: {
            id: 394,
            exhibitionName: "Flare Blitz",
            name: "flare-blitz",
            description: "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.",
            type: "fire",
            accuracy: 100,
            power: 120
        },
        395: {
            id: 395,
            exhibitionName: "Force Palm",
            name: "force-palm",
            description: "The target is attacked with a shock wave. This may also leave the target with paralysis.",
            type: "fighting",
            accuracy: 100,
            power: 60
        },
        396: {
            id: 396,
            exhibitionName: "Aura Sphere",
            name: "aura-sphere",
            description: "The user lets loose a blast of aura power from deep within its body at the target. This attack never misses.",
            type: "fighting",
            accuracy: 100,
            power: 80
        },
        398: {
            id: 398,
            exhibitionName: "Poison Jab",
            name: "poison-jab",
            description: "The target is stabbed with a tentacle or arm steeped in poison. This may also poison the target.",
            type: "poison",
            accuracy: 100,
            power: 80
        },
        399: {
            id: 399,
            exhibitionName: "Dark Pulse",
            name: "dark-pulse",
            description: "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.",
            type: "dark",
            accuracy: 100,
            power: 80
        },
        400: {
            id: 400,
            exhibitionName: "Night Slash",
            name: "night-slash",
            description: "The user slashes the target the instant an opportunity arises. Critical hits land more easily.",
            type: "dark",
            accuracy: 100,
            power: 70
        },
        401: {
            id: 401,
            exhibitionName: "Aqua Tail",
            name: "aqua-tail",
            description: "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
            type: "water",
            accuracy: 90,
            power: 90
        },
        402: {
            id: 402,
            exhibitionName: "Seed Bomb",
            name: "seed-bomb",
            description: "The user slams a barrage of hard-shelled seeds down on the target from above.",
            type: "grass",
            accuracy: 100,
            power: 80
        },
        403: {
            id: 403,
            exhibitionName: "Air Slash",
            name: "air-slash",
            description: "The user attacks with a blade of air that slices even the sky. This may also make the target flinch.",
            type: "flying",
            accuracy: 95,
            power: 75
        },
        404: {
            id: 404,
            exhibitionName: "X-Scissor",
            name: "x-scissor",
            description: "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
            type: "bug",
            accuracy: 100,
            power: 80
        },
        405: {
            id: 405,
            exhibitionName: "Bug Buzz",
            name: "bug-buzz",
            description: "The user generates a damaging sound wave by vibration. This may also lower the target’s Sp. Def stat.",
            type: "bug",
            accuracy: 100,
            power: 90
        },
        406: {
            id: 406,
            exhibitionName: "Dragon Pulse",
            name: "dragon-pulse",
            description: "The target is attacked with a shock wave generated by the user’s gaping mouth.",
            type: "dragon",
            accuracy: 100,
            power: 85
        },
        407: {
            id: 407,
            exhibitionName: "Dragon Rush",
            name: "dragon-rush",
            description: "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
            type: "dragon",
            accuracy: 75,
            power: 100
        },
        408: {
            id: 408,
            exhibitionName: "Power Gem",
            name: "power-gem",
            description: "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
            type: "rock",
            accuracy: 100,
            power: 80
        },
        409: {
            id: 409,
            exhibitionName: "Drain Punch",
            name: "drain-punch",
            description: "An energy-draining punch. The user’s HP is restored by half the damage taken by the target.",
            type: "fighting",
            accuracy: 100,
            power: 75
        },
        410: {
            id: 410,
            exhibitionName: "Vacuum Wave",
            name: "vacuum-wave",
            description: "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.",
            type: "fighting",
            accuracy: 100,
            power: 40
        },
        411: {
            id: 411,
            exhibitionName: "Focus Blast",
            name: "focus-blast",
            description: "The user heightens its mental focus and unleashes its power. This may also lower the target’s  Sp. Def stat.",
            type: "fighting",
            accuracy: 70,
            power: 120
        },
        412: {
            id: 412,
            exhibitionName: "Energy Ball",
            name: "energy-ball",
            description: "The user draws power from nature and fires it at the target. This may also lower the target’s Sp. Def stat.",
            type: "grass",
            accuracy: 100,
            power: 90
        },
        413: {
            id: 413,
            exhibitionName: "Brave Bird",
            name: "brave-bird",
            description: "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot.",
            type: "flying",
            accuracy: 100,
            power: 120
        },
        414: {
            id: 414,
            exhibitionName: "Earth Power",
            name: "earth-power",
            description: "The user makes the ground under the target erupt with power. This may also lower the target’s  Sp. Def stat.",
            type: "ground",
            accuracy: 100,
            power: 90
        },
        416: {
            id: 416,
            exhibitionName: "Giga Impact",
            name: "giga-impact",
            description: "The user charges at the target using every bit of its power. The user can’t move on the next turn.",
            type: "normal",
            accuracy: 90,
            power: 150
        },
        418: {
            id: 418,
            exhibitionName: "Bullet Punch",
            name: "bullet-punch",
            description: "The user strikes the target with tough punches as fast as bullets. This move always goes first.",
            type: "steel",
            accuracy: 100,
            power: 40
        },
        419: {
            id: 419,
            exhibitionName: "Avalanche",
            name: "avalanche",
            description: "The power of this attack move is doubled if the user has been hurt by the target in the same turn.",
            type: "ice",
            accuracy: 100,
            power: 60
        },
        420: {
            id: 420,
            exhibitionName: "Ice Shard",
            name: "ice-shard",
            description: "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
            type: "ice",
            accuracy: 100,
            power: 40
        },
        421: {
            id: 421,
            exhibitionName: "Shadow Claw",
            name: "shadow-claw",
            description: "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
            type: "ghost",
            accuracy: 100,
            power: 70
        },
        422: {
            id: 422,
            exhibitionName: "Thunder Fang",
            name: "thunder-fang",
            description: "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis.",
            type: "electric",
            accuracy: 95,
            power: 65
        },
        423: {
            id: 423,
            exhibitionName: "Ice Fang",
            name: "ice-fang",
            description: "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen.",
            type: "ice",
            accuracy: 95,
            power: 65
        },
        424: {
            id: 424,
            exhibitionName: "Fire Fang",
            name: "fire-fang",
            description: "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.",
            type: "fire",
            accuracy: 95,
            power: 65
        },
        425: {
            id: 425,
            exhibitionName: "Shadow Sneak",
            name: "shadow-sneak",
            description: "The user extends its shadow and attacks the target from behind. This move always goes first.",
            type: "ghost",
            accuracy: 100,
            power: 40
        },
        426: {
            id: 426,
            exhibitionName: "Mud Bomb",
            name: "mud-bomb",
            description: "The user launches a hard-packed mud ball to attack. This may also lower the target’s accuracy.",
            type: "ground",
            accuracy: 85,
            power: 65
        },
        427: {
            id: 427,
            exhibitionName: "Psycho Cut",
            name: "psycho-cut",
            description: "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
            type: "psychic",
            accuracy: 100,
            power: 70
        },
        428: {
            id: 428,
            exhibitionName: "Zen Headbutt",
            name: "zen-headbutt",
            description: "The user focuses its willpower to its head and attacks the target. This may also make the target flinch.",
            type: "psychic",
            accuracy: 90,
            power: 80
        },
        429: {
            id: 429,
            exhibitionName: "Mirror Shot",
            name: "mirror-shot",
            description: "The user lets loose a flash of energy at the target from its polished body. This may also lower the target’s accuracy.",
            type: "steel",
            accuracy: 85,
            power: 65
        },
        430: {
            id: 430,
            exhibitionName: "Flash Cannon",
            name: "flash-cannon",
            description: "The user gathers all its light energy and releases it all at once. This may also lower the target’s Sp. Def stat.",
            type: "steel",
            accuracy: 100,
            power: 80
        },
        431: {
            id: 431,
            exhibitionName: "Rock Climb",
            name: "rock-climb",
            description: "The user attacks the target by smashing into it with incredible force. This may also confuse the target.",
            type: "normal",
            accuracy: 85,
            power: 90
        },
        434: {
            id: 434,
            exhibitionName: "Draco Meteor",
            name: "draco-meteor",
            description: "Comets are summoned down from the sky onto the target. The attack’s recoil harshly lowers the user’s Sp. Atk stat.",
            type: "dragon",
            accuracy: 90,
            power: 130
        },
        435: {
            id: 435,
            exhibitionName: "Discharge",
            name: "discharge",
            description: "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
            type: "electric",
            accuracy: 100,
            power: 80
        },
        436: {
            id: 436,
            exhibitionName: "Lava Plume",
            name: "lava-plume",
            description: "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
            type: "fire",
            accuracy: 100,
            power: 80
        },
        437: {
            id: 437,
            exhibitionName: "Leaf Storm",
            name: "leaf-storm",
            description: "The user whips up a storm of leaves around the target. The attack’s recoil harshly lowers the user’s Sp. Atk stat.",
            type: "grass",
            accuracy: 90,
            power: 130
        },
        438: {
            id: 438,
            exhibitionName: "Power Whip",
            name: "power-whip",
            description: "The user violently whirls its vines, tentacles, or the  like to harshly lash the target.",
            type: "grass",
            accuracy: 85,
            power: 120
        },
        439: {
            id: 439,
            exhibitionName: "Rock Wrecker",
            name: "rock-wrecker",
            description: "The user launches a huge boulder at the target to attack. The user can’t move on the next turn.",
            type: "rock",
            accuracy: 90,
            power: 150
        },
        440: {
            id: 440,
            exhibitionName: "Cross Poison",
            name: "cross-poison",
            description: "A slashing attack with a poisonous blade that may also poison the target. Critical hits land more easily.",
            type: "poison",
            accuracy: 100,
            power: 70
        },
        441: {
            id: 441,
            exhibitionName: "Gunk Shot",
            name: "gunk-shot",
            description: "The user shoots filthy garbage at the target to attack. This may also poison the target.",
            type: "poison",
            accuracy: 80,
            power: 120
        },
        442: {
            id: 442,
            exhibitionName: "Iron Head",
            name: "iron-head",
            description: "The user slams the target with its steel-hard head. This may also make the target flinch.",
            type: "steel",
            accuracy: 100,
            power: 80
        },
        443: {
            id: 443,
            exhibitionName: "Magnet Bomb",
            name: "magnet-bomb",
            description: "The user launches steel bombs that stick to the target. This attack never misses.",
            type: "steel",
            accuracy: 100,
            power: 60
        },
        444: {
            id: 444,
            exhibitionName: "Stone Edge",
            name: "stone-edge",
            description: "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
            type: "rock",
            accuracy: 80,
            power: 100
        },
        448: {
            id: 448,
            exhibitionName: "Chatter",
            name: "chatter",
            description: "The user attacks the target with sound waves of deafening chatter. This confuses the target.",
            type: "flying",
            accuracy: 100,
            power: 65
        },
        449: {
            id: 449,
            exhibitionName: "Judgment",
            name: "judgment",
            description: "The user releases countless shots of light at the target. This move’s type varies depending on the kind of Plate the user is holding.",
            type: "normal",
            accuracy: 100,
            power: 100
        },
        450: {
            id: 450,
            exhibitionName: "Bug Bite",
            name: "bug-bite",
            description: "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
            type: "bug",
            accuracy: 100,
            power: 60
        },
        451: {
            id: 451,
            exhibitionName: "Charge Beam",
            name: "charge-beam",
            description: "The user attacks with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat.",
            type: "electric",
            accuracy: 90,
            power: 50
        },
        452: {
            id: 452,
            exhibitionName: "Wood Hammer",
            name: "wood-hammer",
            description: "The user slams its rugged body into the target to attack. This also damages the user quite a lot.",
            type: "grass",
            accuracy: 100,
            power: 120
        },
        453: {
            id: 453,
            exhibitionName: "Aqua Jet",
            name: "aqua-jet",
            description: "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
            type: "water",
            accuracy: 100,
            power: 40
        },
        454: {
            id: 454,
            exhibitionName: "Attack Order",
            name: "attack-order",
            description: "The user calls out its underlings to pummel the target. Critical hits land more easily.",
            type: "bug",
            accuracy: 100,
            power: 90
        },
        457: {
            id: 457,
            exhibitionName: "Head Smash",
            name: "head-smash",
            description: "The user attacks the target with a hazardous, full-power headbutt. This also damages the user terribly.",
            type: "rock",
            accuracy: 80,
            power: 150
        },
        458: {
            id: 458,
            exhibitionName: "Double Hit",
            name: "double-hit",
            description: "The user slams the target with a long tail, vines, or a tentacle. The target is hit twice in a row.",
            type: "normal",
            accuracy: 90,
            power: 35
        },
        459: {
            id: 459,
            exhibitionName: "Roar of Time",
            name: "roar-of-time",
            description: "The user blasts the target with power that distorts even time. The user can’t move on the next turn.",
            type: "dragon",
            accuracy: 90,
            power: 150
        },
        460: {
            id: 460,
            exhibitionName: "Spacial Rend",
            name: "spacial-rend",
            description: "The user tears the target along with the space around it. Critical hits land more easily.",
            type: "dragon",
            accuracy: 95,
            power: 100
        },
        463: {
            id: 463,
            exhibitionName: "Magma Storm",
            name: "magma-storm",
            description: "The target becomes trapped within a maelstrom of fire that rages for four to five turns.",
            type: "fire",
            accuracy: 75,
            power: 100
        },
        465: {
            id: 465,
            exhibitionName: "Seed Flare",
            name: "seed-flare",
            description: "The user emits a shock wave from its body to attack its target. This may also harshly lower the target’s Sp. Def stat.",
            type: "grass",
            accuracy: 85,
            power: 120
        },
        466: {
            id: 466,
            exhibitionName: "Ominous Wind",
            name: "ominous-wind",
            description: "The user blasts the target with a gust of repulsive wind. This may also raise all the user’s stats at once.",
            type: "ghost",
            accuracy: 100,
            power: 60
        },
        467: {
            id: 467,
            exhibitionName: "Shadow Force",
            name: "shadow-force",
            description: "The user disappears, then strikes the target on the next turn. This move hits even if the target protects itself.",
            type: "ghost",
            accuracy: 100,
            power: 120
        },
        473: {
            id: 473,
            exhibitionName: "Psyshock",
            name: "psyshock",
            description: "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
            type: "psychic",
            accuracy: 100,
            power: 80
        },
        474: {
            id: 474,
            exhibitionName: "Venoshock",
            name: "venoshock",
            description: "The user drenches the target in a special poisonous liquid. This move’s power is doubled if the target is poisoned.",
            type: "poison",
            accuracy: 100,
            power: 65
        },
        479: {
            id: 479,
            exhibitionName: "Smack Down",
            name: "smack-down",
            description: "The user throws a stone or similar projectile to attack an opponent. A flying Pokémon will fall to the ground when it’s hit.",
            type: "rock",
            accuracy: 100,
            power: 50
        },
        480: {
            id: 480,
            exhibitionName: "Storm Throw",
            name: "storm-throw",
            description: "The user strikes the target with a fierce blow. This attack always results in a critical hit.",
            type: "fighting",
            accuracy: 100,
            power: 60
        },
        481: {
            id: 481,
            exhibitionName: "Flame Burst",
            name: "flame-burst",
            description: "The user attacks the target with a bursting flame. The bursting flame damages Pokémon next to the target as well.",
            type: "fire",
            accuracy: 100,
            power: 70
        },
        482: {
            id: 482,
            exhibitionName: "Sludge Wave",
            name: "sludge-wave",
            description: "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit.",
            type: "poison",
            accuracy: 100,
            power: 95
        },
        485: {
            id: 485,
            exhibitionName: "Synchronoise",
            name: "synchronoise",
            description: "Using an odd shock wave, the user inflicts damage on any Pokémon of the same type in the area around it.",
            type: "psychic",
            accuracy: 100,
            power: 120
        },
        488: {
            id: 488,
            exhibitionName: "Flame Charge",
            name: "flame-charge",
            description: "Cloaking itself in flame, the user attacks. Then, building up more power, the user raises its Speed stat.",
            type: "fire",
            accuracy: 100,
            power: 50
        },
        490: {
            id: 490,
            exhibitionName: "Low Sweep",
            name: "low-sweep",
            description: "The user makes a swift attack on the target’s legs, which lowers the target’s Speed stat.",
            type: "fighting",
            accuracy: 100,
            power: 65
        },
        491: {
            id: 491,
            exhibitionName: "Acid Spray",
            name: "acid-spray",
            description: "The user spits fluid that works to melt the target. This harshly lowers the target’s Sp. Def stat.",
            type: "poison",
            accuracy: 100,
            power: 40
        },
        492: {
            id: 492,
            exhibitionName: "Foul Play",
            name: "foul-play",
            description: "The user turns the target’s power against it. The higher the target’s Attack stat, the greater the move’s power.",
            type: "dark",
            accuracy: 100,
            power: 95
        },
        496: {
            id: 496,
            exhibitionName: "Round",
            name: "round",
            description: "The user attacks the target with a song. Others can join in the Round to increase the power of the attack.",
            type: "normal",
            accuracy: 100,
            power: 60
        },
        497: {
            id: 497,
            exhibitionName: "Echoed Voice",
            name: "echoed-voice",
            description: "The user attacks the target with an echoing voice. If this move is used every turn, its power is increased.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        498: {
            id: 498,
            exhibitionName: "Chip Away",
            name: "chip-away",
            description: "Looking for an opening, the user strikes consistently. The target’s stat changes don’t affect this attack’s damage.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        499: {
            id: 499,
            exhibitionName: "Clear Smog",
            name: "clear-smog",
            description: "The user attacks by throwing a clump of special mud. All stat changes are returned to normal.",
            type: "poison",
            accuracy: 100,
            power: 50
        },
        500: {
            id: 500,
            exhibitionName: "Stored Power",
            name: "stored-power",
            description: "The user attacks the target with stored power. The more the user’s stats are raised, the greater the move’s power.",
            type: "psychic",
            accuracy: 100,
            power: 20
        },
        503: {
            id: 503,
            exhibitionName: "Scald",
            name: "scald",
            description: "The user shoots boiling hot water at its target. This may also leave the target with a burn.",
            type: "water",
            accuracy: 100,
            power: 80
        },
        506: {
            id: 506,
            exhibitionName: "Hex",
            name: "hex",
            description: "This relentless attack does massive damage to a target affected by status conditions.",
            type: "ghost",
            accuracy: 100,
            power: 65
        },
        507: {
            id: 507,
            exhibitionName: "Sky Drop",
            name: "sky-drop",
            description: "The user takes the target into the sky, then drops it during the next turn. The target cannot attack while in the sky.",
            type: "flying",
            accuracy: 100,
            power: 60
        },
        509: {
            id: 509,
            exhibitionName: "Circle Throw",
            name: "circle-throw",
            description: "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
            type: "fighting",
            accuracy: 90,
            power: 60
        },
        510: {
            id: 510,
            exhibitionName: "Incinerate",
            name: "incinerate",
            description: "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable.",
            type: "fire",
            accuracy: 100,
            power: 60
        },
        512: {
            id: 512,
            exhibitionName: "Acrobatics",
            name: "acrobatics",
            description: "The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.",
            type: "flying",
            accuracy: 100,
            power: 55
        },
        514: {
            id: 514,
            exhibitionName: "Retaliate",
            name: "retaliate",
            description: "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move’s power is increased.",
            type: "normal",
            accuracy: 100,
            power: 70
        },
        517: {
            id: 517,
            exhibitionName: "Inferno",
            name: "inferno",
            description: "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.",
            type: "fire",
            accuracy: 50,
            power: 100
        },
        518: {
            id: 518,
            exhibitionName: "Water Pledge",
            name: "water-pledge",
            description: "A column of water strikes the target. When combined with its fire equivalent, its power increases and a rainbow appears.",
            type: "water",
            accuracy: 100,
            power: 80
        },
        519: {
            id: 519,
            exhibitionName: "Fire Pledge",
            name: "fire-pledge",
            description: "A column of fire hits the target. When used with its grass equivalent, its power increases and a vast sea of fire appears.",
            type: "fire",
            accuracy: 100,
            power: 80
        },
        520: {
            id: 520,
            exhibitionName: "Grass Pledge",
            name: "grass-pledge",
            description: "A column of grass hits the target. When used with its water equivalent, its power increases and a vast swamp appears.",
            type: "grass",
            accuracy: 100,
            power: 80
        },
        521: {
            id: 521,
            exhibitionName: "Volt Switch",
            name: "volt-switch",
            description: "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
            type: "electric",
            accuracy: 100,
            power: 70
        },
        522: {
            id: 522,
            exhibitionName: "Struggle Bug",
            name: "struggle-bug",
            description: "While resisting, the user attacks the opposing Pokémon. This lowers the Sp. Atk stat of those hit.",
            type: "bug",
            accuracy: 100,
            power: 50
        },
        523: {
            id: 523,
            exhibitionName: "Bulldoze",
            name: "bulldoze",
            description: "The user strikes everything around it by stomping down on the ground. This lowers the Speed stat of those hit.",
            type: "ground",
            accuracy: 100,
            power: 60
        },
        524: {
            id: 524,
            exhibitionName: "Frost Breath",
            name: "frost-breath",
            description: "The user blows its cold breath on the target. This attack always results in a critical hit.",
            type: "ice",
            accuracy: 90,
            power: 60
        },
        525: {
            id: 525,
            exhibitionName: "Dragon Tail",
            name: "dragon-tail",
            description: "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
            type: "dragon",
            accuracy: 90,
            power: 60
        },
        527: {
            id: 527,
            exhibitionName: "Electroweb",
            name: "electroweb",
            description: "The user attacks and captures opposing Pokémon using an electric net. This lowers their Speed stat.",
            type: "electric",
            accuracy: 95,
            power: 55
        },
        528: {
            id: 528,
            exhibitionName: "Wild Charge",
            name: "wild-charge",
            description: "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
            type: "electric",
            accuracy: 100,
            power: 90
        },
        529: {
            id: 529,
            exhibitionName: "Drill Run",
            name: "drill-run",
            description: "The user crashes into its target while rotating its body like a drill. Critical hits land more easily.",
            type: "ground",
            accuracy: 95,
            power: 80
        },
        530: {
            id: 530,
            exhibitionName: "Dual Chop",
            name: "dual-chop",
            description: "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.",
            type: "dragon",
            accuracy: 90,
            power: 40
        },
        531: {
            id: 531,
            exhibitionName: "Heart Stamp",
            name: "heart-stamp",
            description: "The user unleashes a vicious blow after its cute act makes the target less wary. This may also make the target flinch.",
            type: "psychic",
            accuracy: 100,
            power: 60
        },
        532: {
            id: 532,
            exhibitionName: "Horn Leech",
            name: "horn-leech",
            description: "The user drains the target’s energy with its horns. The user’s HP is restored by half the damage taken by the target.",
            type: "grass",
            accuracy: 100,
            power: 75
        },
        533: {
            id: 533,
            exhibitionName: "Sacred Sword",
            name: "sacred-sword",
            description: "The user attacks by slicing with a long horn. The target’s stat changes don’t affect this attack’s damage.",
            type: "fighting",
            accuracy: 100,
            power: 90
        },
        534: {
            id: 534,
            exhibitionName: "Razor Shell",
            name: "razor-shell",
            description: "The user cuts its target with sharp shells. This may also lower the target’s Defense stat.",
            type: "water",
            accuracy: 95,
            power: 75
        },
        536: {
            id: 536,
            exhibitionName: "Leaf Tornado",
            name: "leaf-tornado",
            description: "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target’s accuracy.",
            type: "grass",
            accuracy: 90,
            power: 65
        },
        537: {
            id: 537,
            exhibitionName: "Steamroller",
            name: "steamroller",
            description: "The user crushes its target by rolling over the target with its rolled-up body. This may also make the target flinch.",
            type: "bug",
            accuracy: 100,
            power: 65
        },
        539: {
            id: 539,
            exhibitionName: "Night Daze",
            name: "night-daze",
            description: "The user lets loose a pitch-black shock wave at its target. This may also lower the target’s accuracy.",
            type: "dark",
            accuracy: 95,
            power: 85
        },
        540: {
            id: 540,
            exhibitionName: "Psystrike",
            name: "psystrike",
            description: "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
            type: "psychic",
            accuracy: 100,
            power: 100
        },
        541: {
            id: 541,
            exhibitionName: "Tail Slap",
            name: "tail-slap",
            description: "The user attacks by striking the target with its hard tail. It hits the target two to five times in a row.",
            type: "normal",
            accuracy: 85,
            power: 25
        },
        542: {
            id: 542,
            exhibitionName: "Hurricane",
            name: "hurricane",
            description: "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target.",
            type: "flying",
            accuracy: 70,
            power: 110
        },
        543: {
            id: 543,
            exhibitionName: "Head Charge",
            name: "head-charge",
            description: "The user charges its head into its target, using its powerful guard hair. This also damages the user a little.",
            type: "normal",
            accuracy: 100,
            power: 120
        },
        544: {
            id: 544,
            exhibitionName: "Gear Grind",
            name: "gear-grind",
            description: "The user attacks by throwing steel gears at its target twice.",
            type: "steel",
            accuracy: 85,
            power: 50
        },
        545: {
            id: 545,
            exhibitionName: "Searing Shot",
            name: "searing-shot",
            description: "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
            type: "fire",
            accuracy: 100,
            power: 100
        },
        546: {
            id: 546,
            exhibitionName: "Techno Blast",
            name: "techno-blast",
            description: "The user fires a beam of light at its target. The move’s type changes depending on the Drive the user holds.",
            type: "normal",
            accuracy: 100,
            power: 120
        },
        547: {
            id: 547,
            exhibitionName: "Relic Song",
            name: "relic-song",
            description: "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",
            type: "normal",
            accuracy: 100,
            power: 75
        },
        548: {
            id: 548,
            exhibitionName: "Secret Sword",
            name: "secret-sword",
            description: "The user cuts with its long horn. The odd power contained in the horn does physical damage to the target.",
            type: "fighting",
            accuracy: 100,
            power: 85
        },
        549: {
            id: 549,
            exhibitionName: "Glaciate",
            name: "glaciate",
            description: "The user attacks by blowing freezing cold air at opposing Pokémon. This lowers their Speed stat.",
            type: "ice",
            accuracy: 95,
            power: 65
        },
        550: {
            id: 550,
            exhibitionName: "Bolt Strike",
            name: "bolt-strike",
            description: "The user surrounds itself with a great amount of electricity and charges its target. This may also leave the target with paralysis.",
            type: "electric",
            accuracy: 85,
            power: 130
        },
        551: {
            id: 551,
            exhibitionName: "Blue Flare",
            name: "blue-flare",
            description: "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn.",
            type: "fire",
            accuracy: 85,
            power: 130
        },
        552: {
            id: 552,
            exhibitionName: "Fiery Dance",
            name: "fiery-dance",
            description: "Cloaked in flames, the user dances and flaps its wings. This may also raise the user’s Sp. Atk stat.",
            type: "fire",
            accuracy: 100,
            power: 80
        },
        553: {
            id: 553,
            exhibitionName: "Freeze Shock",
            name: "freeze-shock",
            description: "On the second turn, the user hits the target with electrically charged ice. This may also leave the target with paralysis.",
            type: "ice",
            accuracy: 90,
            power: 140
        },
        554: {
            id: 554,
            exhibitionName: "Ice Burn",
            name: "ice-burn",
            description: "On the second turn, an ultracold, freezing wind surrounds the target. This may leave the target with a burn.",
            type: "ice",
            accuracy: 90,
            power: 140
        },
        555: {
            id: 555,
            exhibitionName: "Snarl",
            name: "snarl",
            description: "The user yells as if it’s ranting about something, which lowers the Sp. Atk stat of opposing Pokémon.",
            type: "dark",
            accuracy: 95,
            power: 55
        },
        556: {
            id: 556,
            exhibitionName: "Icicle Crash",
            name: "icicle-crash",
            description: "The user attacks by harshly dropping large icicles onto the target. This may also make the target flinch.",
            type: "ice",
            accuracy: 90,
            power: 85
        },
        557: {
            id: 557,
            exhibitionName: "V-create",
            name: "v-create",
            description: "With a hot flame on its forehead, the user hurls itself at its target. This lowers the user’s Defense, Sp. Def, and Speed stats.",
            type: "fire",
            accuracy: 95,
            power: 180
        },
        558: {
            id: 558,
            exhibitionName: "Fusion Flare",
            name: "fusion-flare",
            description: "The user brings down a giant flame. This move’s power is increased when influenced by an enormous lightning bolt.",
            type: "fire",
            accuracy: 100,
            power: 100
        },
        559: {
            id: 559,
            exhibitionName: "Fusion Bolt",
            name: "fusion-bolt",
            description: "The user throws down a giant lightning bolt. This move’s power is increased when influenced by an enormous flame.",
            type: "electric",
            accuracy: 100,
            power: 100
        },
        560: {
            id: 560,
            exhibitionName: "Flying Press",
            name: "flying-press",
            description: "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.",
            type: "fighting",
            accuracy: 95,
            power: 100
        },
        562: {
            id: 562,
            exhibitionName: "Belch",
            name: "belch",
            description: "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move.",
            type: "poison",
            accuracy: 90,
            power: 120
        },
        565: {
            id: 565,
            exhibitionName: "Fell Stinger",
            name: "fell-stinger",
            description: "When the user knocks out a target with this move, the user’s Attack stat rises drastically.",
            type: "bug",
            accuracy: 100,
            power: 50
        },
        566: {
            id: 566,
            exhibitionName: "Phantom Force",
            name: "phantom-force",
            description: "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.",
            type: "ghost",
            accuracy: 100,
            power: 90
        },
        570: {
            id: 570,
            exhibitionName: "Parabolic Charge",
            name: "parabolic-charge",
            description: "The user attacks everything around it. The user’s HP is restored by half the damage taken by those hit.",
            type: "electric",
            accuracy: 100,
            power: 65
        },
        572: {
            id: 572,
            exhibitionName: "Petal Blizzard",
            name: "petal-blizzard",
            description: "The user stirs up a violent petal blizzard and attacks everything around it.",
            type: "grass",
            accuracy: 100,
            power: 90
        },
        573: {
            id: 573,
            exhibitionName: "Freeze-Dry",
            name: "freeze-dry",
            description: "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.",
            type: "ice",
            accuracy: 100,
            power: 70
        },
        574: {
            id: 574,
            exhibitionName: "Disarming Voice",
            name: "disarming-voice",
            description: "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses.",
            type: "fairy",
            accuracy: 100,
            power: 40
        },
        577: {
            id: 577,
            exhibitionName: "Draining Kiss",
            name: "draining-kiss",
            description: "The user steals the target’s HP with a kiss. The user’s HP is restored by over half of the damage taken by the target.",
            type: "fairy",
            accuracy: 100,
            power: 50
        },
        583: {
            id: 583,
            exhibitionName: "Play Rough",
            name: "play-rough",
            description: "The user plays rough with the target and attacks it. This may also lower the target’s Attack stat.",
            type: "fairy",
            accuracy: 90,
            power: 90
        },
        584: {
            id: 584,
            exhibitionName: "Fairy Wind",
            name: "fairy-wind",
            description: "The user stirs up a fairy wind and strikes the target with it.",
            type: "fairy",
            accuracy: 100,
            power: 40
        },
        585: {
            id: 585,
            exhibitionName: "Moonblast",
            name: "moonblast",
            description: "Borrowing the power of the moon, the user attacks the target. This may also lower the target’s Sp. Atk stat.",
            type: "fairy",
            accuracy: 100,
            power: 95
        },
        586: {
            id: 586,
            exhibitionName: "Boomburst",
            name: "boomburst",
            description: "The user attacks everything around it with the destructive power of a terrible, explosive sound.",
            type: "normal",
            accuracy: 100,
            power: 140
        },
        591: {
            id: 591,
            exhibitionName: "Diamond Storm",
            name: "diamond-storm",
            description: "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply raise the user’s Defense stat.",
            type: "rock",
            accuracy: 95,
            power: 100
        },
        592: {
            id: 592,
            exhibitionName: "Steam Eruption",
            name: "steam-eruption",
            description: "The user immerses the target in superheated steam. This may also leave the target with a burn.",
            type: "water",
            accuracy: 95,
            power: 110
        },
        593: {
            id: 593,
            exhibitionName: "Hyperspace Hole",
            name: "hyperspace-hole",
            description: "Using a hyperspace hole, the user appears right next to the target and strikes. This also hits a target using a move such as Protect or Detect.",
            type: "psychic",
            accuracy: 100,
            power: 80
        },
        594: {
            id: 594,
            exhibitionName: "Water Shuriken",
            name: "water-shuriken",
            description: "The user hits the target with throwing stars two to five times in a row. This move always goes first.",
            type: "water",
            accuracy: 100,
            power: 15
        },
        595: {
            id: 595,
            exhibitionName: "Mystical Fire",
            name: "mystical-fire",
            description: "The user attacks by breathing a special, hot fire. This also lowers the target’s Sp. Atk stat.",
            type: "fire",
            accuracy: 100,
            power: 75
        },
        605: {
            id: 605,
            exhibitionName: "Dazzling Gleam",
            name: "dazzling-gleam",
            description: "The user damages opposing Pokémon by emitting a powerful flash.",
            type: "fairy",
            accuracy: 100,
            power: 80
        },
        609: {
            id: 609,
            exhibitionName: "Nuzzle",
            name: "nuzzle",
            description: "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 20
        },
        610: {
            id: 610,
            exhibitionName: "Hold Back",
            name: "hold-back",
            description: "The user holds back when it attacks, and the target is left with at least 1 HP.",
            type: "normal",
            accuracy: 100,
            power: 40
        },
        611: {
            id: 611,
            exhibitionName: "Infestation",
            name: "infestation",
            description: "The target is infested and attacked for four to five turns. The target can’t flee during this time.",
            type: "bug",
            accuracy: 100,
            power: 20
        },
        612: {
            id: 612,
            exhibitionName: "Power-Up Punch",
            name: "power-up-punch",
            description: "Striking opponents over and over makes the user’s fists harder. Hitting a target raises the Attack stat.",
            type: "fighting",
            accuracy: 100,
            power: 40
        },
        613: {
            id: 613,
            exhibitionName: "Oblivion Wing",
            name: "oblivion-wing",
            description: "The user absorbs its target’s HP. The user’s HP is restored by over half of the damage taken by the target.",
            type: "flying",
            accuracy: 100,
            power: 80
        },
        614: {
            id: 614,
            exhibitionName: "Thousand Arrows",
            name: "thousand-arrows",
            description: "This move also hits opposing Pokémon that are in the air. Those Pokémon are knocked down to the ground.",
            type: "ground",
            accuracy: 100,
            power: 90
        },
        615: {
            id: 615,
            exhibitionName: "Thousand Waves",
            name: "thousand-waves",
            description: "The user attacks with a wave that crawls along the ground. Those hit can’t flee from battle.",
            type: "ground",
            accuracy: 100,
            power: 90
        },
        616: {
            id: 616,
            exhibitionName: "Land’s Wrath",
            name: "lands-wrath",
            description: "The user gathers the energy of the land and focuses that power on opposing Pokémon to damage them.",
            type: "ground",
            accuracy: 100,
            power: 90
        },
        617: {
            id: 617,
            exhibitionName: "Light of Ruin",
            name: "light-of-ruin",
            description: "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user quite a lot.",
            type: "fairy",
            accuracy: 90,
            power: 140
        },
        618: {
            id: 618,
            exhibitionName: "Origin Pulse",
            name: "origin-pulse",
            description: "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue.",
            type: "water",
            accuracy: 85,
            power: 110
        },
        619: {
            id: 619,
            exhibitionName: "Precipice Blades",
            name: "precipice-blades",
            description: "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone.",
            type: "ground",
            accuracy: 85,
            power: 120
        },
        620: {
            id: 620,
            exhibitionName: "Dragon Ascent",
            name: "dragon-ascent",
            description: "After soaring upward, the user attacks its target by dropping out of the sky at high speeds. But it lowers its own Defense and Sp. Def stats in the process.",
            type: "flying",
            accuracy: 100,
            power: 120
        },
        621: {
            id: 621,
            exhibitionName: "Hyperspace Fury",
            name: "hyperspace-fury",
            description: "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. But the user’s Defense stat falls.",
            type: "dark",
            accuracy: 100,
            power: 100
        },
        658: {
            id: 658,
            exhibitionName: "Catastropika",
            name: "catastropika",
            description: "The user, Pikachu, surrounds itself with the maximum amount of electricity using its Z-Power and pounces on its target with full force.",
            type: "electric",
            accuracy: 100,
            power: 210
        },
        660: {
            id: 660,
            exhibitionName: "First Impression",
            name: "first-impression",
            description: "Although this move has great power, it only works the first turn the user is in battle.",
            type: "bug",
            accuracy: 100,
            power: 90
        },
        662: {
            id: 662,
            exhibitionName: "Spirit Shackle",
            name: "spirit-shackle",
            description: "The user attacks while simultaneously stitching the target’s shadow to the ground to prevent the target from escaping.",
            type: "ghost",
            accuracy: 100,
            power: 80
        },
        663: {
            id: 663,
            exhibitionName: "Darkest Lariat",
            name: "darkest-lariat",
            description: "The user swings both arms and hits the target. The target’s stat changes don’t affect this attack’s damage.",
            type: "dark",
            accuracy: 100,
            power: 85
        },
        664: {
            id: 664,
            exhibitionName: "Sparkling Aria",
            name: "sparkling-aria",
            description: "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be healed by the touch of these bubbles.",
            type: "water",
            accuracy: 100,
            power: 90
        },
        665: {
            id: 665,
            exhibitionName: "Ice Hammer",
            name: "ice-hammer",
            description: "The user swings and hits with its strong, heavy fist. It lowers the user’s Speed, however.",
            type: "ice",
            accuracy: 90,
            power: 100
        },
        667: {
            id: 667,
            exhibitionName: "High Horsepower",
            name: "high-horsepower",
            description: "The user fiercely attacks the target using its entire body.",
            type: "ground",
            accuracy: 95,
            power: 95
        },
        669: {
            id: 669,
            exhibitionName: "Solar Blade",
            name: "solar-blade",
            description: "In this two-turn attack, the user gathers light and fills a blade with the light’s energy, attacking the target on the next turn.",
            type: "grass",
            accuracy: 100,
            power: 125
        },
        670: {
            id: 670,
            exhibitionName: "Leafage",
            name: "leafage",
            description: "The user attacks by pelting the target with leaves.",
            type: "grass",
            accuracy: 100,
            power: 40
        },
        675: {
            id: 675,
            exhibitionName: "Throat Chop",
            name: "throat-chop",
            description: "The user attacks the target’s throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.",
            type: "dark",
            accuracy: 100,
            power: 80
        },
        676: {
            id: 676,
            exhibitionName: "Pollen Puff",
            name: "pollen-puff",
            description: "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
            type: "bug",
            accuracy: 100,
            power: 90
        },
        677: {
            id: 677,
            exhibitionName: "Anchor Shot",
            name: "anchor-shot",
            description: "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
            type: "steel",
            accuracy: 100,
            power: 80
        },
        679: {
            id: 679,
            exhibitionName: "Lunge",
            name: "lunge",
            description: "The user makes a lunge at the target, attacking with full force. This also lowers the target’s Attack stat.",
            type: "bug",
            accuracy: 100,
            power: 80
        },
        680: {
            id: 680,
            exhibitionName: "Fire Lash",
            name: "fire-lash",
            description: "The user strikes the target with a burning lash. This also lowers the target’s Defense stat.",
            type: "fire",
            accuracy: 100,
            power: 80
        },
        681: {
            id: 681,
            exhibitionName: "Power Trip",
            name: "power-trip",
            description: "The user boasts its strength and attacks the target. The more the user’s stats are raised, the greater the move’s power.",
            type: "dark",
            accuracy: 100,
            power: 20
        },
        682: {
            id: 682,
            exhibitionName: "Burn Up",
            name: "burn-up",
            description: "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
            type: "fire",
            accuracy: 100,
            power: 130
        },
        684: {
            id: 684,
            exhibitionName: "Smart Strike",
            name: "smart-strike",
            description: "The user stabs the target with a sharp horn. This attack never misses.",
            type: "steel",
            accuracy: 100,
            power: 70
        },
        686: {
            id: 686,
            exhibitionName: "Revelation Dance",
            name: "revelation-dance",
            description: "The user attacks the target by dancing very hard. The user’s type determines the type of this move.",
            type: "normal",
            accuracy: 100,
            power: 90
        },
        687: {
            id: 687,
            exhibitionName: "Core Enforcer",
            name: "core-enforcer",
            description: "If the Pokémon the user has inflicted damage on have already used their moves, this move eliminates the effect of the target’s Ability.",
            type: "dragon",
            accuracy: 100,
            power: 100
        },
        688: {
            id: 688,
            exhibitionName: "Trop Kick",
            name: "trop-kick",
            description: "The user lands an intense kick of tropical origins on the target. This also lowers the target’s Attack stat.",
            type: "grass",
            accuracy: 100,
            power: 70
        },
        690: {
            id: 690,
            exhibitionName: "Beak Blast",
            name: "beak-blast",
            description: "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it’s heating up its beak results in a burn.",
            type: "flying",
            accuracy: 100,
            power: 100
        },
        691: {
            id: 691,
            exhibitionName: "Clanging Scales",
            name: "clanging-scales",
            description: "The user rubs the scales on its entire body and makes a huge noise to attack the opposing Pokémon. The user’s Defense stat goes down after the attack.",
            type: "dragon",
            accuracy: 100,
            power: 110
        },
        692: {
            id: 692,
            exhibitionName: "Dragon Hammer",
            name: "dragon-hammer",
            description: "The user uses its body like a hammer to attack the target and inflict damage.",
            type: "dragon",
            accuracy: 100,
            power: 90
        },
        693: {
            id: 693,
            exhibitionName: "Brutal Swing",
            name: "brutal-swing",
            description: "The user swings its body around violently to inflict damage on everything in its vicinity.",
            type: "dark",
            accuracy: 100,
            power: 60
        },
        695: {
            id: 695,
            exhibitionName: "Sinister Arrow Raid",
            name: "sinister-arrow-raid",
            description: "The user, Decidueye, creates countless arrows using its Z-Power and shoots the target with full force.",
            type: "ghost",
            accuracy: 100,
            power: 180
        },
        696: {
            id: 696,
            exhibitionName: "Malicious Moonsault",
            name: "malicious-moonsault",
            description: "The user, Incineroar, strengthens its body using its Z-Power and crashes into the target with full force.",
            type: "dark",
            accuracy: 100,
            power: 180
        },
        697: {
            id: 697,
            exhibitionName: "Oceanic Operetta",
            name: "oceanic-operetta",
            description: "The user, Primarina, summons a massive amount of  water using its Z-Power and attacks the target with  full force.",
            type: "water",
            accuracy: 100,
            power: 195
        },
        699: {
            id: 699,
            exhibitionName: "Soul-Stealing 7-Star Strike",
            name: "soul-stealing-7-star-strike",
            description: "After obtaining Z-Power, the user, Marshadow, punches and kicks the target consecutively with full force.",
            type: "ghost",
            accuracy: 100,
            power: 195
        },
        700: {
            id: 700,
            exhibitionName: "Stoked Sparksurfer",
            name: "stoked-sparksurfer",
            description: "After obtaining Z-Power, the user, Alolan Raichu, attacks the target with full force. This move leaves the target with paralysis.",
            type: "electric",
            accuracy: 100,
            power: 175
        },
        701: {
            id: 701,
            exhibitionName: "Pulverizing Pancake",
            name: "pulverizing-pancake",
            description: "Z-Power brings out the true capabilities of the user, Snorlax. The Pokémon moves its enormous body energetically and attacks the target with full force.",
            type: "normal",
            accuracy: 100,
            power: 210
        },
        703: {
            id: 703,
            exhibitionName: "Genesis Supernova",
            name: "genesis-supernova",
            description: "After obtaining Z-Power, the user, Mew, attacks the target with full force. The terrain will be charged with psychic energy.",
            type: "psychic",
            accuracy: 100,
            power: 185
        },
        704: {
            id: 704,
            exhibitionName: "Shell Trap",
            name: "shell-trap",
            description: "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on the opposing Pokémon.",
            type: "fire",
            accuracy: 100,
            power: 150
        },
        705: {
            id: 705,
            exhibitionName: "Fleur Cannon",
            name: "fleur-cannon",
            description: "The user unleashes a strong beam. The attack’s recoil harshly lowers the user’s Sp. Atk stat.",
            type: "fairy",
            accuracy: 90,
            power: 130
        },
        706: {
            id: 706,
            exhibitionName: "Psychic Fangs",
            name: "psychic-fangs",
            description: "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
            type: "psychic",
            accuracy: 100,
            power: 85
        },
        707: {
            id: 707,
            exhibitionName: "Stomping Tantrum",
            name: "stomping-tantrum",
            description: "Driven by frustration, the user attacks the target. If the user’s previous move has failed, the power of this move doubles.",
            type: "ground",
            accuracy: 100,
            power: 75
        },
        708: {
            id: 708,
            exhibitionName: "Shadow Bone",
            name: "shadow-bone",
            description: "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target’s Defense stat.",
            type: "ghost",
            accuracy: 100,
            power: 85
        },
        709: {
            id: 709,
            exhibitionName: "Accelerock",
            name: "accelerock",
            description: "The user smashes into the target at high speed. This move always goes first.",
            type: "rock",
            accuracy: 100,
            power: 40
        },
        710: {
            id: 710,
            exhibitionName: "Liquidation",
            name: "liquidation",
            description: "The user slams into the target using a full-force blast of water. This may also lower the target’s Defense stat.",
            type: "water",
            accuracy: 100,
            power: 85
        },
        711: {
            id: 711,
            exhibitionName: "Prismatic Laser",
            name: "prismatic-laser",
            description: "The user shoots powerful lasers using the power of a prism. The user can’t move on the next turn.",
            type: "psychic",
            accuracy: 100,
            power: 160
        },
        712: {
            id: 712,
            exhibitionName: "Spectral Thief",
            name: "spectral-thief",
            description: "The user hides in the target’s shadow, steals the target’s stat boosts, and then attacks.",
            type: "ghost",
            accuracy: 100,
            power: 90
        },
        713: {
            id: 713,
            exhibitionName: "Sunsteel Strike",
            name: "sunsteel-strike",
            description: "The user slams into the target with the force of a meteor. This move can be used on the target  regardless of its Abilities.",
            type: "steel",
            accuracy: 100,
            power: 100
        },
        714: {
            id: 714,
            exhibitionName: "Moongeist Beam",
            name: "moongeist-beam",
            description: "The user emits a sinister ray to attack the target. This move can be used on the target regardless of  its Abilities.",
            type: "ghost",
            accuracy: 100,
            power: 100
        },
        716: {
            id: 716,
            exhibitionName: "Zing Zap",
            name: "zing-zap",
            description: "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
            type: "electric",
            accuracy: 100,
            power: 80
        },
        718: {
            id: 718,
            exhibitionName: "Multi-Attack",
            name: "multi-attack",
            description: "Cloaking itself in high energy, the user slams into the target. The memory held determines the move’s type.",
            type: "normal",
            accuracy: 100,
            power: 90
        },
        719: {
            id: 719,
            exhibitionName: "10,000,000 Volt Thunderbolt",
            name: "10-000-000-volt-thunderbolt",
            description: "The user, Pikachu wearing a cap, powers up a jolt of electricity using its Z-Power and unleashes it. Critical hits land more easily.",
            type: "electric",
            accuracy: 100,
            power: 195
        },
        720: {
            id: 720,
            exhibitionName: "Mind Blown",
            name: "mind-blown",
            description: "The user attacks everything around it by causing its own head to explode. This also damages the user.",
            type: "fire",
            accuracy: 100,
            power: 150
        },
        721: {
            id: 721,
            exhibitionName: "Plasma Fists",
            name: "plasma-fists",
            description: "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves.",
            type: "electric",
            accuracy: 100,
            power: 100
        },
        722: {
            id: 722,
            exhibitionName: "Photon Geyser",
            name: "photon-geyser",
            description: "The user attacks a target with a pillar of light. This move inflicts Attack or Sp. Atk damage—whichever stat is higher for the user.",
            type: "psychic",
            accuracy: 100,
            power: 100
        },
        723: {
            id: 723,
            exhibitionName: "Light That Burns the Sky",
            name: "light-that-burns-the-sky",
            description: "This attack inflicts Attack or Sp. Atk damage— whichever stat is higher for the user, Necrozma.  This move ignores the target’s Ability.",
            type: "psychic",
            accuracy: 100,
            power: 200
        },
        724: {
            id: 724,
            exhibitionName: "Searing Sunraze Smash",
            name: "searing-sunraze-smash",
            description: "After obtaining Z-Power, the user, Solgaleo, attacks the target with full force. This move can ignore the effect of the target’s Ability.",
            type: "steel",
            accuracy: 100,
            power: 200
        },
        725: {
            id: 725,
            exhibitionName: "Menacing Moonraze Maelstrom",
            name: "menacing-moonraze-maelstrom",
            description: "After obtaining Z-Power, the user, Lunala, attacks the target with full force. This move can ignore the effect of the target’s Ability.",
            type: "ghost",
            accuracy: 100,
            power: 200
        },
        726: {
            id: 726,
            exhibitionName: "Let’s Snuggle Forever",
            name: "lets-snuggle-forever",
            description: "After obtaining Z-Power, the user, Mimikyu, punches the target with full force.",
            type: "fairy",
            accuracy: 100,
            power: 190
        },
        727: {
            id: 727,
            exhibitionName: "Splintered Stormshards",
            name: "splintered-stormshards",
            description: "After obtaining Z-Power, the user, Lycanroc, attacks the target with full force. This move negates the effect on the battlefield.",
            type: "rock",
            accuracy: 100,
            power: 190
        },
        728: {
            id: 728,
            exhibitionName: "Clangorous Soulblaze",
            name: "clangorous-soulblaze",
            description: "After obtaining Z-Power, the user, Kommo-o, attacks the opposing Pokémon with full force. This move boosts the user’s stats.",
            type: "dragon",
            accuracy: 100,
            power: 185
        },
        10001: {
            id: 10001,
            exhibitionName: "Shadow Rush",
            name: "shadow-rush",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 55
        },
        10002: {
            id: 10002,
            exhibitionName: "Shadow Blast",
            name: "shadow-blast",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 80
        },
        10003: {
            id: 10003,
            exhibitionName: "Shadow Blitz",
            name: "shadow-blitz",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 40
        },
        10004: {
            id: 10004,
            exhibitionName: "Shadow Bolt",
            name: "shadow-bolt",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 75
        },
        10005: {
            id: 10005,
            exhibitionName: "Shadow Break",
            name: "shadow-break",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 75
        },
        10006: {
            id: 10006,
            exhibitionName: "Shadow Chill",
            name: "shadow-chill",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 75
        },
        10007: {
            id: 10007,
            exhibitionName: "Shadow End",
            name: "shadow-end",
            description: "",
            type: "shadow",
            accuracy: 60,
            power: 120
        },
        10008: {
            id: 10008,
            exhibitionName: "Shadow Fire",
            name: "shadow-fire",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 75
        },
        10009: {
            id: 10009,
            exhibitionName: "Shadow Rave",
            name: "shadow-rave",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 70
        },
        10010: {
            id: 10010,
            exhibitionName: "Shadow Storm",
            name: "shadow-storm",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 95
        },
        10011: {
            id: 10011,
            exhibitionName: "Shadow Wave",
            name: "shadow-wave",
            description: "",
            type: "shadow",
            accuracy: 100,
            power: 50
        },
    }
