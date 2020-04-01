import React from 'react';
import './BattleSelectPokemonDetailsModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonModal, IonToolbar} from '@ionic/react';
import {close} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemon} from "../../../models/Pokemon";
import PokemonBasicDetailsStats from "../../../components/pokemon-basic-details-stats/PokemonBasicDetailsStats";
import PokemonBasicDetails from "../../../components/pokemon-basic-details/PokemonBasicDetails";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    pokemon: IPokemon;
    position: number;

    onClickClose(): void;
}
const BattleSelectPokemonDetailsModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, position, pokemon}) => {

    const closeModal = () => {
        onClickClose();
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
                <div className="top-area" >
                    <PokemonBasicDetails pokemon={pokemon} />
                    <PokemonBasicDetailsStats pokemon={pokemon} />
                    <IonList className="more-details">

                    </IonList>
                </div>
            </IonContent>
        </IonModal>
    );
})

export default withRouter(BattleSelectPokemonDetailsModal);
