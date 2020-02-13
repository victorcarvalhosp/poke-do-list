import React, {useEffect} from 'react';
import './ProjectsAccordionMenu.scss';
import {IonItem, IonList} from '@ionic/react';
import {observer} from "mobx-react-lite";
import AccordionItem from "../accordion-item/AccordionItem";
import {useRootStore} from "../../stores/StoreContext";
import { menuController } from '@ionic/core';
import {IProject} from "../../models/Project";
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";

interface IProps extends RouteComponentProps {
}

const ProjectsAccordionMenu: React.FC<IProps> = observer(({history}) => {

    const {projectStore} = useRootStore();

    const onClickAdd = () => {
        menuController.close();
        projectStore.openModal();
        console.log('add')
    }

    const goToProject = (project: IProject) => {
        projectStore.setSelected(project);
        menuController.close();
        history.push(`${Routes.PROJECT_DETAILS}/${project.id}`)
    }

    return (<span id="projects-menu">
        <AccordionItem title="Projects" onClickAdd={onClickAdd}>
            <IonList>
                {projectStore.list.map(project => (
                    <IonItem key={project.id} button onClick={e => goToProject(project)}>
                        {project.name}
                    </IonItem>
                ))}
            </IonList>
        </AccordionItem>
    </span>)
});

export default withRouter(ProjectsAccordionMenu);
