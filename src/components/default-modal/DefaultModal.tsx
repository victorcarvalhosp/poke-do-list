import React, {ReactChild, ReactNode} from 'react';
import './DefaultModal.scss'
import {IonButton, IonButtons, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar} from "@ionic/react";
import {observer} from "mobx-react-lite";
import {close} from "ionicons/icons";
import {isObject} from "../../utils/utils";

interface IComponentProps {
    open: boolean;
    onClickClose(): void;
    onModalDidPresent?(): void;
    title: string;
    children: {
        headerEndArea?: ReactNode;
        content: ReactNode;
    };
}

type NamedChildrenSlots = {
    headerEndArea?: ReactNode;
    content: ReactNode;
}

const DefaultModal: React.FC<IComponentProps> = observer(({open, title, onClickClose, onModalDidPresent, children}) => {

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        if(onModalDidPresent){
            onModalDidPresent();
        }
    }

    const closeModal = () => {
        onClickClose();
    }

    const isNamedSlots = (children: any): children is NamedChildrenSlots => isObject(children) && 'content' in children;

        const {headerEndArea, content} = children;

        return (<IonModal isOpen={open} backdropDismiss={false} cssClass="task-form-modal"
                  onDidPresent={ionModalDidPresent}>
            <IonHeader class="transparent-header">
                <IonToolbar color="transparent">
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={(e) => closeModal()} fill="clear">
                            <IonIcon icon={close}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                    <IonButtons slot="end">
                        {headerEndArea ? headerEndArea : ''}
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            {content}
        </IonModal>)
})

export default DefaultModal;
