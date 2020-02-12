import React from 'react';
import './Type.scss';
import {observer} from "mobx-react-lite";

interface IProps {
    type1: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
    type2?: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" | "water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy" | "unknown" | "shadow";
}

const Type: React.FC<IProps> = observer(({type1, type2}) => {

    return (
        <div className="pkmn-types">
            <img src={`assets/images/types/${type1}.png`}/>
            {type2 && <img src={`assets/images/types/${type2}.png`}/>}
        </div>
    )
});

export default Type;
