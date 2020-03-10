import React, {useEffect, useState} from 'react';
import './PokemonBasicDetailsWithStats.scss';
import {observer} from "mobx-react-lite";
import Overworld from "../overworld/Overworld";
import Type from "../type/Type";
import {IPokemon} from "../../models/Pokemon";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import {IPokemonSpecie} from "../../models/PokemonSpecie";
import {pokemonSpecies} from "../../data/pokemon-species";
import useDirection from "../../hooks/useDirection";
import PokemonBasicDetails from "../pokemon-basic-details/PokemonBasicDetails";

interface IProps {
    pokemon: IPokemon;
    wild?: boolean;
}

const PokemonBasicDetailsWithStats: React.FC<IProps> = observer(({pokemon, wild}) => {

    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [actualDirection, changeDirection] = useDirection("down");

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
    }, [pokemon])

    return (
        <span>
            <PokemonBasicDetails pokemon={pokemon}/>
            <div className="pkmn-stats">
                        <div>
                            <p><span>HP:</span> {pokemon.hp}</p>
                            <p><span>ATK:</span> {pokemon.atk}</p>
                            <p><span>DEF:</span> {pokemon.def}</p>
                            <p><span>SPEED:</span> {pokemon.speed}</p>
                        </div>
              </div>
        </span>
    )
});

export default PokemonBasicDetailsWithStats;
