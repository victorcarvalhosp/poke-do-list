import React, {useEffect, useState} from 'react';
import './PokemonDetailsModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {
    IonAlert,
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
import {arrowUp, close, star, starOutline, swapHorizontalOutline} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemon} from "../../models/Pokemon";
import Overworld from "../../components/overworld/Overworld";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {IEvolution} from "../../models/Evolution";
import {useRootStore} from "../../stores/StoreContext";
import PokemonBasicDetailsStats from "../pokemon-basic-details-stats/PokemonBasicDetailsStats";
import PokemonBasicDetails from "../pokemon-basic-details/PokemonBasicDetails";
import LevelUpModal from "./level-up-modal/LevelUpModal";

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
    const [showTransferAlert, setShowTransferAlert] = useState(false);
    const [showLevelUpModal, setShowLevelUpModal] = useState(false);

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
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
    }

    const handleTransfer = async () => {
        await pokemonStore.transferPokemon(pokemon);
        closeModal();
    }

    const openModalLevelUp = () => {
        setShowLevelUpModal(true);
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
                <div className="top-area">
                    <PokemonBasicDetails pokemon={pokemon}/>
                    {pokemonVariety.evolutions.length > 0 &&
                    <div className="evolutions-area">
                        {pokemonVariety.evolutions.map((evolution, i) => (
                            <div className="evolution" key={evolution.to + i}>
                                <Overworld spriteUrl={`${evolution.to}.png`} direction="down" animationActive={false}
                                           type="pokemon" className={userStore.user.pokedex[evolution.to]?.caught ? '' : 'just-seen-pokedex'}/>
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
                        <IonItem onClick={openModalLevelUp}><IonIcon slot="start" icon={arrowUp}/>Level up!
                            <div slot="end">{userStore.user.powerUps}</div></IonItem>
                        {pokemon.id === userStore.user.partnerPokemon?.id ?
                            (
                                <IonItem color="light"><IonIcon slot="start" icon={star} color="warning"/>This is your
                                    actual partner</IonItem>
                            ) :
                            (
                                <>
                                    <IonItem onClick={changePartner}><IonIcon slot="start" icon={starOutline}/>
                                        Set as Partner</IonItem>
                                    <IonItem onClick={e => setShowTransferAlert(true)}><IonIcon slot="start"
                                                                                                icon={swapHorizontalOutline}/>Transfer</IonItem>

                                </>
                            )
                        }
                    </IonList>
                    <PokemonBasicDetailsStats pokemon={pokemon}/>

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

            <LevelUpModal pokemon={pokemon} open={showLevelUpModal} onClickClose={() => setShowLevelUpModal(false)} />
        </IonModal>
    );
})

export default withRouter(PokemonDetailsModal);
