import {observable, action, computed} from 'mobx'
import {RootStore} from "./RootStore";
import {IPokemon} from "../models/Pokemon";
import {Task} from "../models/Task";
import {BattleAction, IBattleAction} from "../models/BattleAction";
import {IMove} from "../models/IMove";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {addDelay, delay} from "../utils/delay";

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
    player1TurnAction: IBattleAction[] = [new BattleAction(1, 0), new BattleAction(1, 1), new BattleAction(1, 2)];
    @observable
    player2TurnAction: IBattleAction[] = [new BattleAction(2, 0), new BattleAction(2, 1), new BattleAction(2, 2)];
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
                let opPos = action.opponentPos;
                if (action.player === 1) {
                    const result = await this.runPlayer1Action(action, opPos);
                    if (result != "") {
                        break;
                    }
                } else {
                    const result = await this.runPlayer2Action(action, opPos);
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

    private async runPlayer2Action(action: IBattleAction, opPos: number): Promise<"" | "win" | "lose" | "draw"> {
        if (this.player2SelectedPokemons[action.pos]) {
            if (!this.player1SelectedPokemons[action.opponentPos]) {
                opPos = 0;
            }
            await this.runAnimation(2, action.pos, action.opponentPos);
            this.player1SelectedPokemons[opPos].actualHp -= 5;
            console.log('ENEMY ' + pokemonVarieties[this.player2SelectedPokemons[action.pos].variety].name + ' ATACKED ' + pokemonVarieties[this.player1SelectedPokemons[action.opponentPos].variety].name);
            if (this.player1SelectedPokemons[opPos].actualHp <= 0) {
                this.player1SelectedPokemons.splice(opPos, 1);
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

    private async runPlayer1Action(action: IBattleAction, opPos: number): Promise<"" | "win" | "lose" | "draw"> {

        if (this.player1SelectedPokemons[action.pos]) {
            if (!this.player2SelectedPokemons[action.opponentPos]) {
                opPos = 0;
            }
            console.log('MY ' + pokemonVarieties[this.player1SelectedPokemons[action.pos].variety].name + ' ATACKED ' + pokemonVarieties[this.player2SelectedPokemons[action.opponentPos].variety].name);
            await this.runAnimation(1, action.pos, action.opponentPos);
            this.player2SelectedPokemons[opPos].actualHp -= 5;
            if (this.player2SelectedPokemons[opPos].actualHp <= 0) {
                this.player2SelectedPokemons.splice(opPos, 1);
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
        if(player === 1) {
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
}
