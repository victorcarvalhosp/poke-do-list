import React from 'react';
import './PokedexBasicInfo.scss'
import {observer} from "mobx-react-lite";
import {CLOUDINARY_URL_POKEDEX} from "../../../../utils/consts";
import {IPokemonVariety} from "../../../../models/PokemonVariety";
import {pokemonSpecies} from "../../../../data/pokemon-species";
import Type from "../../../type/Type";

interface IComponentProps {
    pokemonVariety: IPokemonVariety;
}

const PokedexBasicInfo: React.FC<IComponentProps> = observer(({pokemonVariety}) => {

    return (<div className="pokedex-basic-info">
            <img src={`${CLOUDINARY_URL_POKEDEX}${pokemonVariety.id}.png`}/>
            <p>{pokemonSpecies[pokemonVariety.specie].name}</p>
            <Type type1={pokemonVariety.type1} type2={pokemonVariety.type2} />
        </div>
    );
})

export default PokedexBasicInfo;
