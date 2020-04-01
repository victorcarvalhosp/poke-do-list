import {IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage} from '@ionic/react';
import React, {useState} from 'react';
import './Settings.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import {UIMode} from "../../stores/UiStore";
import {CirclePicker} from 'react-color';
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import {create} from "ionicons/icons";
import SerialModal from "./serial-modal/SerialModal";


const SettingsPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {uiStore, userStore} = useRootStore();

    const themesAvailable: UIMode[] = [UIMode.Dark, UIMode.Light, UIMode.Red, UIMode.Blue, UIMode.Green];
    const themesColors: string[] = themesAvailable.map(val => val.value);

    const [showSerialModal, setShowSerialModal] = useState(false);

    // useEffect(() => {
    //     userStore.checkPremiumLicense();
    // }, [userStore.user]);

    const changeTheme = (color: any) => {
        uiStore.change(themesAvailable.filter(val => color.hex === val.value)[0]);
    };

    const openSerialModal = () => {
        setShowSerialModal(true);
    }

    const handleCloseSerialModal = () => {
        setShowSerialModal(false);
    }

    return (
        <IonPage id="settings-page">
            <PkmnHeader title="Settings"/>

            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel>Theme</IonLabel>
                        <CirclePicker color={uiStore.mode.value}
                                      onChangeComplete={(color: any) => changeTheme(color)}
                                      colors={themesColors} width="216px"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>License Key: </IonLabel>
                        {userStore.premium ? 'VALID!' : '-'}
                        <IonButton slot="end" fill="clear" onClick={openSerialModal}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonButton>
                    </IonItem>
                </IonList>
                <SerialModal onClickClose={handleCloseSerialModal} open={showSerialModal}></SerialModal>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(SettingsPage);
