import {IonContent, IonHeader, IonPage, IonToolbar, IonList, IonItem, IonLabel} from '@ionic/react';
import React from 'react';
import './Settings.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import {UIMode} from "../../stores/UiStore";
import {CirclePicker} from 'react-color';
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";



const SettingsPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {uiStore} = useRootStore();

    const themesAvailable: UIMode[] = [UIMode.Dark, UIMode.Light, UIMode.Red, UIMode.Blue, UIMode.Green];
    const themesColors: string[] = themesAvailable.map(val => val.value);

    const changeTheme = (color: any) => {
        uiStore.change(themesAvailable.filter(val => color.hex === val.value)[0]);
    };

    return (
        <IonPage id="battle-page">
            <PkmnHeader title="Settings"/>

            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel>Theme</IonLabel>
                        <CirclePicker color={uiStore.mode.value}
                                      onChangeComplete={(color: any) => changeTheme(color)}
                                      colors={themesColors} width="216px"/>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(SettingsPage);
