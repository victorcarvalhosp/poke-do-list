import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import React, {useEffect} from "react";
import {IonList, IonSpinner} from "@ionic/react";
import Item from "../Item";
import ListPage from "../../pages/List";
import {ITask} from "../../models/Task";
import Loading from "../loading/Loading";
import BlankState from "../blank-state/BlankState";


interface IComponentProps {
    list: ITask[];
    loading: boolean;
}

const ListItems: React.FC<IComponentProps> = observer(({list, loading}) => {

    return <IonList>
        {loading && (<Loading />)}
        {!loading && list.map(x => (
                <Item key={x.id} item={x}/>
            )
        )}
        {!loading && list.length === 0 && (<BlankState />)}</IonList>;
});

export default ListItems;
