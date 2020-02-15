import React, {useState} from 'react';
import './Overworld.scss'
import useAudio from "../../hooks/useAudio";
import Typing from 'react-typing-animation';
import {IonButtons, IonIcon} from "@ionic/react";
import {arrowUp} from "ionicons/icons";
import {CLOUDINARY_URL_POKEMON_OVERWORLD} from "../../utils/consts";

interface IComponentProps {
    spriteUrl: string;
    direction: "up" | "down" | "right" | "left";
    animationActive?:boolean;
    type?: "pokemon"| "human" | "item";
    className?: string
    wild?: boolean;
}

const Overworld: React.FC<IComponentProps> = ({spriteUrl, direction,animationActive, type, className, wild}) => {
    const path = type && type === "human" ? '../../assets/overworlds/humans/' : type && type === "pokemon" ? `${CLOUDINARY_URL_POKEMON_OVERWORLD}` : type && type === "item" ? '../../assets/overworlds/items/': '';
    return (
            <div className={`Character Character--walk-${direction ? direction: 'down'} ` + (className ? className : '')}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                     className="Character_shadow PixelArtImage"/>
                <img src={`${path}${spriteUrl}`}
                     className={(animationActive ? 'active' : '') + " PixelArtImage Character_sprite-sheet "} />
                {wild && <img src={`../../assets/images/grass.png`}
                              className="PixelArtImage Grass_sprite-sheet grass-wild-pokemon" />}
            </div>
    );
}

export default Overworld;
