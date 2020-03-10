import React from 'react';
import './PkmnGridItem.scss';
import {observer} from "mobx-react-lite";
import {IonCol, IonIcon} from "@ionic/react";
import {star} from "ionicons/icons";
import {IPokemon} from "../../../models/Pokemon";
import {useRootStore} from "../../../stores/StoreContext";
import Overworld from "../../overworld/Overworld";

interface IProps {
    pkmn: IPokemon;
    className?: string;

    handleItemClick(pkmn: IPokemon): void;
}

const PkmnGridItem: React.FC<IProps> = observer(({pkmn, handleItemClick, className}) => {

    const {userStore} = useRootStore();

    const onClickAction = (pkmn: IPokemon) => {
        handleItemClick(pkmn);
    }

    return (
        <IonCol key={pkmn.id} className={`pkmn-grid-item ion-align-self-center ${className ? className : ''}`}
                sizeXl="1" sizeLg="2" sizeMd="2"
                sizeSm="3" sizeXs="4" onClick={e => onClickAction(pkmn)}>
            <Overworld direction="down" animationActive={true} type="pokemon"
                       spriteUrl={`${pkmn.variety}.png`}/>
            <p>{pkmn.name}</p>
            {pkmn.level > 0 && (
                <p className="level">Lv.{pkmn.level} {userStore.user.partnerPokemon?.id === pkmn.id ?
                    <IonIcon icon={star}/> : <></>}</p>
            )}
        </IonCol>
    )
});

export default PkmnGridItem;
