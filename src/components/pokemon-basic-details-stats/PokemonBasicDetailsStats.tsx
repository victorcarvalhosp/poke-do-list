import React, {useEffect, useState} from 'react';
import './PokemonBasicDetailsStats.scss';
import {observer} from "mobx-react-lite";
import {IPokemon} from "../../models/Pokemon";
import {IPokemonVariety} from "../../models/PokemonVariety";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import useDirection from "../../hooks/useDirection";
import PokemonBasicDetails from "../pokemon-basic-details/PokemonBasicDetails";
import {IonGrid, IonRow, IonCol} from '@ionic/react';
import {moves} from "../../data/moves";
import Type from "../type/Type";

interface IProps {
    pokemon: IPokemon;
    wild?: boolean;
}

const PokemonBasicDetailsStats: React.FC<IProps> = observer(({pokemon, wild}) => {

    const [pokemonVariety, setPokemonVariety] = useState<IPokemonVariety>(pokemonVarieties[pokemon.variety]);
    const [actualDirection, changeDirection] = useDirection("down");

    useEffect(() => {
        setPokemonVariety(pokemonVarieties[pokemon.variety]);
    }, [pokemon])

    return (
        <>
            <span id="pokemon-basic-details-stats">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-align-self-end">
                                    <h5>Stats:</h5>
                                <div className="stats">
                                    <p><span>HP:</span> {pokemon.hp}</p>
                                    <p><span>ATK:</span> {pokemon.atk}</p>
                                    <p><span>DEF:</span> {pokemon.def}</p>
                                    <p><span>SPEED:</span> {pokemon.speed}</p>
                                </div>
                        </IonCol>
                        <IonCol>
                            <h5>Moves:</h5>
                            <div>
                                {pokemon.moves && pokemon.moves.map(moveId => (
                                    <div className="moves">
                                        <p><span>{moves[moveId].name}</span> {moves[moveId].power}</p>
                                        <Type type1={moves[moveId].type}></Type>
                                    </div>
                                ))}
                            </div>
                        </IonCol>

                    </IonRow>
                </IonGrid>
        </span>
        </>
    )
});

export default PokemonBasicDetailsStats;
