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
    IonCheckbox
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
    wifi
} from 'ionicons/icons';
import React, {useState} from 'react';
import sprite from '../assets/overworlds/pokemon/486.png';
import './List.css'
import Item from "../components/Item";
import {IPokemon} from "../models/Pokemon";

const ListPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Poké-do List</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <ListItems/>
                {/*<button type="button" className="nes-btn is-primary">Primary</button>*/}
            </IonContent>
        </IonPage>
    );
};

const ListItems = () => {
    const icons = [
        flask,
        wifi,
        beer,
        football,
        basketball,
        paperPlane,
        americanFootball,
        boat,
        bluetooth,
        build
    ];

    const [items2, setItems2] = useState([
        {
            id: '12dqwe',
            title: 'Task 1',
            pokemon: {id: '123', name: 'Bulbasaur', nationalDexNumber: '001'},
            complete: false
        },
        {
            id: '12dqwe',
            title: 'Task 2',
            pokemon: {id: '123', name: 'Bulbasaur', nationalDexNumber: '201'},
            complete: false
        },
        {
            id: '12dqwe',
            title: 'Task 3',
            pokemon: {id: '123', name: 'Bulbasaur', nationalDexNumber: '486'},
            complete: false
        },
    ]);

    const finishTask = (x: any) => {
        console.log(x);
    }


    return <IonList>
        {items2.map(x => (
                <Item item={x}/>
            )
        )}</IonList>;
};

export default ListPage;
