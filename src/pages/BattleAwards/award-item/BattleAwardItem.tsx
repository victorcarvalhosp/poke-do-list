import React from 'react';
import './BattleAwardItem.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {observer} from "mobx-react-lite";
import {
    ExploreAwardBadge, ExploreAwardLevel,
    ExploreAwardPokemon,
    IExploreAward,
    IExploreAwardBadge, IExploreAwardLevel,
    IExploreAwardPokemon
} from "../../../models/IExploreAward";
import {exploreAwards} from "../../../data/explore";
import {CLOUDINARY_URL} from "../../../utils/consts";
import Overworld from "../../../components/overworld/Overworld";
import {IonCol, IonIcon} from '@ionic/react';
import {arrowUp} from "ionicons/icons";


interface IComponentProps extends RouteComponentProps {
    awardId: number;
}

const BattleAwardItem: React.FC<IComponentProps> = observer(({awardId, history}) => {

    return (
        <IonCol key={awardId} className={`ion-align-self-center`}
                sizeXl="1" sizeLg="2" sizeMd="2"
                sizeSm="3" sizeXs="4" >
            <div className="battle-award-item">
                {exploreAwards[awardId] instanceof ExploreAwardBadge}
                {exploreAwards[awardId] instanceof ExploreAwardBadge && (
                    <div className="img-area">
                        <img src={CLOUDINARY_URL + 'images/' + (exploreAwards[awardId] as IExploreAwardBadge).image}/>
                    </div>
                )}
                {exploreAwards[awardId] instanceof ExploreAwardPokemon && (
                    <Overworld type="pokemon"
                               spriteUrl={(exploreAwards[awardId] as IExploreAwardPokemon).pokemonId + '.png'}
                               direction="down"/>
                )}
                {exploreAwards[awardId] instanceof ExploreAwardLevel && (
                    <div className="img-area">
                        <IonIcon icon={arrowUp}/>
                    </div>
                )}
                <p> {exploreAwards[awardId].name}</p>
            </div>
        </IonCol>
    );
});

export default withRouter(BattleAwardItem);
