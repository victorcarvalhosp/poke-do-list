import React, {useEffect, useState} from 'react';
import './PokedexDetailsModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar} from '@ionic/react';
import {close} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemonSpecie} from "../../models/PokemonSpecie";
import {pokemonSpecies} from "../../data/pokemon-species";
import {IPokedexStatus} from "../../models/PokedexStatus";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import PokedexBasicInfoVarieties from "./components/pokedex-basic-info-varieties/PokedexBasicInfoVarieties";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    pokedexItem: IPokedexStatus;

    onClickClose(): void;
}

const PokedexDetailsModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, pokedexItem}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[pokedexItem.specieId]);
    const [activeVariety, setActiveVariety] = useState<IPokemonVariety>(pokemonVarieties[pokedexItem.specieId]);

    // const [pokemonSpecieVarieties, setPokemonSpecieVarieties] = useState<IPokemonSpecie>(pokemonSpecies[pokedexItem.id]);


    useEffect(() => {
        setPokemonSpecie(pokemonSpecies[pokedexItem.specieId]);
        setActiveVariety(pokemonVarieties[pokedexItem.specieId])
    }, [pokedexItem])

    const closeModal = () => {
        onClickClose();
    }

    return (
        <IonModal isOpen={open} backdropDismiss={false} cssClass="pokedex-detail-modal">
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
                {pokemonSpecie.varieties && (
                    <PokedexBasicInfoVarieties pokedexItem={pokedexItem} activeVariety={activeVariety}
                                               setActiveVariety={setActiveVariety} varieties={pokemonSpecie.varieties}/>
                )}
            </IonContent>

        </IonModal>
    );
})

export default withRouter(PokedexDetailsModal);
