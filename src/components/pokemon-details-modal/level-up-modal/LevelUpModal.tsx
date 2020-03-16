import React, {useEffect, useState} from 'react';
import './LevelUpModal.scss'
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
    IonModal, IonTitle,
    IonToolbar,
    IonLabel
} from '@ionic/react';
import {
    addCircleOutline,
    arrowUp,
    close,
    removeCircleOutline,
    star,
    starOutline,
    swapHorizontalOutline
} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {IPokemon} from "../../../models/Pokemon";
import {useRootStore} from "../../../stores/StoreContext";
import {IPokemonVariety} from "../../../models/PokemonVariety";
import {IPokemonSpecie} from "../../../models/PokemonSpecie";
import PokemonBasicDetails from "../../pokemon-basic-details/PokemonBasicDetails";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    pokemon: IPokemon;

    onClickClose(): void;
}


const LevelUpModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, pokemon}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, userStore, uiStore} = useRootStore();
    const [totalLevelsUp, setTotalLevelsUp] = useState(userStore.user.powerUps === 0 ? 0 : 1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTotalLevelsUp(userStore.user.powerUps === 0 ? 0 : 1);
    }, [pokemon]);

    const addLevelUp = () => {
        if (userStore.user.powerUps > totalLevelsUp && (totalLevelsUp + pokemon.level <= 100)) {
            setTotalLevelsUp(totalLevelsUp + 1);
        }
    }

    const removeLevelUp = () => {
        if (totalLevelsUp > 1) {
            setTotalLevelsUp(totalLevelsUp - 1);
        }
    }

    const handleLevelUp = async () => {
        setLoading(true);
        await pokemonStore.levelUp(pokemon, totalLevelsUp, true);
        setLoading(false);
        onClickClose();
        uiStore.showToast(pokemon.name + ' leveled up!');
    }

    return (
        <IonModal isOpen={open} backdropDismiss={true} cssClass="level-up-modal"
                  onDidDismiss={e => onClickClose()}>
            <IonHeader class="transparent-header">
                <IonToolbar color="transparent">
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={(e) => onClickClose()} fill="clear">
                            <IonIcon icon={close}/>
                        </IonButton>
                        <IonTitle>Level up Pokémon</IonTitle>

                    </IonButtons>

                    <IonButtons slot="end">
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PokemonBasicDetails pokemon={pokemon}/>
                <div className="level-up-details">
                    <IonList className="level-up-list" lines="none">
                        <IonItem className="level-up-item">
                            <IonButton slot="start" onClick={removeLevelUp}>
                                <IonIcon slot="icon-only" icon={removeCircleOutline}/>
                            </IonButton>
                            {totalLevelsUp}
                            <IonButton slot="end" onClick={addLevelUp}>
                                <IonIcon slot="icon-only" icon={addCircleOutline}/>
                            </IonButton>
                        </IonItem>
                        <IonLabel>Power ups available: {userStore.user.powerUps}</IonLabel>
                    </IonList>
                    <button disabled={loading || totalLevelsUp === 0} onClick={handleLevelUp} type="button" className={`nes-btn ${loading || totalLevelsUp === 0 ? 'is-disabled' : 'is-primary'}`}>
                        Level up!
                    </button>
                </div>
            </IonContent>
        </IonModal>
    );
})

export default withRouter(LevelUpModal);
