import React, {useEffect, useState} from 'react';
import './BattleSelectPokemonDetailsModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonModal,
    IonToolbar
} from '@ionic/react';
import {close, starOutline} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemon} from "../../../models/Pokemon";
import {useRootStore} from "../../../stores/StoreContext";
import {IPokemonVariety} from "../../../models/PokemonVariety";
import {IPokemonSpecie} from "../../../models/PokemonSpecie";
import {pokemonVarieties} from "../../../data/pokemon-varieties";
import {pokemonSpecies} from "../../../data/pokemon-species";
import PokemonBasicDetailsWithStats
    from "../../../components/pokemon-basic-details-with-stats/PokemonBasicDetailsWithStats";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    pokemon: IPokemon;
    position: number;

    onClickClose(): void;
}

type FormData = {
    name: string;
    email: string;
    password: string;
    character: string;
}

const BattleSelectPokemonDetailsModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, position, pokemon}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, battleStore} = useRootStore();
    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[pokemonVariety.specie]);
    const [showTransferAlert, setShowTransferAlert] = useState(false);

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
    }, [pokemon])

    const closeModal = () => {
        onClickClose();
    }

    // const selectPokemon = () => {
    //     battleStore.setPokemonPos(position, pokemon);
    //     closeModal();
    // }

    return (
        <IonModal isOpen={open} backdropDismiss={false} cssClass="pokemon-detail-modal">
            <IonHeader class="transparent-header">
                <IonToolbar color="transparent">
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={(e) => closeModal()} fill="clear">
                            <IonIcon icon={close}/>
                        </IonButton>
                    </IonButtons>
                    {/*<IonButtons slot="end">*/}
                    {/*    {battleStore.player1SelectedPokemons.filter(pkmn => pkmn.id === pokemon.id).length > 0 ? (<IonButton disabled={true}>Already selected</IonButton>) : (*/}
                    {/*        <IonButton onClick={selectPokemon}>Select {pokemon.name}!</IonButton>*/}
                    {/*    )}*/}
                    {/*</IonButtons>*/}

                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="top-area" >
                    <PokemonBasicDetailsWithStats pokemon={pokemon} />
                    <IonList className="more-details">

                    </IonList>
                </div>
            </IonContent>
        </IonModal>
    );
})

export default withRouter(BattleSelectPokemonDetailsModal);
