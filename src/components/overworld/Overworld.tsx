import React from "react";
import "./Overworld.scss";
import {
  CLOUDINARY_URL_HUMAN_OVERWORLD,
  CLOUDINARY_URL_POKEMON_OVERWORLD,
} from "../../utils/consts";
import { IonImg } from "@ionic/react";

interface IComponentProps {
  spriteUrl: string;
  direction: "up" | "down" | "right" | "left";
  animationActive?: boolean;
  type?: "pokemon" | "human" | "item" | "other";
  className?: string;
  wild?: boolean;
  onClick?(): void;
}

const Overworld: React.FC<IComponentProps> = ({
  spriteUrl,
  direction,
  animationActive,
  type,
  className,
  wild,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const path =
    type && type === "human"
      ? `${CLOUDINARY_URL_HUMAN_OVERWORLD}`
      : type && type === "pokemon"
      ? `${CLOUDINARY_URL_POKEMON_OVERWORLD}`
      : type && type === "item"
      ? "../../assets/overworlds/items/"
      : "";
  return (
    <div
      className={
        `Character Character--walk-${direction ? direction : "down"} ` +
        (className ? className : "")
      }
      onClick={handleClick}
    >
      <img
        alt="pokemon-shadow"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
        className="Character_shadow PixelArtImage"
      />
      <img
        alt="pokemon-sprite"
        src={`${path}${spriteUrl}`}
        className={
          (animationActive ? "active" : "") +
          " PixelArtImage Character_sprite-sheet "
        }
      />
      {wild && (
        <img
          alt="Grass"
          src={`../../assets/images/grass.png`}
          className="PixelArtImage Grass_sprite-sheet grass-wild-pokemon"
        />
      )}
    </div>
  );
};

export default Overworld;
