import React from 'react';
import './PkmnHeader.scss';
import {observer} from "mobx-react-lite";
import {IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import {useRootStore} from "../../stores/StoreContext";
import TrainerWithPartner from "../trainer-with-partner/TrainerWithPartner";

interface IProps {
    title: string;
}

const PkmnHeader: React.FC<IProps> = observer(({title, children}) => {

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
