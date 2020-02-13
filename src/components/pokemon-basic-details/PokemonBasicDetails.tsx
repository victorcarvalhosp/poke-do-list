import React, {useEffect, useState} from 'react';
import './PokemonBasicDetails.scss';
import {observer} from "mobx-react-lite";
import Overworld from "../overworld/Overworld";
import Type from "../type/Type";
import {IPokemon} from "../../models/Pokemon";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import {IPokemonSpecie} from "../../models/PokemonSpecie";
import {pokemonSpecies} from "../../data/pokemon-species";
import useDirection from "../../hooks/useDirection";

interface IProps {
    pokemon: IPokemon;
    wild?: boolean;
}

const PokemonBasicDetails: React.FC<IProps> = observer(({pokemon, wild}) => {

    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const {actualDirection, changeDirection} = useDirection("down");

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
    }, [pokemon])

    return (
        <div onClick={changeDirection} className="pokemon-basic-details">
            <Overworld spriteUrl={`${pokemon?.variety}.png`} direction={actualDirection}
                       animationActive={true} wild={wild ? wild : false}
                       type="pokemon"/>
            <h2>{wild ? 'Wild Pokémon' :pokemon?.name}</h2>
            <p className="level">Lv.{pokemon?.level}</p>
            <Type type1={pokemonVariety.type1}
                  type2={pokemonVariety.type2}/>
        </div>
    )
});

export default PokemonBasicDetails;
