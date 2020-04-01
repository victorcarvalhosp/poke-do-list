import {IonContent, IonPage} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Pokemon.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {IPokemon, Pokemon} from "../../models/Pokemon";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import PokemonDetailsModal from "../../components/pokemon-details-modal/PokemonDetailsModal";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import PkmnList from "../../components/pkmn-list/PkmnList";
import FabOrderByPokemon from "../../components/fab-order-by-pokemon/FabOrderByPokemon";


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
            <PkmnHeader title="My Pokémon" />
            <IonContent className="ion-padding">
                <PkmnList list={pokemonStore.listOrdered} handleItemClick={openModalDetails}/>
                <PokemonDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal} pokemon={selectedPokemon} />
                <FabOrderByPokemon />
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokemonPage);
