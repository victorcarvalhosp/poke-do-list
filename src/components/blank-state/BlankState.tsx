import React, {useEffect} from 'react';
import './BlankState.scss'

const BlankState: React.FunctionComponent<{message?: string}> = ({message}) => {

    return (
        <div className="blank-state">
                <p  style={{'color': 'var(--ion-color-medium)'}}>{message ? message : "There's no items here"}</p>
        </div>
    );
};

export default BlankState;
