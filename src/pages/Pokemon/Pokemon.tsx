import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage, IonSpinner,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {book, build, colorFill, grid} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import './Pokemon.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";
import {useForm} from "react-hook-form";
import {auth, firestore} from "../../firebase";
import {Pokemon} from "../../models/Pokemon";
import {useRootStore} from "../../stores/StoreContext";
import Item from "../../components/Item";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";


const PokemonPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {pokemonStore} = useRootStore();

    useEffect(() => {
        console.log('LOAD LIST EFFECT');
        pokemonStore.loadList();
    }, [])

    return (
        <IonPage id="pokemon-page">
            <IonHeader class="transparent-header">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>My Pokémon</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {pokemonStore.list.map(pkmn => (
                        <IonItem key={pkmn.id} >
                            <div slot="start">
                                <Overworld direction="down" animationActive={true} spriteUrl={`/assets/overworlds/pokemon/${pkmn.variety}.png`} />
                            </div>
                            {pkmn.name}
                        </IonItem>
                        )
                    )}
                </IonList>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokemonPage);
