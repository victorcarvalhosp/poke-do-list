import {observable, action, computed} from 'mobx'
import {RootStore} from "./RootStore";
import {IPokemon} from "../models/Pokemon";
import {Task} from "../models/Task";
import {BattleAction, IBattleAction} from "../models/BattleAction";
import {IMove} from "../models/IMove";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {addDelay, delay} from "../utils/delay";
import {move} from "ionicons/icons";
import {moves} from "../data/moves";
import {typeChart} from "../data/type-chart";
import {getRandomInt, getRandomNumber} from "../utils/utils";
import {act} from "react-dom/test-utils";

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

    attackMessage: string;

    // runAnimation: {from: number, to: number};

    runTurn(): void;

    setActivePos(i: number): void;

    setOpponentsSelectPos(i: number): void;
}

export class BattleStore implements IBattleStore {
    constructor(public root: RootStore) {
    }

    @observable
    player1SelectedPokemons: IPokemon[] = [this.root.pokemonStore.generateRandomPokemon(new Task()), this.root.pokemonStore.generateRandomPokemon(new Task()), this.root.pokemonStore.generateRandomPokemon(new Task())];
    @observable
    player2SelectedPokemons: IPokemon[] = [this.root.pokemonStore.generateRandomPokemon(new Task()), this.root.pokemonStore.generateRandomPokemon(new Task()), this.root.pokemonStore.generateRandomPokemon(new Task())];
    @observable
    player1TurnAction: IBattleAction[] = [new BattleAction(1, 0, this.player1SelectedPokemons[0].moves[0]), new BattleAction(1, 1, this.player1SelectedPokemons[1].moves[0]), new BattleAction(1, 2, this.player1SelectedPokemons[2].moves[0])];
    @observable
    player2TurnAction: IBattleAction[] = [new BattleAction(2, 0, this.player2SelectedPokemons[0].moves[0]), new BattleAction(2, 1, this.player2SelectedPokemons[1].moves[0]), new BattleAction(2, 2, this.player2SelectedPokemons[2].moves[0])];
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
    attackMessage: string = "";

    @action
    setActivePos(i: number) {
        this.activePos = i;
    }

    @action
    setOpponentsSelectPos(i: number) {
        this.opponentsSelectPos = i;
    }


    @action
    async runTurn() {
        console.log('attack');
        if (this.player1SelectedPokemons.length > 0 && this.player2SelectedPokemons.length > 0) {
            const allActions: IBattleAction[] = [...this.player1TurnAction, ...this.player2TurnAction];
            for (let action of allActions) {
                if (action.player === 1) {
                    const result = await this.runPlayer1Action(action);
                    if (result != "") {
                        break;
                    }
                } else {
                    const result = await this.runPlayer2Action(action);
                    if (result != "") {
                        break;
                    }
                }
            }
            this.refreshTurnAction();
        }
        // this.player1TurnAction = [];
        // this.player2TurnAction = [];
    }

    private async runPlayer2Action(action: IBattleAction): Promise<"" | "win" | "lose" | "draw"> {
        if (this.player2SelectedPokemons[action.pos]) {
            if (!this.player1SelectedPokemons[action.opponentPos]) {
                action.opponentPos = 0;
            }
            await this.runAnimation(2, action.pos, action.opponentPos);
            const damage = this.calculateDamage(this.player2SelectedPokemons[action.pos], this.player1SelectedPokemons[action.opponentPos], moves[action.move]);
            this.player1SelectedPokemons[action.opponentPos].actualHp -= damage;
            this.attackMessage = 'Enemy ' + pokemonVarieties[this.player2SelectedPokemons[action.pos].variety].name + ' used ' + moves[action.move].name + " on my " + pokemonVarieties[this.player1SelectedPokemons[action.opponentPos].variety].name;
            console.log(this.attackMessage);
            if (this.player1SelectedPokemons[action.opponentPos].actualHp <= 0) {
                this.player1SelectedPokemons.splice(action.opponentPos, 1);
                action.opponentPos = 0;
                return new Promise(resolve => {
                    resolve(this.verifyIfWinner());
                });
            }
        }
        return new Promise(resolve => {
            resolve("");
        });
    }

    private async runPlayer1Action(action: IBattleAction): Promise<"" | "win" | "lose" | "draw"> {
        console.log("MOVE IDDD" + action.move);
        if (this.player1SelectedPokemons[action.pos]) {
            if (!this.player2SelectedPokemons[action.opponentPos]) {
                action.opponentPos = 0;
            }
            await this.runAnimation(1, action.pos, action.opponentPos);
            const damage: number = this.calculateDamage(this.player1SelectedPokemons[action.pos], this.player2SelectedPokemons[action.opponentPos], moves[action.move]);
            this.attackMessage = 'My ' + pokemonVarieties[this.player1SelectedPokemons[action.pos].variety].name + ' used ' + moves[action.move].name + " on " + pokemonVarieties[this.player2SelectedPokemons[action.opponentPos].variety].name;
            console.log(this.attackMessage);
            this.player2SelectedPokemons[action.opponentPos].actualHp -= damage;
            if (this.player2SelectedPokemons[action.opponentPos].actualHp <= 0) {
                this.player2SelectedPokemons.splice(action.opponentPos, 1);
                action.opponentPos = 0;
                return new Promise(resolve => {
                    resolve(this.verifyIfWinner());
                });
            }
        }
        return new Promise(resolve => {
            resolve("");
        });
    }

    private refreshTurnAction() {
        this.player1TurnAction.forEach((action, i) => {
            if (!this.player2SelectedPokemons[action.opponentPos]) {
                action.opponentPos = 0;
            }
            action.pos = i;
        })
    }

    private verifyIfWinner(): "" | "win" | "lose" | "draw" {
        if (this.player1SelectedPokemons.length === 0 && this.player2SelectedPokemons.length > 0) {
            console.log('YOU LOSE');
            this.battleResult = "lose";
            return "lose";
        } else if (this.player2SelectedPokemons.length === 0 && this.player1SelectedPokemons.length > 0) {
            console.log('YOU WIN');
            this.battleResult = "win";
            return "win"
        } else if (this.player1SelectedPokemons.length === 0 && this.player2SelectedPokemons.length === 0) {
            console.log('DRAW');
            this.battleResult = "draw";
            return "draw";
        } else {
            this.battleResult = "";
            console.log('NEXT TURN');
            return "";
        }
    }

    private async runAnimation(player: number, pos: number, opponentPos: number) {
        this.animationRunning = true;
        if (player === 1) {
            await addDelay(1000);
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.add("class", `animation-atk-player1-enemy-pos-${opponentPos}`);
            await addDelay(1000);
            // @ts-ignore
            document.getElementById(`pkmn-p1-${pos}`).classList.remove(`animation-atk-player1-enemy-pos-${opponentPos}`);
        } else {
            await addDelay(1000);
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.add("class", `animation-atk-player2-enemy-pos-${opponentPos}`);
            await addDelay(1000);
            // @ts-ignore
            document.getElementById(`pkmn-p2-${pos}`).classList.remove(`animation-atk-player2-enemy-pos-${opponentPos}`);
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
        const modifier = getRandomNumber(0.85, 1) * sameTypeAttackBonus*typeModifier;


        const damage = Math.floor(((((2*level/5+2)*power * A/D)/50)+2) * modifier);
        console.log(damage);
        return damage;
    }

    private calculateTypeModifier(attackType: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type1: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type2?: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow") {
        const typeModifier = 1 * typeChart[attackType][type1] * (type2 ? 1 * typeChart[attackType][type2] : 1)
        console.log(attackType + " vs " + type1 + "/" + type2 + "===" + typeModifier);
        return typeModifier;
    }
}
