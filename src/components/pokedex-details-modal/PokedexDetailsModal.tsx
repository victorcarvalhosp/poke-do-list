import React, {useEffect, useState} from 'react';
import './PokedexDetailsModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar} from '@ionic/react';
import {close} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemonSpecie} from "../../models/PokemonSpecie";
import {pokemonSpecies} from "../../data/pokemon-species";
import {useRootStore} from "../../stores/StoreContext";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    specie: IPokemonSpecie;
    onClickClose(): void;
}

type FormData = {
    name: string;
    email: string;
    password: string;
    character: string;
}

const PokedexDetailsModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, specie}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, userStore} = useRootStore();
    const [pokemonSpecie, setPokemonSpecie] = useState<IPokemonSpecie>(pokemonSpecies[specie.id]);

    useEffect(() => {
        setPokemonSpecie(pokemonSpecies[specie.id]);
    }, [specie])

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
                {pokemonSpecie.name}
            </IonContent>

        </IonModal>
    );
})

export default withRouter(PokedexDetailsModal);
