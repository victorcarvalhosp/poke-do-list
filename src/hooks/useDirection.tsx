import {useState} from "react";

export interface INextDirection {
    down: "up" | "down" | "left" | "right";
    left: "up" | "down" | "left" | "right";
    right: "up" | "down" | "left" | "right";
    up: "up" | "down" | "left" | "right";
}

const nextDirection: INextDirection = {
    down: "left",
    left: "up",
    up: "right",
    right: "down"
}

export default function useDirection(direction?: "up" | "down" | "left" | "right") : ["up" | "down" | "left" | "right", () => void] {
    const [actualDirection, setActualDirection] = useState(direction ? direction : 'down');

    const changeDirection = () => {
        setActualDirection(nextDirection[actualDirection || "down"]);
    }

    return [actualDirection, changeDirection];
};
