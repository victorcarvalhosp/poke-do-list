import React from 'react';
import './ToastDefault.scss';
import {IonToast} from "@ionic/react";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";

const ToastDefault: React.FC = observer(() => {
    const {uiStore} = useRootStore();
    return (
        <IonToast
            isOpen={uiStore.toastVisible}
            onDidDismiss={() => uiStore.hideToast()}
            message={uiStore.toastMessage}
            duration={2000}
            color={uiStore.toastColor}
            buttons={[
                {
                    text: 'OK',
                    handler: () => {
                        uiStore.hideToast();
                    }
                }
            ]} />
    );
});


export default ToastDefault;
