import React from 'react';
import './BlankState.scss'
import {IonImg} from "@ionic/react";

const BlankState: React.FunctionComponent<{message?: string}> = ({message}) => {
    return (
        <div className="blank-state">
            {/*<IonImg src="/assets/blank-state-default.svg" />*/}
                <p  style={{'color': 'var(--ion-color-medium)'}}>{message ? message : "There's no items here"}</p>
        </div>
    );
};

export default BlankState;
