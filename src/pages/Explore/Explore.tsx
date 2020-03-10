import {IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonCard, IonItem, IonIcon, IonCardContent, IonButton} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Explore.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import {IPokedexStatus, PokedexStatus} from "../../models/PokedexStatus";
import {map} from "ionicons/icons";
import Overworld from "../../components/overworld/Overworld";
import {ExploreItem, IExploreItem} from "../../models/IExploreItem";
import ExploreItemModal from "../../components/explore-item-modal/ExploreItemModal";
import PokedexDetailsModal from "../../components/pokedex-details-modal/PokedexDetailsModal";
import {FilterExploreTypes} from "../../models/conditional-types-definitions";


const ExplorePage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {exploreStore} = useRootStore();
    const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
    const [selectedExploreItem, setSelectedExploreItem] = useState<IExploreItem>(new ExploreItem());
    // const [missions, setMissions] = useState<IExploreItem[]>(allMissions.filter(item => item.type === selectedSegment));


    const onCloseModal = () => {
        setModalDetailsOpen(false);
    }

    const openModalDetails = (mission: IExploreItem) => {
        setSelectedExploreItem(mission);
        setModalDetailsOpen(true);
    }

    useEffect(() => {
        console.log('LOAD LIST EFFECT');
    }, [])

    const changeSegment = (e: any) => {
        exploreStore.setFilter(e.detail.value);
    }

    return (
        <IonPage id="explore-page">
            <PkmnHeader title="Explore(beta)"/>
            <IonContent className="ion-padding">
                <IonSegment value={exploreStore.filter} mode="ios" onIonChange={e => changeSegment(e)}>
                    <IonSegmentButton value="battle">
                        <IonLabel>Battles</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="mission">
                        <IonLabel>Missions</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="event">
                        <IonLabel>Events</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
                {exploreStore.filteredList.map(mission => (
                    <IonCard onClick={e => openModalDetails(mission)}>
                        <IonItem>
                            <IonLabel>{mission.name}</IonLabel>
                            <span slot="end">
                            <Overworld spriteUrl={mission.image.name} direction={mission.image.direction || "down"} animationActive={mission.image.animationActive || true} type={mission.image.type || "other"} />
                        </span>
                        </IonItem>

                        <IonCardContent>
                            {mission.shortDescription}
                        </IonCardContent>
                    </IonCard>
                ))}
                <ExploreItemModal open={modalDetailsOpen} onClickClose={onCloseModal}
                                  exploreItem={selectedExploreItem}/>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(ExplorePage);
