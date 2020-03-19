import React from 'react';
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import {IonFab, IonFabButton, IonFabList, IonIcon} from "@ionic/react";
import {filter} from "ionicons/icons";

const FabOrderByPokemon: React.FC = observer(({}) => {

    const {pokemonStore} = useRootStore();
//init
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed" >
            <IonFabButton>{pokemonStore.orderBy === "alphabetical" ? 'Ab' : pokemonStore.orderBy === "level" ? 'Lv': '#'}
                <IonIcon icon={filter} />
            </IonFabButton>
            <IonFabList side="top">
                <IonFabButton onClick={e => pokemonStore.setOrderBy("level")}>Lv</IonFabButton>
                <IonFabButton onClick={e => pokemonStore.setOrderBy("numeric")}>#</IonFabButton>
                <IonFabButton onClick={e => pokemonStore.setOrderBy("alphabetical")}>Ab</IonFabButton>
            </IonFabList>
        </IonFab>
    );
});


export default FabOrderByPokemon;
