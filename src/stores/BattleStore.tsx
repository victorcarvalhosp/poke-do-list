import {action, computed, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {IPokemon, Pokemon} from "../models/Pokemon";
import {BattleAction, IBattleAction} from "../models/BattleAction";
import {IMove} from "../models/IMove";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {addDelay} from "../utils/delay";
import {moves} from "../data/moves";
import {typeChart} from "../data/type-chart";
import {getRandomInt, getRandomNumber} from "../utils/utils";
import {ITrainerInfo} from "../models/IExploreItem";

type Effectiveness = "average" | "no-damage" | "not-effective" | "super-effective";

interface IMoveMessages {
    text: string;
    damage: number;
    effectiveness: Effectiveness;
    critical: boolean;
    moveName: string;
    pos: number;
    player: 1 | 2;
}

class MoveMessages implements IMoveMessages {
    text: string;
    @observable
    damage: number;
    @observable
    effectiveness: Effectiveness;
    critical: boolean;
    @observable
    moveName: string;
    pos: number;
    player: 1 | 2;

    constructor(text: string, damage: number,
                effectiveness: Effectiveness,
                critical: boolean,
                moveName: string,
                pos: number,
                player: 1 | 2) {
        this.text = text;
        this.damage = damage;
        this.effectiveness = effectiveness;
        this.critical = critical;
        this.moveName = moveName;
        this.pos = pos;
        this.player = player;
    }
}

export interface IBattleStore {
    player1SelectedPokemons: IPokemon[];
    player2SelectedPokemons: IPokemon[];
    player1TurnAction: IBattleAction[];
    player2TurnAction: IBattleAction[];
    player1TurnReady: boolean;
    player2TurnReady: boolean;
    activePos: number;
    opponentsSelectPos: number;
    battleResult: "" | "win" | "lose" | "draw";
    animationRunning: boolean;
    animationMoveRunning: boolean;
    opponentInfo: ITrainerInfo;
    attackMessages: IMoveMessages;
    myPokemonListWithMaxLevel: IPokemon[];
    battleIsHappening: boolean;

    // runAnimation: {from: number, to: number};
    clearPlayer1SelectedPokemons(): void;

    initBattle(): void;

    runTurn(): void;

    setActivePos(i: number): void;

    setOpponent(trainer: ITrainerInfo): void;

    setOpponentsSelectPos(i: number): void;

    setPokemonPos(pos: number, pkmn: IPokemon): void;
}

export class BattleStore implements IBattleStore {
    constructor(public root: RootStore) {
    }

    @observable
    player1SelectedPokemons: IPokemon[] = [new Pokemon(), new Pokemon(), new Pokemon()];
    @observable
    player2SelectedPokemons: IPokemon[] = [new Pokemon(), new Pokemon(), new Pokemon()];
    @observable
    player1TurnAction: IBattleAction[] = [];
    @observable
    player2TurnAction: IBattleAction[] = [];
    @observable
    player1TurnReady: boolean = false;
    @observable
    player2TurnReady: boolean = false;
    @observable
    activePos: number = 0;
    @observable
    opponentsSelectPos: number = -1;
    @observable
    battleResult: "" | "win" | "lose" | "draw" = "";
    @observable
    animationRunning: boolean = false;
    @observable
    animationMoveRunning: boolean = false;
    @observable
    attackMessages: IMoveMessages = new MoveMessages("", 0, "average", false, "", 0, 1);
    @observable
    opponentInfo: ITrainerInfo = {sprite: '', name: '', pokemon: []};

    @action
    initBattle() {
        for (let pkmn of this.player1SelectedPokemons) {
            pkmn.actualHp = pkmn.hp;
        }
        for (let pkmn of this.player2SelectedPokemons) {
            pkmn.actualHp = pkmn.hp;
            this.root.pokemonStore.registerPokedex(pkmn.variety, false);
        }
        this.activePos = 0;
        const initOpponentPosSelected = this.player2SelectedPokemons[1].actualHp > 0 ? 1 : 0;
        this.battleResult = "";
        //FIRST opponentPos is 0 because of weird bug where line doesn't load properly on the first turn - debug this if needed later
        this.player1TurnAction = [new BattleAction(1, 0, 1, this.player1SelectedPokemons[0].moves[0]), new BattleAction(1, 1, initOpponentPosSelected, this.player1SelectedPokemons[1].moves[0]), new BattleAction(1, 2, initOpponentPosSelected, this.player1SelectedPokemons[2].moves[0])];
        this.player2TurnAction = [new BattleAction(2, 0, 0, this.player2SelectedPokemons[0].moves[0]), new BattleAction(2, 1, 0, this.player2SelectedPokemons[1].moves[0]), new BattleAction(2, 2, 0, this.player2SelectedPokemons[2].moves[0])];
    }

    @action
    setActivePos(i: number) {
        this.activePos = i;
    }

    @action
    setOpponentsSelectPos(i: number) {
        this.opponentsSelectPos = i;
    }

    @action
    setOpponent(trainer: ITrainerInfo) {
        this.opponentInfo = trainer;
        this.player2SelectedPokemons[0] = this.root.pokemonStore.generatePokemonWithRandomAttributes(this.opponentInfo.pokemon[0].variety, "", this.opponentInfo.pokemon[0]);
        this.player2SelectedPokemons[1] = this.root.pokemonStore.generatePokemonWithRandomAttributes(this.opponentInfo.pokemon[1].variety, "", this.opponentInfo.pokemon[1]);
        this.player2SelectedPokemons[2] = this.root.pokemonStore.generatePokemonWithRandomAttributes(this.opponentInfo.pokemon[2].variety, "", this.opponentInfo.pokemon[2]);
    }


    @action
    async runTurn() {
        console.log('attack');
        if (this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            const allActions: IBattleAction[] = [...this.player1TurnAction, ...this.player2TurnAction];
            const allActionsOrderedBySpeed: IBattleAction[] = allActions.sort((a, b) => ((a.player === 1 ? this.player1SelectedPokemons[a.pos].speed : this.player2SelectedPokemons[a.pos].speed) < (b.player === 1 ? this.player1SelectedPokemons[b.pos].speed : this.player2SelectedPokemons[b.pos].speed)) ? 1 : -1);
            console.log(allActionsOrderedBySpeed);
            for (let action of allActionsOrderedBySpeed) {
                const result = await this.runAction(action);
                if (result !== "") {
                    break;
                }
            }
            this.refreshTurnAction();
        }
        // this.player1TurnAction = [];
        // this.player2TurnAction = [];
    }

    private async runAction(action: IBattleAction): Promise<"" | "win" | "lose" | "draw"> {
        console.log("MOVE IDDD" + action.move);
        this.attackMessages.player = action.player;
        this.attackMessages.pos = action.pos;
        const attackerTeam = action.player === 1 ? this.player1SelectedPokemons : this.player2SelectedPokemons;
        const defenderTeam = action.player === 1 ? this.player2SelectedPokemons : this.player1SelectedPokemons;

        if (action.player === 2) {
            //RANDOM ATTACK FOR ENEMY
            const randomPos = getRandomInt(0, 2);
            if (defenderTeam[randomPos]) {
                action.opponentPos = randomPos;
            } else {
                action.opponentPos = this.getNextAvailableAttackPosition(defenderTeam);
            }
        }

        const attacker = attackerTeam[action.pos];
        let defender = defenderTeam[action.opponentPos];


        if (defender.actualHp <= 0) {
            //RANDOM OPPONENT ATTACK
            console.log('CHANGE ATTACK POSITION');
            const nextPos = this.getNextAvailableAttackPosition(defenderTeam);
            action.opponentPos = nextPos;
            defender = defenderTeam[action.opponentPos];
        }

        if (attacker && attacker.actualHp > 0) {
            this.attackMessages.text = `${action.player === 1 ? 'My ' : 'Enemy '}` + pokemonVarieties[attacker.variety].name + ' used ' + moves[action.move].name + " on " + pokemonVarieties[defender.variety].name;
            const damage: number = this.calculateDamage(attacker, defender, moves[action.move]);
            await this.runAnimation(action.player, action.pos, action.opponentPos, moves[action.move], defender, damage);
            console.log(this.attackMessages.text);
            if (defender.actualHp <= 0) {
                defender.actualHp = 0;
                // this.player2SelectedPokemons.splice(action.opponentPos, 1);
                this.getNextAvailableAttackPosition(defenderTeam);
                return this.verifyIfWinner();
            }
        }
        return new Promise(resolve => {
            resolve("");
        });
    }

    private getNextAvailableAttackPosition(defenderTeam: IPokemon[]): number {
        return defenderTeam[0] && defenderTeam[0].actualHp > 0 ? 0 : defenderTeam[1] && defenderTeam[1].actualHp > 0 ? 1 : 2;
    }

    private refreshTurnAction() {
        this.setActivePos(this.getNextAvailableAttackPosition(this.player1SelectedPokemons));
        this.player1TurnAction.forEach((action, i) => {
            action.pos = i;
            if (this.player2SelectedPokemons[action.opponentPos].actualHp <= 0) {
                action.opponentPos = this.getNextAvailableAttackPosition(this.player2SelectedPokemons);
            }
        })
    }

    private async verifyIfWinner(): Promise<"" | "win" | "lose" | "draw"> {
        let result: "" | "win" | "lose" | "draw" = "";
        if (this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            this.battleResult = "";
            console.log('NEXT TURN');
            result = "";
        } else if (!this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            console.log('YOU LOSE');
            this.battleResult = "lose";
            result = "lose";
        } else if (this.player1StillHaveLivePokemon() && !this.player2StillHaveLivePokemon()) {
            console.log('YOU WIN');
            this.battleResult = "win";
            result = "win"
        } else if (!this.player1StillHaveLivePokemon() && !this.player2StillHaveLivePokemon()) {
            console.log('DRAW');
            this.battleResult = "draw";
            result = "draw";
        }

        return new Promise(resolve => {
            resolve(result);
        });
    }

    private player1StillHaveLivePokemon() {
        return !this.isPokemonPosDead(1, 0) || !this.isPokemonPosDead(1, 1) || !this.isPokemonPosDead(1, 2);
    }

    private player2StillHaveLivePokemon() {
        return !this.isPokemonPosDead(2, 0) || !this.isPokemonPosDead(2, 1) || !this.isPokemonPosDead(2, 2);
    }

    private isPokemonPosDead(player: 1 | 2, pos: number) {
        const team = player === 1 ? this.player1SelectedPokemons : this.player2SelectedPokemons;
        return (!team[pos] || (team[pos] && team[pos].actualHp <= 0));
    }

    private async runAnimation(player: number, pos: number, opponentPos: number, move: IMove, defender: IPokemon, damage: number) {
        this.animationRunning = true;
        if (player === 1) {
            await addDelay(1000);
            this.attackMessages.moveName = move.name;
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.add("class", `animation-atk-player1`);
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.add("class", `enemy-pos-${opponentPos}`);
            if (this.player2SelectedPokemons[opponentPos].gigantamax) {
                // @ts-ignore
                document.getElementById(`pkmn-p1-${pos}`).classList.add("class", `animation-atk-gigantamax`);
            }
            await addDelay(1000);
            this.animationMoveRunning = true;
            defender.actualHp -= damage;
            await addDelay(1000);
            this.animationMoveRunning = false;
            this.attackMessages.moveName = "";
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.remove(`animation-atk-player1`);
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.remove(`enemy-pos-${opponentPos}`);
            // @ts-ignore
            if (this.player2SelectedPokemons[opponentPos].gigantamax) {
                // @ts-ignore
                document.getElementById(`pkmn-p1-${pos}`).classList.remove(`animation-atk-gigantamax`);
            }
        } else {
            await addDelay(1000);
            this.attackMessages.moveName = move.exhibitionName;
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.add("class", `animation-atk-player2`);
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.add("class", `enemy-pos-${opponentPos}`);
            if (this.player2SelectedPokemons[pos].gigantamax) {
                // @ts-ignore
                document.getElementById(`pkmn-p2-${pos}`).classList.add("class", `animation-atk-gigantamax`);
            }
            await addDelay(1000);
            this.animationMoveRunning = true;
            defender.actualHp -= damage;
            await addDelay(1000);
            this.animationMoveRunning = false;
            this.attackMessages.moveName = "";
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.remove(`animation-atk-player2`);
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.remove(`enemy-pos-${opponentPos}`);
            if (this.player2SelectedPokemons[pos].gigantamax) {
                // @ts-ignore
                document.getElementById(`pkmn-p2-${pos}`).classList.remove(`animation-atk-gigantamax`);
            }
        }
        this.animationRunning = false;

        // pkmn-p1-${i}
    }


    private calculateDamage(attacker: IPokemon, defender: IPokemon, move: IMove) {
        //Simplified damage formula - used this one as base: https://bulbapedia.bulbagarden.net/wiki/Damage#Damage_formula
        const level = attacker.level;
        const power = move.power;
        const A = attacker.atk;
        const D = defender.def;
        const sameTypeAttackBonus = move.type === pokemonVarieties[attacker.variety].type1 || move.type === pokemonVarieties[attacker.variety].type2 ? 1.5 : 1;
        const typeModifier: number = this.calculateTypeModifier(move.type, pokemonVarieties[defender.variety].type1, pokemonVarieties[defender.variety].type2);
        const effectiveness: Effectiveness = typeModifier === 0 ? "no-damage" : (typeModifier > 1 ? "super-effective" : (typeModifier < 1 ? "not-effective" : "average"));
        this.attackMessages.effectiveness = effectiveness;

        const critical: number = getRandomNumber(1, 24) === 1 ? 1.5 : 1;
        critical > 1 ? this.attackMessages.critical = true : this.attackMessages.critical = false;
        const modifier = getRandomNumber(0.85, 1) * sameTypeAttackBonus * typeModifier * critical;

        const damage = Math.floor(((((2 * level / 5 + 2) * power * A / D) / 50) + 2) * modifier);
        console.log(damage);
        this.attackMessages.damage = damage;
        return damage;
    }

    private calculateTypeModifier(attackType: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type1: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type2?: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow") {
        const typeModifier = 1 * typeChart[attackType][type1] * (type2 ? 1 * typeChart[attackType][type2] : 1)
        console.log(attackType + " vs " + type1 + "/" + type2 + "===" + typeModifier);
        return typeModifier;
    }

    @action
    setPokemonPos(pos: number, pkmn: IPokemon) {
        this.player1SelectedPokemons[pos] = pkmn;
    };


    @computed
    get myPokemonListWithMaxLevel() {
        return this.opponentInfo && this.opponentInfo.maxLevel ? this.root.pokemonStore.listOrdered.filter(pkmn => pkmn.level <= (this.opponentInfo.maxLevel || 100)) : this.root.pokemonStore.listOrdered;
    }

    @action
    clearPlayer1SelectedPokemons() {
        this.player1SelectedPokemons = [new Pokemon(), new Pokemon(), new Pokemon()];
    }

    @computed
    get battleIsHappening() {
        return (this.player1SelectedPokemons[0].id !== '' && this.player1SelectedPokemons[1].id !== '' && this.player1SelectedPokemons[2].id !== '');
    }
}
