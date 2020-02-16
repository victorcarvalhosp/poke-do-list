import {CounterStore, ICounterStore} from "./CounterStore";
import {IUserStore, UserStore} from "./UserStore";
import {IUIStore, UIStore} from "./UiStore";
import {ITaskStore, TaskStore} from "./TaskStore";
import {IPokemonStore, PokemonStore} from "./PokemonStore";
import {IProjectStore, ProjectStore} from "./ProjectStore";
import {BattleStore, IBattleStore} from "./BattleStore";
import BattlePage from "../pages/Battle/Battle";

export interface IRootStore {
    counterStore: ICounterStore;
    userStore: IUserStore;
    uiStore: IUIStore;
    taskStore: ITaskStore;
    pokemonStore: IPokemonStore;
    projectStore: IProjectStore;
    battleStore: IBattleStore;
}

export class RootStore implements IRootStore{
    counterStore: ICounterStore;
    userStore: IUserStore;
    uiStore: IUIStore;
    taskStore: ITaskStore;
    pokemonStore: IPokemonStore;
    projectStore: IProjectStore;
    battleStore: IBattleStore;

    constructor(){
        this.counterStore = new CounterStore(this);
        this.userStore = new UserStore(this);
        this.uiStore = new UIStore(this);
        this.taskStore = new TaskStore(this);
        this.pokemonStore = new PokemonStore(this);
        this.projectStore = new ProjectStore(this);
        this.battleStore = new BattleStore(this);
    }
}
