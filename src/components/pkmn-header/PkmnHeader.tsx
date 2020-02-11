import React, {useState} from 'react';
import './PkmnHeader.scss';
import {observer} from "mobx-react-lite";
import {IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import Overworld from "../overworld/Overworld";
import {useRootStore} from "../../stores/StoreContext";
import {arrowUp} from "ionicons/icons";

interface IProps {
}

const PkmnHeader: React.FC<IProps> = observer(({}) => {

    const {taskStore, userStore, pokemonStore} = useRootStore();
    const [direction, setDirection] = useState<"up" | "down" | "left" | "right">("down");

    const changeDirection = () => {
        if(direction === "down") {
            setDirection("left");
        } else if(direction === "left"){
            setDirection("up");
        } else if (direction === "up") {
            setDirection("right");
        } else {
            setDirection("down");
        }
    }

    return (<IonHeader className="pkmn-header">
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton/>
            </IonButtons>
            <IonTitle>To-do</IonTitle>
            <IonButtons slot="end" onClick={changeDirection}>
                {pokemonStore.showLevelUpAnimation && <div className="level-up"><IonIcon icon={arrowUp} ></IonIcon></div>}
                <Overworld type="human" spriteUrl={userStore.user.character + ".png"} direction={direction}
                           animationActive={true} className="header-human" />
                <Overworld type="pokemon" spriteUrl={userStore.user.partnerPokemon?.variety + ".png"} direction={direction}
                           animationActive={true} className={`header-pkmn ${pokemonStore.showLevelUpAnimation ? 'level-up-animation' : ''}`}/>
            </IonButtons>
        </IonToolbar>
    </IonHeader>)
});

export default PkmnHeader;
