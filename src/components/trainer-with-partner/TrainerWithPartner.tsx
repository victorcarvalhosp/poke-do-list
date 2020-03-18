import React from 'react';
import './TrainerWithPartner.scss';
import {IonButtons, IonIcon, IonToast} from "@ionic/react";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import {arrowUp} from "ionicons/icons";
import Overworld from "../overworld/Overworld";
import useDirection from "../../hooks/useDirection";

const TrainerWithPartner: React.FC = observer(() => {
    const {uiStore, pokemonStore, userStore} = useRootStore();
    const [actualDirection, changeDirection] = useDirection("down");

    return (
        <div id="trainer-with-partner">
            {pokemonStore.showLevelUpAnimation &&
            <div className="level-up"><IonIcon icon={arrowUp}></IonIcon></div>}
            <span onClick={changeDirection}>
                    {userStore.user && userStore.user.uid && userStore.user.character && (
                        <>
                            <Overworld type="human" spriteUrl={userStore.user.character + ".png"}
                                       direction={actualDirection}
                                       animationActive={true} className="header-human"/>
                            < Overworld type="pokemon" spriteUrl={userStore.user.partnerPokemon?.variety + ".png"}
                                        direction={actualDirection}
                                        animationActive={true}
                                        className={`header-pkmn ${pokemonStore.showLevelUpAnimation ? 'level-up-animation' : ''}`}/>
                        </>
                    )}
                </span>
        </div>
    );
});


export default TrainerWithPartner;
