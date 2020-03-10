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
import {book, build, colorFill, grid, people, person, star} from 'ionicons/icons';
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
import PokemonDetailsModal from "../../components/pokemon-details-modal/PokemonDetailsModal";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import PkmnList from "../../components/pkmn-list/PkmnList";


const PokemonPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {pokemonStore, userStore} = useRootStore();
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
            <PkmnHeader title="My Pokémon" />
            <IonContent className="ion-padding">
                <PkmnList list={pokemonStore.list} handleItemClick={openModalDetails}/>
                <PokemonDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal} pokemon={selectedPokemon} />
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokemonPage);
