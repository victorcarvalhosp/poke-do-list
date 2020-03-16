import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, {useState} from 'react';
import './BattleAwards.scss';
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import {Routes} from "../../router/Router";
import {CLOUDINARY_URL} from "../../utils/consts";
import {exploreAwards} from "../../data/explore";
import {addOutline, arrowBackSharp, backspace} from "ionicons/icons";
import BattleAwardItem from "./award-item/BattleAwardItem";


const BattleAwardsPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {exploreStore, battleStore} = useRootStore();
    const [blockButton, setBlockButton] = useState(false);
    const [loading, setLoading] = useState(false);

    const collectAwards = async () => {
        setLoading(true);
        await exploreStore.setExploreItemDone();
        setLoading(false);
        history.push(Routes.EXPLORE);
    }

    const goBackToExplore = () => {
        history.push(Routes.EXPLORE);
    }

    if(battleStore.battleResult != "win"){
        return <Redirect to={Routes.EXPLORE} />
    }
    return (
        <IonPage id="battle-awards-page">
            <IonHeader >
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton type="button">
                            <IonIcon slot="icon-only" color="primary" icon={arrowBackSharp} onClick={goBackToExplore} ></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Awards</IonTitle>
                    <IonButtons slot="end">
                        <IonButton
                            disabled={loading}
                            onClick={collectAwards}>Collect Items</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {exploreStore.firstTimeCompleted && (
                    <>
                        <h3>First time awards:</h3>
                        <IonRow>
                        {exploreStore.selected.firstTimeAwards.map(awardId => (
                            <BattleAwardItem awardId={awardId} />
                        ))}
                        </IonRow>
                    </>
                )
                }

                <>
                    <h3>Awards:</h3>
                    <IonRow>
                    {exploreStore.selected.awards.map(awardId => (
                        <BattleAwardItem awardId={awardId} />
                    ))}
                    </IonRow>
                </>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(BattleAwardsPage);
