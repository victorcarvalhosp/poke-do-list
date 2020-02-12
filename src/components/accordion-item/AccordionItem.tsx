import React, {useRef, useState} from 'react';
import './AccordionItem.scss';
import {IProject} from "../../models/Project";
import {IonButton, IonIcon, IonItem, IonLabel, IonList, IonNote} from '@ionic/react';
import Chevron from '../chevron/Chevron';
import {addOutline} from "ionicons/icons";
import {observer} from "mobx-react-lite";

interface IProps {
    title: string;
    onClickAdd(): void;

}

const AccordionItem: React.FC<IProps> = observer(({title, onClickAdd, children}) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null);

    const onClickAddButton = () => {
        closeAccordion()
        onClickAdd();
    }

    function closeAccordion() {
       setActiveState("");
       setHeightState(`0px`);
       setRotateState("accordion__icon");
    }

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        let scrollHeight = '';
        // @ts-ignore
        if (content && content.current && content.current.scrollHeight) {
            // @ts-ignore
            scrollHeight = content.current.scrollHeight;
        }
        setHeightState(
            setActive === "active" ? "0px" : `${scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (<span id="accordion-item">
        <IonItem button className="accordion__section">
            <IonLabel onClick={toggleAccordion}>{title}
            </IonLabel>
            <IonNote onClick={toggleAccordion} slot="start">
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </IonNote>
            <IonButton fill="clear" slot="end" onClick={onClickAddButton}>
                <IonIcon slot="icon-only" icon={addOutline}/>
            </IonButton>
        </IonItem>
        <div ref={content}
             style={{maxHeight: `${setHeight}`}}
             className="accordion__content">
            <IonList>
                {children}
            </IonList>
        </div>
    </span>)
});

export default AccordionItem;
