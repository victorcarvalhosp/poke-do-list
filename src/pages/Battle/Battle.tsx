import {IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/react';
import React, {Component, useEffect, useState} from 'react';
import './Battle.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import LineTo, {SteppedLineTo, Line} from 'react-lineto';
import {PropTypes} from "@material-ui/core";
import {IPokemon} from "../../models/Pokemon";
import {moves} from "../../data/moves";
import HpBar from "../../components/hp-bar/HpBar";


const BattlePage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {battleStore} = useRootStore();
    const [blockButton, setBlockButton] = useState(false);

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
            <IonHeader class="transparent-header">
                <IonToolbar>

                </IonToolbar>
            </IonHeader>
            <IonContent>
                {battleStore.battleResult}
                <div className="battle-container">
                    {battleStore.player1SelectedPokemons.map((pkmn, i) => (
                        <span key={i}>
                            <div onClick={e => setActivePos(pkmn, i)} style={{cursor: 'pointer'}}
                                 className={`player1-pkmn pos-${i} ${battleStore.activePos === i ? 'active-action' : ''}`}
                                 id={`pkmn-p1-${i}`}>
                                <Overworld spriteUrl={`${pkmn.variety}.png`} direction="up" animationActive={true}
                                           type="pokemon" className={`pkmn-p1-${i} `}
                                           onClick={() => setActivePos(pkmn, i)}/>
                            </div>
                            <div className={`player1-hp pos-${i}`}>
                                <HpBar actualHp={pkmn.actualHp} maxHp={pkmn.hp} id={pkmn.id} showHp={true}/>
                            </div>
                            {!blockButton && (
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
                        </span>
                    ))}
                    {battleStore.player2SelectedPokemons.map((pkmn, i) => (<>
                            <div className={`player2-hp pos-${i}`}>
                                <HpBar actualHp={pkmn.actualHp} maxHp={pkmn.hp} id={pkmn.id} showHp={false}/>
                            </div>
                            <div className={`player2-pkmn pos-${i}`} id={`pkmn-p2-${i}`}>
                                <Overworld key={i} spriteUrl={`${pkmn.variety}.png`} direction="down"
                                           animationActive={true}
                                           type="pokemon" className={`pkmn-p2-${i}`}
                                           onClick={() => setSelectedOpponent(i)}/>

                            </div>
                        </>
                    ))}
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
            </IonContent>
        </IonPage>
    );
});


interface IProps {
}

const HoverTest: React.FunctionComponent<IProps> = ({children}) => {

    const initialState = {
        from: null,
        to: null,
    };
    const [state, setState] = useState(initialState);


    useEffect(() => {

    }, []);

    function clearLine() {
        setState(initialState);
    }

    function drawLine(from: any, to: any) {
        setState({from, to});
    }

    const {from, to} = state;
    const line = from && to ? (
        <LineTo
            from={from}
            to={to}
            fromAnchor="middle right"
            toAnchor="middle left"
            borderWidth={3}
        />
    ) : null;

    return (
        <fieldset id="hover-test">
            <legend>Hover Test</legend>

            Demonstrate how to draw a line from one component to another
            in response to a hover event.

            <Block
                className="hover-A"
                top="80px"
                left="20px"
                color="#00f"
                onMouseOver={() => drawLine('hover-A', 'hover-F')}
                onMouseOut={clearLine}
            >A</Block>
            <Block
                className="hover-B"
                top="140px"
                left="20px"
                color="#0f0"
                onMouseOver={() => drawLine('hover-B', 'hover-E')}
                onMouseOut={clearLine}
            >B</Block>
            <Block
                className="hover-C"
                top="200px"
                left="20px"
                color="#00f"
                onMouseOver={() => drawLine('hover-C', 'hover-D')}
                onMouseOut={clearLine}
            >C</Block>
            <Block
                className="hover-D"
                top="80px"
                left="300px"
                color="#0f0"
                onMouseOver={() => drawLine('hover-D', 'hover-C')}
                onMouseOut={clearLine}
            >D</Block>
            <Block
                className="hover-E"
                top="140px"
                left="300px"
                color="#00f"
                onMouseOver={() => drawLine('hover-E', 'hover-B')}
                onMouseOut={clearLine}
            >E</Block>
            <Block
                className="hover-F"
                top="200px"
                left="300px"
                color="#0f0"
                onMouseOver={() => drawLine('hover-F', 'hover-A')}
                onMouseOut={clearLine}
            >F</Block>
            {line}
        </fieldset>
    );
}


const Block: React.FunctionComponent<{ top: string, left: string, color: string, className: string, onMouseOver(): void, onMouseOut(): void }> = ({children, top, left, color, className, onMouseOver, onMouseOut}) => {
    const style = {top, left, backgroundColor: color};
    return (
        <div
            className={`block ${className}`}
            style={style}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {children}
        </div>
    );
};

export default withRouter(BattlePage);
