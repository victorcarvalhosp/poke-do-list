import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {IPokemon} from "../models/Pokemon";
import {Task} from "../models/Task";
import {BattleAction, IBattleAction} from "../models/BattleAction";
import {IMove} from "../models/IMove";
import {pokemonVarieties} from "../data/pokemon-varieties";
import {addDelay} from "../utils/delay";
import {moves} from "../data/moves";
import {typeChart} from "../data/type-chart";
import {getRandomInt, getRandomNumber} from "../utils/utils";

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
        if (this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            const allActions: IBattleAction[] = [...this.player1TurnAction, ...this.player2TurnAction];
            for (let action of allActions) {
                const result = await this.runAction(action);
                if (result != "") {
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
            this.attackMessage = `${action.player === 1 ? 'My ' : 'Enemy '}` + pokemonVarieties[attacker.variety].name + ' used ' + moves[action.move].name + " on " + pokemonVarieties[defender.variety].name;
            await this.runAnimation(action.player, action.pos, action.opponentPos);
            const damage: number = this.calculateDamage(attacker, defender, moves[action.move]);
            console.log(this.attackMessage);
            defender.actualHp -= damage;
            if (defender.actualHp <= 0) {
                defender.actualHp = 0;
                // this.player2SelectedPokemons.splice(action.opponentPos, 1);
                this.getNextAvailableAttackPosition(defenderTeam);
                return new Promise(resolve => {
                    resolve(this.verifyIfWinner());
                });
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
        this.player1TurnAction.forEach((action, i) => {
            if (!this.player2SelectedPokemons[action.opponentPos]) {
                action.opponentPos = 0;
            }
            action.pos = i;
        })
    }

    private verifyIfWinner(): "" | "win" | "lose" | "draw" {
        if (this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            this.battleResult = "";
            console.log('NEXT TURN');
            return "";
        } else if (!this.player1StillHaveLivePokemon() && this.player2StillHaveLivePokemon()) {
            console.log('YOU LOSE');
            this.battleResult = "lose";
            return "lose";
        } else if (this.player1StillHaveLivePokemon() && !this.player2StillHaveLivePokemon()) {
            console.log('YOU WIN');
            this.battleResult = "win";
            return "win"
        } else if (!this.player1StillHaveLivePokemon() && !this.player2StillHaveLivePokemon()) {
            console.log('DRAW');
            this.battleResult = "draw";
            return "draw";
        }

        return "";
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
        const modifier = getRandomNumber(0.85, 1) * sameTypeAttackBonus * typeModifier;


        const damage = Math.floor(((((2 * level / 5 + 2) * power * A / D) / 50) + 2) * modifier);
        console.log(damage);
        return damage;
    }

    private calculateTypeModifier(attackType: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type1: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow", type2?: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow") {
        const typeModifier = 1 * typeChart[attackType][type1] * (type2 ? 1 * typeChart[attackType][type2] : 1)
        console.log(attackType + " vs " + type1 + "/" + type2 + "===" + typeModifier);
        return typeModifier;
    }
}
