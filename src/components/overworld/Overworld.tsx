import React, {useState} from 'react';
import './Overworld.scss'
import useAudio from "../../hooks/useAudio";
import Typing from 'react-typing-animation';

interface IComponentProps {
    spriteUrl: string;
    direction: "up" | "down" | "right" | "left";
    animationActive?:boolean;
}

const Overworld: React.FC<IComponentProps> = ({spriteUrl, direction,animationActive}) => {

    return (
            <div className="Character Character--walk-down">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                     className="Character_shadow PixelArtImage"/>
                <img src={spriteUrl}
                     className={(animationActive ? 'active' : '') + " PixelArtImage Character_sprite-sheet"} />
            </div>
    );
}

export default Overworld;
