import {
    IonCard,
    IonCardContent,
    IonContent,
    IonItem,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonIcon
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Explore.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import Overworld from "../../components/overworld/Overworld";
import {ExploreItem, IExploreItem} from "../../models/IExploreItem";
import ExploreItemModal from "../../components/explore-item-modal/ExploreItemModal";
import {checkmark} from "ionicons/icons";


const ExplorePage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {exploreStore, userStore} = useRootStore();
    const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
    const [selectedExploreItem, setSelectedExploreItem] = useState<IExploreItem>(new ExploreItem());
    // const [missions, setMissions] = useState<IExploreItem[]>(allMissions.filter(item => item.type === selectedSegment));


    const onCloseModal = () => {
        setModalDetailsOpen(false);
    }

    const openModalDetails = (mission: IExploreItem) => {
        if (mission.enableAfter === null || exploreStore.exploreItemAlreadyCompleted(mission.enableAfter)) {
            setSelectedExploreItem(mission);
            setModalDetailsOpen(true);
        }
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
                    <IonSegmentButton value="all">
                        <IonLabel>All</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="league">
                        <IonLabel>League</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="trainer">
                        <IonLabel>Trainers</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="event">
                        <IonLabel>Event</IonLabel>
                    </IonSegmentButton>
                    {/*<IonSegmentButton value="mission">*/}
                    {/*    <IonLabel>Missions</IonLabel>*/}
                    {/*</IonSegmentButton>*/}
                </IonSegment>
                {userStore.user.uid && exploreStore.filteredList.map(mission => (<>
                    {(mission.appearAfter === null || exploreStore.exploreItemAlreadyCompleted(mission.appearAfter)) && (
                        <IonCard onClick={e => openModalDetails(mission)} style={{opacity: mission.enableAfter === null || exploreStore.exploreItemAlreadyCompleted(mission.enableAfter) ? '1': '0.4'}}>
                            <IonItem >
                                <IonLabel>
                                    {exploreStore.exploreItemAlreadyCompleted(mission.id) && (
                                        <IonIcon size="large" icon={checkmark} color="success"></IonIcon>
                                    )}
                                    {mission.name}

                                </IonLabel>
                                <span slot="end" className="card-image">
                            <Overworld spriteUrl={mission.image.name} direction={mission.image.direction || "down"}
                                       animationActive={mission.image.animationActive || true}
                                       type={mission.image.type || "other"}/>
                                    {mission.trainerInfo?.maxLevel && (
                                        <span className="level">Max Lvl.: {mission.trainerInfo.maxLevel}</span>
                                    )}
                        </span>
                            </IonItem>

                            <IonCardContent>
                                {mission.shortDescription}
                            </IonCardContent>
                        </IonCard>
                    )}
                </>))}
                <ExploreItemModal open={modalDetailsOpen} onClickClose={onCloseModal}
                                  exploreItem={selectedExploreItem}/>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(ExplorePage);
