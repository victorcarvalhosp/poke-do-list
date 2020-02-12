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
    IonToolbar
} from '@ionic/react';
import {close} from "ionicons/icons";
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
    const {pokemonStore} = useRootStore();
    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[pokemonVariety.specie]);

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
    }, [pokemon])

    const closeModal = () => {
        onClickClose();
    }


    const evolvePokemon = async (evolution: IEvolution) =>  {
        await pokemonStore.evolvePokemon(pokemon, evolution);
        setPokemonVariety(pokemonVarieties[evolution.to]);
        setPokemonSpecie(pokemonSpecies[pokemonVariety.specie]);
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
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="top-area">
                    <Overworld spriteUrl={`${pokemon?.variety}.png`} direction="down" animationActive={true}
                               type="pokemon"/>
                    <h2>{pokemon?.name}</h2>
                    <p className="level">Lv.{pokemon?.level}</p>
                    <Type type1={pokemonVariety.type1}
                          type2={pokemonVariety.type2}/>


                    {pokemonVariety.evolutions.length > 0 &&
                    <div className="evolutions-area">
                        {pokemonVariety.evolutions.map((evolution, i) => (
                            <div className="evolution" key={evolution.to+i}>
                                <Overworld spriteUrl={`${evolution.to}.png`} direction="down" animationActive={false}
                                           type="pokemon"/>
                                <span>{`Lv.${evolution.level}`}</span>
                                <button type="button" className={`nes-btn ${pokemon.level < evolution.level ? 'is-disabled' : 'is-primary'} `} disabled={pokemon.level < evolution.level} onClick={e => evolvePokemon(evolution)}>
                                    evolve
                                </button>
                            </div>
                        ))}
                    </div>
                    }



                    <div className="caught-when">
                        <hr/>
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
        </IonModal>
    );
})

export default withRouter(PokemonDetailsModal);
