import React from "react";
import "./PkmnList.scss";
import { observer } from "mobx-react-lite";
import { IonGrid, IonRow } from "@ionic/react";
import { IPokemon } from "../../models/Pokemon";
import PkmnGridItem from "./pkmn-grid-item/PkmnGridItem";

interface IProps {
  list: IPokemon[];
  handleItemClick(pkmn: IPokemon): void;
}

const PkmnList: React.FC<IProps> = observer(({ list, handleItemClick }) => {
  const onClickAction = (pkmn: IPokemon) => {
    handleItemClick(pkmn);
  };

  return (
    <IonGrid id="pkmn-list">
      <IonRow className="pkmn-grid">
        {list.map((pkmn) => (
          <PkmnGridItem
            key={pkmn.id}
            pkmn={pkmn}
            handleItemClick={onClickAction}
          />
        ))}
      </IonRow>
    </IonGrid>
  );
});

export default PkmnList;
