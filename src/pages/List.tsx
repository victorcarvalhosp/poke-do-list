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
    IonFabButton
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
import {ITask} from "../models/Task";
import {observer} from "mobx-react-lite";
import TaskModal from "../components/task-modal/TaskModal";
import DayjsUtils from "@date-io/dayjs";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Overworld from "../components/overworld/Overworld";
import PkmnHeader from "../components/pkmn-header/PkmnHeader";

const ListPage: React.FC = observer(() => {

    const {taskStore, userStore} = useRootStore();

    const openModalNewTask = () => {
        taskStore.openModal();
    }

    const openModal = (task: ITask) => {
        //select here;
        taskStore.openModal();
    }
    const [selectedDate, handleDateChange] = useState(new Date());


    return (
        <IonPage>
           <PkmnHeader />

            <IonContent>
                <ListItems/>
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

const ListItems = observer(() => {

    const {taskStore} = useRootStore();

    useEffect(() => {
        console.log('LOAD LIST EFFECT');
        taskStore.loadList();
    }, [])

    const finishTask = (x: any) => {
        console.log(x);
    }


    return <IonList>
        {taskStore.list.map(x => (
                <Item key={x.id} item={x}/>
            )
        )}</IonList>;
});

export default ListPage;
