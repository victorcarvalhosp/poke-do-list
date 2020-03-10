import React, {useEffect, useState} from 'react';
import './HpBar.scss';
import {observer} from "mobx-react-lite";

const HpBar: React.FC<{ actualHp: number, maxHp: number, id: string, showHp: boolean }> = observer(({actualHp, maxHp, id, showHp}) => {
    const [percent, setPercent] = useState(100);

    function updateHealth() {
        setPercent(actualHp / maxHp * 100);
    }

    useEffect(() => {
        updateHealth();
    }, [actualHp, maxHp]);

//init
    return (
        <div className="hp-bar">
            <svg className="healthbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 38 9"
                 shapeRendering="crispEdges">
                <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                <path stroke="#222034"
                      d="M2 2h1M3 2h32M3 3h1M2 3h1M35 3h1M3 4h1M2 4h1M35 4h1M3  5h1M2 5h1M35 5h1M3 6h32M3"/>
                <path stroke="#323c39" d="M3 3h32"/>
                <path stroke="#494d4c" d="M3 4h32M3 5h32"/>
                <svg x="3" y="2.5" width="32" height="3">
                    <rect id={id} className="healthbar_fill" height="3" width={`${percent}%`}
                          style={{fill: `${percent <= 25 ? '#ec290a' : percent <= 50 ? '#d6ed20' : '#57e705'}`}}/>

                </svg>
            </svg>
            {showHp && (
                <span>
            {actualHp}/{maxHp}
            </span>
            )}
        </div>
    );
});


export default HpBar;
