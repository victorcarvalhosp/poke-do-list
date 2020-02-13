import {useEffect, useState} from "react";

export default function useDirection(direction?: "up" | "down" | "left" | "right") {
    const [actualDirection, setActualDirection] = useState(direction ? direction : 'down');
    const [playing, setPlaying] = useState(false);

    const changeDirection = () => {
        console.log()
        if(actualDirection === "down") {
            setActualDirection("left");
        } else if(actualDirection === "left"){
            setActualDirection("up");
        } else if (actualDirection === "up") {
            setActualDirection("right");
        } else {
            setActualDirection("down");
        }
    }
    return {actualDirection, changeDirection};
};

