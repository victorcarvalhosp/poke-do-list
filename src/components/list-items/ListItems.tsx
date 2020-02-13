import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import React from "react";
import {IonList} from "@ionic/react";
import Item from "../Item";
import {ITask} from "../../models/Task";
import Loading from "../loading/Loading";
import BlankState from "../blank-state/BlankState";


interface IComponentProps {
    list: ITask[];
    loading: boolean;
}

const ListItems: React.FC<IComponentProps> = observer(({list, loading}) => {

    const {taskStore} = useRootStore();

    const onClickTask = (task: ITask) => {
        taskStore.openModal(task);
    }

    return (<>
        <IonList>
            {loading && (<Loading/>)}
            {!loading && list.map(task => (
                    <Item key={task.id} item={task} onClickItem={() => onClickTask(task)}/>
                )
            )}
            {!loading && list.length === 0 && (<BlankState/>)}
        </IonList>
    </>);
});

export default ListItems;
