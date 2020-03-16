import {RootStore} from "./RootStore";
import {ExploreItem, IExploreItem} from "../models/IExploreItem";
import {action, computed, observable} from "mobx";
import {exploreAwards, exploreItems} from "../data/explore";
import {FilterExploreTypes} from "../models/conditional-types-definitions";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IExploreAwardPokemon} from "../models/IExploreAward";

export interface IExploreStore {
    selected: IExploreItem;
    allExploreItems: Record<number, IExploreItem>;
    list: IExploreItem[];
    filter: FilterExploreTypes;
    filteredList: IExploreItem[];
    firstTimeCompleted: boolean;

    setFilter(value: "battle" | "mission" | "event"): void;

    setSelected(exploreItem: IExploreItem): void;

    setExploreItemDone(): void;

    exploreItemAlreadyCompleted(id: number): boolean;
}

export class ExploreStore implements IExploreStore {

    @observable
    selected: IExploreItem = new ExploreItem();

    @observable
    allExploreItems: Record<number, IExploreItem> = exploreItems;

    @observable
    filter: FilterExploreTypes = "battle";

    constructor(public root: RootStore) {
    }

    @action
    setFilter(filter: FilterExploreTypes) {
        this.filter = filter;
    }


    @computed
    get list(): IExploreItem[] {
        const allExploreItemsAsList: IExploreItem[] = [];
        for (let i = 1; i <= 100; i++) {
            if (this.allExploreItems[i]) {
                allExploreItemsAsList.push(this.allExploreItems[i]);
            }
        }
        return allExploreItemsAsList;
    }

    @computed
    get filteredList(): IExploreItem[] {
        return this.list.filter(item => item.type === this.filter);
    }

    @computed
    get firstTimeCompleted(): boolean {
        return this.root.userStore.user.exploreItemsCompleted.filter(id => id === this.selected.id).length === 0;
    }

    @action
    exploreItemAlreadyCompleted(exploreItemId: number): boolean{
        console.log('EXPLORE ITEM ID ' + exploreItemId);
       return this.root.userStore.user.exploreItemsCompleted.filter(id => id === exploreItemId).length > 0;
    }


    @action
    setSelected(exploreItem: IExploreItem) {
        this.selected = exploreItem;
    }

    @action
    async setExploreItemDone() {
        const allAwards = [...this.selected.awards];
        if (this.firstTimeCompleted) {
            allAwards.push(...this.selected.firstTimeAwards);
        }
        for (let award of allAwards) {
            if (exploreAwards[award].type === "level") {
                await this.root.userStore.updatePowerUps(this.root.userStore.user.powerUps+1);
            } else if (exploreAwards[award].type === "pokemon") {
                await this.root.pokemonStore.caughtPokemon(this.root.pokemonStore.generatePokemonWithRandomAttributes((exploreAwards[award] as IExploreAwardPokemon).pokemonId || 25, this.selected.name))
            }
        }
        await this.updateExploreItemsCompleted();
        this.root.uiStore.showToast("Awards received!")
        this.root.battleStore.clearPlayer1SelectedPokemons();
    }


    private async updateExploreItemsCompleted() {
        const exploreItems = [...this.root.userStore.user.exploreItemsCompleted];
        exploreItems.push(this.selected.id);
        if (this.firstTimeCompleted) {
            await FirebaseApi.updateExploreItems(this.root.userStore.user.uid, exploreItems);
        }
    }
}
