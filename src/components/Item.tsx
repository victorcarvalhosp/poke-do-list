import {IonItem, IonLabel} from '@ionic/react';
import React, {useState} from 'react';
import '../pages/List.css'
import {ITask} from "../models/Task";
import './Item.scss';
import Overworld from "./overworld/Overworld";
import {useRootStore} from "../stores/StoreContext";
import dayjs from "dayjs";
import {IPokemon, Pokemon} from "../models/Pokemon";

interface IProps {
    item: ITask;
    onClickItem(task: ITask): void;
}

const Item: React.FC<IProps> = ({item, onClickItem}) => {

    const [pokebalAnimation, setPokebalAnimation] = useState(false);
    const [pokebalAnimationFinished, setPokebalAnimationFinished] = useState(false);
    const {taskStore} = useRootStore();

    const finishTask = async (e: any) => {
        setPokebalAnimation(true);
        await taskStore.completeTask(item);
        // setPokebalAnimationFinished(true);
        // await delay(20000);
        setTimeout(() => {
            setPokebalAnimationFinished(true);
        }, 1000);
    }

    if (pokebalAnimationFinished) {
        return <> </>
    } else {
        return <IonItem key={item.id} className={pokebalAnimation ? 'change-background-color task-item' : 'task-item'} >
            <div slot="start">
                <label className="nes-checkbox-label-2x">
                    <input disabled={pokebalAnimation} type="checkbox" className="nes-checkbox"
                           onClick={(e) => finishTask(e)}/>
                    <span></span>
                </label>
            </div>
            <IonLabel onClick={() => onClickItem(item)}>
                {item.title}
                <span className="details">
                {item.project && (
                    <span className={`project-name theme-${item.project?.theme}`} >{item.project.name}</span>)}
                {item.date && (
                    <span className="date">{` ${dayjs(item.date?.toDate()).format('MM/DD')}`}</span>
                )}
                </span>
            </IonLabel>
            <div slot="end" onClick={() => onClickItem(item)}>
                {!pokebalAnimation && item.pokemon && (<Overworld direction="down" animationActive={true} wild={true}
                                                                  spriteUrl={`/assets/overworlds/pokemon/${item.pokemon?.variety}.png`}/>)}
                {pokebalAnimation && (<div className="pokeball-animation"></div>)}
            </div>
        </IonItem>
    }
};

export default Item;
