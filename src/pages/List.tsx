import {IonContent, IonFab, IonFabButton, IonIcon, IonPage} from '@ionic/react';
import {add} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import './List.css'
import {useRootStore} from "../stores/StoreContext";
import {ITask, Task} from "../models/Task";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../components/pkmn-header/PkmnHeader";
import ListItems from "../components/list-items/ListItems";
import {RouteComponentProps} from "react-router";

interface RouteInfo {
    filter: string;
}

interface ComponentProps extends RouteComponentProps<RouteInfo> {
}

const ListPage: React.FC<ComponentProps> = observer(({match}) => {

    const {taskStore, userStore} = useRootStore();
    const filter = match.params.filter;
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (filter === 'today') {
            taskStore.loadListToday();
            setTitle("Today tasks")
        } else if (filter === 'week') {
            taskStore.loadListWeek();
            setTitle("This week tasks")
        } else {
            taskStore.loadListInbox();
            setTitle("Inbox")

        }
    }, [filter]);

    const openModalNewTask = () => {
        taskStore.openModal(new Task());
    }

    const openModal = (task: ITask) => {
        //select here;
        taskStore.openModal(task);
    }

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <IonPage>
            <PkmnHeader title={title}/>

            <IonContent>
                <ListItems list={taskStore.list} loading={taskStore.loadingList} groupType={filter === 'today' ? 'today' : filter === 'week' ? 'week' : 'none'}/>
                {/*<button type="button" className="nes-btn is-primary">Primary</button>*/}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton color="light" onClick={e => openModalNewTask()}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
});

export default ListPage;
