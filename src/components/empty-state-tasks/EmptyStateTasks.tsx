import React, {useEffect} from 'react';
import './EmptyStateTasks.scss'
import pikachu from "../../assets/images/empty-state-pikachu.png";
import {getRandomInt} from "../../utils/utils";
import { IonIcon } from '@ionic/react';
import {arrowForward} from "ionicons/icons";

const EmptyStateTasks: React.FunctionComponent<{ groupType: "week" | "today" | "none" | "all" }> = ({groupType}) => {

    return (
        <div className="empty-state-tasks">
            <p style={{'color': 'var(--ion-color-dark)'}}>{`There are no more tasks  ${groupType === "week" ? 'for this week' : groupType === "today" ? 'for today' : 'here'}`}</p>
            <div className="image-area">
                <div className={`monster monster-${getRandomInt(1, 5)}`}></div>
            </div>
            <p style={{'color': 'var(--ion-color-dark)'}}>{`Enjoy your  ${groupType === "week" ? 'week!' : groupType === "today" ? 'day!' : 'free time!'}`}</p>
            <p style={{color: 'var(--ion-color-medium)', position: "absolute", bottom: '8px', right: '74px'}}>Or add a new task clicking here <IonIcon icon={arrowForward}></IonIcon> </p>
        </div>
    );
};

export default EmptyStateTasks;
