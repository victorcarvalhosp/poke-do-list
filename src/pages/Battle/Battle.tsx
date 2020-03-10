import {IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Battle.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import LineTo from 'react-lineto';
import {IPokemon} from "../../models/Pokemon";
import {moves} from "../../data/moves";
import HpBar from "../../components/hp-bar/HpBar";


const BattlePage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {battleStore, userStore} = useRootStore();
    const [blockButton, setBlockButton] = useState(false);

    useEffect(() => {
        battleStore.initBattle();


        //ADDED THIS BECAUSE OF A STRANGE BUG WHERE THE LINE DOESN'T RENDER ON THE FIRST TURN
        setTimeout(() => {
            // setActivePos(battleStore.player1SelectedPokemons[0], 0);
            const initOpponentPosSelected = battleStore.player2SelectedPokemons[1].actualHp > 0 ? 1 : 0;
            setSelectedOpponent(initOpponentPosSelected);
        }, 500)
    }, []);


    const setActivePos = (pkmn: IPokemon, i: number) => {
        console.log('SET ACTIVE', i);
        battleStore.setActivePos(i);
        battleStore.player1TurnAction[battleStore.activePos].move = pkmn.moves[0];

        // if (!battleStore.player1TurnAction[i]) {
        //     battleStore.player1TurnAction[i] = new BattleAction(1);
        //     battleStore.player1TurnAction[i].pos = i;
        //     battleStore.player1TurnAction[i].move = 0;
        //     battleStore.player1TurnAction[i].opponentPos = 0;
        // }

    }

    const setSelectedOpponent = (i: number) => {
        console.log('SET ACTIVE Opponent', i);
        battleStore.setOpponentsSelectPos(i);
        battleStore.player1TurnAction[battleStore.activePos].opponentPos = i;
    }

    const handleReady = async () => {
        setBlockButton(true);
        await battleStore.runTurn();
        setBlockButton(false);
    }

    return (
        <IonPage id="battle-page">
            <IonContent>
                {battleStore.battleResult}
                <div className="battle-area">
                    <div className="trainer-player-2">
                        {battleStore.opponentInfo.sprite && (
                            <Overworld spriteUrl={`${battleStore.opponentInfo.sprite}`} direction="down"
                                       animationActive={true}
                                       type="human"/>)}
                    </div>
                    <div className="battle-arena">
                        {battleStore.player2SelectedPokemons.map((pkmn, i) => (
                            pkmn.actualHp > 0 && (<>
                                <div className={`player2-hp pos-${i}`}>
                                    <HpBar actualHp={pkmn.actualHp} maxHp={pkmn.hp} id={pkmn.id} showHp={false}/>
                                </div>
                                <div className={`player2-pkmn pos-${i} ${pkmn.gigantamax ? 'gigantamax' : ''}`}
                                     id={`pkmn-p2-${i}`}>
                                    <Overworld key={i} spriteUrl={`${pkmn.variety}.png`} direction="down"
                                               animationActive={true}
                                               type="pokemon" className={`pkmn-p2-${i}`}
                                               onClick={() => setSelectedOpponent(i)}/>

                                </div>
                            </>)
                        ))}
                        {battleStore.player1SelectedPokemons.map((pkmn, i) => (
                            pkmn.actualHp > 0 && (<span key={i}>
                            <div onClick={e => setActivePos(pkmn, i)} style={{cursor: 'pointer'}}
                                 className={`player1-pkmn pos-${i} ${battleStore.activePos === i && !blockButton ? 'active-action' : ''}`}
                                 id={`pkmn-p1-${i}`}>
                                <Overworld spriteUrl={`${pkmn.variety}.png`} direction="up" animationActive={true}
                                           type="pokemon" className={`pkmn-p1-${i} `}
                                           onClick={() => setActivePos(pkmn, i)}/>
                            </div>
                            <div className={`player1-hp pos-${i}`}>
                                <HpBar actualHp={pkmn.actualHp} maxHp={pkmn.hp} id={pkmn.id} showHp={true}/>
                            </div>
                                {!blockButton && battleStore.player1TurnAction[i] && (
                                    <LineTo
                                        borderColor={'#989aa2'}
                                        borderStyle={'dashed'}
                                        className={'line-to-pokemon'}
                                        from={`pkmn-p1-${i}`}
                                        to={`pkmn-p2-${battleStore.player1TurnAction[i].opponentPos}`}
                                        fromAnchor="middle middle"
                                        toAnchor="middle bottom"
                                        borderWidth={3}
                                    />
                                )}
                        </span>)
                        ))}
                    </div>
                    <div className="trainer-player-1">
                        <div style={{margin: '0 auto', width: '350px', display: 'block'}}>
                            <Overworld spriteUrl={`${userStore.user.character}.png`} direction="up"
                                       animationActive={true}
                                       type="human"/>
                            <div className="nes-balloon from-right inverse">
                                {!blockButton && battleStore.player1SelectedPokemons[battleStore.activePos] && (
                                    <div>
                                        <p>
                                            {battleStore.player1SelectedPokemons[battleStore.activePos].name}
                                        </p>
                                        {battleStore.player1SelectedPokemons[battleStore.activePos].moves.map(move => (
                                            <p>{moves[move].name}</p>
                                        ))}
                                    </div>
                                )}
                                <button onClick={handleReady} disabled={blockButton}> READY!</button>
                            </div>
                        </div>
                    </div>
                    {blockButton && (
                        <p>{battleStore.attackMessage}</p>
                    )}
                    {!blockButton && battleStore.player1SelectedPokemons[battleStore.activePos] && (
                        <div>
                            <p>
                                {battleStore.player1SelectedPokemons[battleStore.activePos].name}
                            </p>
                            ATTACK:
                            {battleStore.player1SelectedPokemons[battleStore.activePos].moves.map(move => (
                                <p>{moves[move].name}</p>
                            ))}
                        </div>
                    )}
                    <button onClick={handleReady} disabled={blockButton}> READY!</button>
                </div>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(BattlePage);
