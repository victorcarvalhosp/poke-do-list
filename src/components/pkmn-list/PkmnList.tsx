import React from 'react';
import './PkmnList.scss';
import {observer} from "mobx-react-lite";
import {IonCol, IonGrid, IonIcon, IonRow} from "@ionic/react";
import Overworld from "../overworld/Overworld";
import {useRootStore} from "../../stores/StoreContext";
import {star} from "ionicons/icons";
import {IPokemon} from "../../models/Pokemon";
import PkmnGridItem from "./pkmn-grid-item/PkmnGridItem";

interface IProps {
    list: IPokemon[];
    handleItemClick(pkmn: IPokemon): void;
}

const PkmnList: React.FC<IProps> = observer(({list, handleItemClick}) => {

    const {userStore} = useRootStore();

    const onClickAction = (pkmn: IPokemon) => {
        handleItemClick(pkmn);
    }

    return (<IonGrid id="pkmn-list">
        <IonRow className="pkmn-grid">
            {list.map(pkmn => (
                <PkmnGridItem pkmn={pkmn} handleItemClick={onClickAction}/>
                )
            )}
        </IonRow>
    </IonGrid>)
});

export default PkmnList;
