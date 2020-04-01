import React from 'react';
import './ProjectsAccordionMenu.scss';
import {IonIcon, IonItem} from '@ionic/react';
import {observer} from "mobx-react-lite";
import AccordionItem from "../accordion-item/AccordionItem";
import {useRootStore} from "../../stores/StoreContext";
import {menuController} from '@ionic/core';
import {IProject, Project} from "../../models/Project";
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import {ellipse} from "ionicons/icons";

interface IProps extends RouteComponentProps {
}

const ProjectsAccordionMenu: React.FC<IProps> = observer(({history}) => {

    const {projectStore} = useRootStore();

    const onClickAdd = () => {
        menuController.close();
        projectStore.openModal(new Project());
        console.log('add')
    }

    const goToProject = (project: IProject) => {
        projectStore.setSelected(project);
        menuController.close();
        history.push(`${Routes.PROJECT_DETAILS}/${project.id}`)
    }

    return (<span id="projects-menu">
        <AccordionItem title="Projects" onClickAdd={onClickAdd}>
                {projectStore.list.map(project => (
                    <IonItem key={project.id} button onClick={e => goToProject(project)}>
                        <IonIcon className={`theme-${project.theme}`} slot="start" icon={ellipse} />{project.name}
                    </IonItem>
                ))}
        </AccordionItem>
    </span>)
});

export default withRouter(ProjectsAccordionMenu);
