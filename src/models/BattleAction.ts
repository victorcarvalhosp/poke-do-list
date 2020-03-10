import {ITask} from "./Task";
import firebase from "firebase";
import {IMove} from "./IMove";
import {observable} from "mobx";

export interface IBattleAction {
  pos: number;
  opponentPos: number;
  move: number;
  player: 1|2;
}

export class BattleAction implements IBattleAction{
  @observable
  pos: number;
  @observable
  opponentPos: number;
  @observable
  move: number;

  player: 1|2;

  constructor(player: 1|2, pos: number, opponentPos: number, move: number) {
    this.pos = pos;
    this.opponentPos = opponentPos;
    this.move = move;
    this.player = player;
  }

}
