import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCheckbox
} from '@ionic/react';
import {
    americanFootball,
    basketball,
    beer,
    bluetooth,
    boat,
    build,
    flask,
    football,
    paperPlane,
    wifi
} from 'ionicons/icons';
import React, {useState} from 'react';
import sprite from '../assets/overworlds/pokemon/486.png';
import '../pages/List.css'
import {ITask} from "../models/Task";
import './Item.scss';
import {delay} from "../utils/delay";

interface IProps {
    item: ITask;
}

const Item: React.FC<IProps> = ({item}) => {

    const [pokebalAnimation, setPokebalAnimation] = useState(false);
    const [pokebalAnimationFinished, setPokebalAnimationFinished] = useState(false);

    const finishTask = async (e: any) => {
        console.log(e.target.value);
        setPokebalAnimation(true);
        console.log('FINISH TASK', item);
        // await delay(20000);
        setTimeout(() => {
            setPokebalAnimationFinished(true);
        }, 1600);
    }

    if (pokebalAnimationFinished) {
        return <> </>
    } else {
        return <IonItem key={item.id} className={pokebalAnimation ? 'change-background-color task-item' : 'task-item'} >
            <div slot="start">
                <label className="nes-checkbox-label-2x">
                    <input disabled={pokebalAnimation} type="checkbox" className="nes-checkbox" onClick={(e) => finishTask(e)}/>
                    <span></span>
                </label>
            </div>
                {item.title}
                <div slot="end">
                    <div className="sprite">
                        <div className="clipwrapper">
                            {!pokebalAnimation && (<img className="clip"
                                                        src={`/assets/overworlds/pokemon/${item.pokemon.nationalDexNumber}.png`}/>)}
                            {pokebalAnimation && (<div className="pokeball-animation"></div>)}
                        </div>
                    </div>
                </div>
        </IonItem>
    }
};

export default Item;
