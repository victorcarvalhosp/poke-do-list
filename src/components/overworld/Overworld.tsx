import React, {useState} from 'react';
import './Overworld.scss'
import useAudio from "../../hooks/useAudio";
import Typing from 'react-typing-animation';
import {IonButtons, IonIcon} from "@ionic/react";
import {arrowUp} from "ionicons/icons";

interface IComponentProps {
    spriteUrl: string;
    direction: "up" | "down" | "right" | "left";
    animationActive?:boolean;
    type?: "pokemon"| "human" | "item";
    className?: string
}

const Overworld: React.FC<IComponentProps> = ({spriteUrl, direction,animationActive, type, className}) => {
    const path = type && type === "human" ? '../../assets/overworlds/humans/' : type && type === "pokemon" ? '../../assets/overworlds/pokemon/' : type && type === "item" ? '../../assets/overworlds/items/': '';
    return (
            <div className={`Character Character--walk-${direction ? direction: 'down'} ` + (className ? className : '')}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                     className="Character_shadow PixelArtImage"/>
                <img src={`${path}${spriteUrl}`}
                     className={(animationActive ? 'active' : '') + " PixelArtImage Character_sprite-sheet "} />
            </div>
    );
}

export default Overworld;
