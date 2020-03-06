import React, {useEffect} from 'react';
import './ExploreItemModal.scss'
import {RouteComponentProps, withRouter} from "react-router";
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar} from '@ionic/react';
import {close} from "ionicons/icons";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import {IExploreItem} from "../../models/IExploreItem";

interface IComponentProps extends RouteComponentProps {
    open: boolean;
    exploreItem: IExploreItem;

    onClickClose(): void;
}

const ExploreItemModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, exploreItem}) => {

    // console.log(watch('email')) // watch input value by passing the name of it
    const {pokemonStore, userStore} = useRootStore();

    // const [pokemonSpecieVarieties, setPokemonSpecieVarieties] = useState<IPokemonSpecie>(pokemonSpecies[pokedexItem.id]);


    useEffect(() => {
    }, [exploreItem])

    const closeModal = () => {
        onClickClose();
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
                {exploreItem.name}
                {exploreItem.type === "battle" && (
                    <IonButton>Go to battle!</IonButton>
                )}
            </IonContent>

        </IonModal>
    );
})

export default withRouter(ExploreItemModal);
