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
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import {book, build, colorFill, grid} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import './Pokemon.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";
import {useForm} from "react-hook-form";
import {auth, firestore} from "../../firebase";
import {IPokemon, Pokemon} from "../../models/Pokemon";
import {useRootStore} from "../../stores/StoreContext";
import Item from "../../components/Item";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import PokemonDetailsModal from "./PokemonDetailsModal";


const PokemonPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {pokemonStore} = useRootStore();
    const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
    const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>(new Pokemon());


    const onCloseModal = () => {
        setModalDetailsOpen(false);
    }

    const openModalDetails = (pkmn: IPokemon) => {
        setSelectedPokemon(pkmn);
        setModalDetailsOpen(true);
    }

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
                <IonGrid>
                    <IonRow className="pkmn-grid">
                        {pokemonStore.list.map(pkmn => (
                                <IonCol key={pkmn.id} className="pkmn-grid-item" sizeXl="1" sizeLg="2" sizeMd="2" sizeSm="3" sizeXs="4" onClick={e => openModalDetails(pkmn)}>
                                    <Overworld direction="down" animationActive={true}
                                               spriteUrl={`/assets/overworlds/pokemon/${pkmn.variety}.png`}/>
                                    <p>{pkmn.name}</p>
                                    <p className="level">Lv.{pkmn.level}</p>
                                </IonCol>
                            )
                        )}
                    </IonRow>
                </IonGrid>
                <PokemonDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal} pokemon={selectedPokemon} />
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokemonPage);
