import React, {useState} from 'react';
import './PkmnHeader.scss';
import {observer} from "mobx-react-lite";
import {IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import Overworld from "../overworld/Overworld";
import {useRootStore} from "../../stores/StoreContext";
import {arrowUp} from "ionicons/icons";
import useDirection from "../../hooks/useDirection";
import TrainerWithPartner from "../trainer-with-partner/TrainerWithPartner";

interface IProps {
    title: string;
}

const PkmnHeader: React.FC<IProps> = observer(({title, children}) => {

    const {taskStore, userStore, pokemonStore} = useRootStore();

    return (<IonHeader className="pkmn-header">
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton/>
            </IonButtons>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
                <TrainerWithPartner />
                {children}
            </IonButtons>
        </IonToolbar>
    </IonHeader>)
});

export default PkmnHeader;
