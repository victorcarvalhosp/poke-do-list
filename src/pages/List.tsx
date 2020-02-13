import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCheckbox,
    IonFab,
    IonFabButton, useIonViewDidEnter, useIonViewWillEnter
} from '@ionic/react';
import {
    americanFootball,
    basketball,
    beer,
    bluetooth,
    boat,
    build,
    flask,
    football,
    paperPlane,
    wifi,
    add
} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import sprite from '../assets/overworlds/pokemon/486.png';
import './List.css'
import Item from "../components/Item";
import {IPokemon} from "../models/Pokemon";
import {useRootStore} from "../stores/StoreContext";
import {ITask, Task} from "../models/Task";
import {observer} from "mobx-react-lite";
import TaskModal from "../components/task-modal/TaskModal";
import DayjsUtils from "@date-io/dayjs";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Overworld from "../components/overworld/Overworld";
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

    // useIonViewWillEnter(() => {
    //     console.log('useIonViewWillEnter event fired');
    //     if (filter === 'today') {
    //         taskStore.loadListToday();
    //     } else if (filter === 'week') {
    //         taskStore.loadListWeek();
    //     } else {
    //         taskStore.loadListInbox();
    //     }
    // });

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
                <ListItems list={taskStore.list} loading={taskStore.loadingList}/>
                {/*<button type="button" className="nes-btn is-primary">Primary</button>*/}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton color="light" onClick={e => openModalNewTask()}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
                <TaskModal/>
            </IonContent>
        </IonPage>
    );
});

export default ListPage;
