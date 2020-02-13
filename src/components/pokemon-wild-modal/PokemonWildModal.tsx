import React, {useEffect, useState} from 'react';
import './PokemonWildModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonSpinner,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {close, people} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {Routes} from "../../router/Router";
import {IPokemon} from "../../models/Pokemon";
import Overworld from "../../components/overworld/Overworld";
import Type from "../../components/type/Type";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {IPokemonSpecie} from "../../models/PokemonSpecie";
import {pokemonSpecies} from "../../data/pokemon-species";
import {IEvolution} from "../../models/Evolution";
import {useRootStore} from "../../stores/StoreContext";
import useDirection from "../../hooks/useDirection";
import PokemonBasicDetails from "../../components/pokemon-basic-details/PokemonBasicDetails";
import DefaultModal from "../default-modal/DefaultModal";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    pokemon: IPokemon;

    onClickClose(): void;

    afterSaveAction?(): void;
}

type FormData = {
    name: string;
    email: string;
    password: string;
    character: string;
}

const PokemonWildModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, afterSaveAction, pokemon}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, userStore} = useRootStore();
    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[pokemonVariety.specie]);
    const {actualDirection, changeDirection} = useDirection("down");

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
    }, [pokemon])

    const closeModal = () => {
        onClickClose();
    }

    return (
        <DefaultModal open={open} onClickClose={closeModal} title="Wild Pokémon" >
            {{headerEndArea: <></>,
            content: <>
                        <PokemonBasicDetails pokemon={pokemon} />
                    </>}}
        </DefaultModal>
    );
})

export default withRouter(PokemonWildModal);
