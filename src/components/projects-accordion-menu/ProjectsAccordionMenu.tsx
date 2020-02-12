import React from 'react';
import './ProjectsAccordionMenu.scss';
import {IonItem, IonList} from '@ionic/react';
import {observer} from "mobx-react-lite";
import AccordionItem from "../accordion-item/AccordionItem";
import {useRootStore} from "../../stores/StoreContext";
import { menuController } from '@ionic/core';

interface IProps {
}

const ProjectsAccordionMenu: React.FC<IProps> = observer(() => {

    const {projectStore} = useRootStore();

    const onClickAdd = () => {
        menuController.close();
        projectStore.openModal();
        console.log('add')
    }
    return (<span id="projects-menu">
        <AccordionItem title="Projects" onClickAdd={onClickAdd}>
            <IonList>
                {projectStore.list.map(project => (
                    <IonItem button>
                        {project.name}
                    </IonItem>
                ))}
            </IonList>
        </AccordionItem>
    </span>)
});

export default ProjectsAccordionMenu;
