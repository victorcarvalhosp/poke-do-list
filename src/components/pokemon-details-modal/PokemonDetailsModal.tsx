import React, {useEffect, useState} from 'react';
import './PokemonDetailsModal.scss'
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
    IonToolbar,
    IonList,
    IonItem, IonAlert
} from '@ionic/react';
import {close, people, star, starOutline, swapHorizontalOutline} from "ionicons/icons";
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

const PokemonDetailsModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, afterSaveAction, pokemon}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, userStore} = useRootStore();
    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[pokemonVariety.specie]);
    const [actualDirection, changeDirection] = useDirection("down");
    const [showTransferAlert, setShowTransferAlert] = useState(false);



    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
    }, [pokemon])

    const closeModal = () => {
        onClickClose();
    }

    const changePartner = () => {
        userStore.updatePartner(pokemon);
    }

    const evolvePokemon = async (evolution: IEvolution) => {
        await pokemonStore.evolvePokemon(pokemon, evolution);
        setPokemonVariety(pokemonVarieties[evolution.to]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
    }

    const handleTransfer = async () => {
        await pokemonStore.transferPokemon(pokemon);
        closeModal();
    }

    return (
        <IonModal isOpen={open} backdropDismiss={false} cssClass="pokemon-detail-modal">
            <IonHeader class="transparent-header">
                <IonToolbar color="transparent">
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={(e) => closeModal()} fill="clear">
                            <IonIcon icon={close}/>
                        </IonButton>
                    </IonButtons>

                    <IonButtons slot="end">
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="top-area" >
                    <PokemonBasicDetails pokemon={pokemon} />
                    <p>HP: {pokemon.hp}</p>
                    <p>ATK: {pokemon.atk}</p>
                    <p>DEF: {pokemon.def}</p>
                    <p>SPEED: {pokemon.speed}</p>
                    {pokemonVariety.evolutions.length > 0 &&
                    <div className="evolutions-area">
                        {pokemonVariety.evolutions.map((evolution, i) => (
                            <div className="evolution" key={evolution.to + i}>
                                <Overworld spriteUrl={`${evolution.to}.png`} direction="down" animationActive={false}
                                           type="pokemon"/>
                                <span>{`Lv.${evolution.minLevel}`}</span>
                                <button type="button"
                                        className={`nes-btn ${pokemon.level < evolution.minLevel ? 'is-disabled' : 'is-primary'} `}
                                        disabled={pokemon.level < evolution.minLevel}
                                        onClick={e => evolvePokemon(evolution)}>
                                    evolve
                                </button>
                            </div>
                        ))}
                    </div>
                    }

                    <IonList className="more-details">
                        {pokemon.id === userStore.user.partnerPokemon?.id ?
                            (
                                <IonItem color="light"><IonIcon slot="start" icon={star} color="warning" />This is you actual partner</IonItem>
                            ) :
                            (
                                <>
                                <IonItem onClick={changePartner}><IonIcon slot="start" icon={starOutline} />Set as Partner</IonItem>
                                    <IonItem onClick={e => setShowTransferAlert(true)}><IonIcon slot="start" icon={swapHorizontalOutline} />Transfer</IonItem>

                                </>
                            )
                        }
                    </IonList>

                    <div className="caught-when">
                        <h3>{pokemon.task}</h3>
                        <p className="level">Caught on {pokemon.date ? new Intl.DateTimeFormat('en-us', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                        }).format(pokemon.date.toDate()) : ''}</p>
                    </div>
                </div>
            </IonContent>
            <IonAlert
                isOpen={showTransferAlert}
                onDidDismiss={() => setShowTransferAlert(false)}
                header={`Are you sure you want to transfer ${pokemon.name} to the professor?`}
                message={`You can't undo this action once you transfer.`}
                buttons={[
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: blah => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Yes, transfer',
                        handler: () => {
                            handleTransfer();
                        }
                    }
                ]}
            />
        </IonModal>
    );
})

export default withRouter(PokemonDetailsModal);
