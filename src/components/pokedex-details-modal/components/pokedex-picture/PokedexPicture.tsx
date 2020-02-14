import React from 'react';
import './PokedexPicture.scss'
import {observer} from "mobx-react-lite";
import {CLOUDINARY_URL_POKEDEX} from "../../../../utils/consts";
import {IPokemonVariety} from "../../../../models/PokemonVariety";

interface IComponentProps {
    pokemonVariety: IPokemonVariety;
}

const PokedexPicture: React.FC<IComponentProps> = observer(({pokemonVariety}) => {

    return (<>
            <img src={`${CLOUDINARY_URL_POKEDEX}${pokemonVariety.id}.png`}/>
        </>
    );
})

export default PokedexPicture;
