import {RootStore} from "./RootStore";
import {IExploreItem} from "../models/IExploreItem";
import {action, computed, observable} from "mobx";
import {exploreItems} from "../data/explore";
import {FilterExploreTypes} from "../models/conditional-types-definitions";

export interface IExploreStore {
    allExploreItems: Record<number, IExploreItem>;
    list: IExploreItem[];
    filter: FilterExploreTypes;
    filteredList: IExploreItem[];


    setFilter(value: "battle" | "mission" | "event"): void;

}

export class ExploreStore implements IExploreStore {

    @observable
    allExploreItems: Record<number, IExploreItem> = exploreItems;

    @observable
    filter: FilterExploreTypes = "battle";

    constructor(public root: RootStore) {
    }

    @action
    setFilter(filter: FilterExploreTypes){
        this.filter = filter;
    }


    @computed
    get list(): IExploreItem[] {
        const allExploreItemsAsList: IExploreItem[] = [];
        for (let i = 1; i <= 50; i++) {
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


}
