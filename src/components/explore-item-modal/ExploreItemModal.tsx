import React, {useEffect} from 'react';
import './ExploreItemModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar} from '@ionic/react';
import {close} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import {IExploreItem} from "../../models/IExploreItem";
import {Routes} from "../../router/Router";
import Overworld from "../overworld/Overworld";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    exploreItem: IExploreItem;

    onClickClose(): void;
}

const ExploreItemModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, exploreItem}) => {

    // watch input value by passing the name of it
    const {exploreStore, battleStore} = useRootStore();

    // const [pokemonSpecieVarieties, setPokemonSpecieVarieties] = useState<IPokemonSpecie>(pokemonSpecies[pokedexItem.id]);


    useEffect(() => {
    }, [exploreItem])

    const closeModal = () => {
        onClickClose();
    }

    const goToBattle = () => {
        exploreStore.setSelected(exploreItem);
        if (exploreItem.trainerInfo) {
            battleStore.clearPlayer1SelectedPokemons();
            battleStore.setOpponent(exploreItem.trainerInfo);
            history.push(Routes.BATTLE_SELECT_POKEMON);
        }
        closeModal();
    }

    return (
        <IonModal isOpen={open} backdropDismiss={false} cssClass="explore-item-modal">
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
                <Overworld spriteUrl={exploreItem.image.name} direction="down"
                           animationActive={exploreItem.image.animationActive}
                           type={exploreItem.image.type}/>
                <div className="info">
                    <h2>
                        {exploreItem.name}
                    </h2>
                    <p>{exploreItem.description}</p>
                    <span style={{display: 'block'}}>Max Lv.: {exploreItem.trainerInfo?.maxLevel}</span>
                    <button onClick={goToBattle} type="button" className="nes-btn is-primary">
                        Go to battle!
                    </button>
                </div>

            </IonContent>

        </IonModal>
    );
})

export default withRouter(ExploreItemModal);
