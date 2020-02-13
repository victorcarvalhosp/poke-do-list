import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle, IonRouterOutlet,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {addOutline, folderOpenOutline} from "ionicons/icons";
import {Routes} from "../router/Router";
import {useRootStore} from "../stores/StoreContext";
import ProjectsAccordionMenu from "./projects-accordion-menu/ProjectsAccordionMenu";
import ProjectModal from "./project-modal/ProjectModal";


interface MenuProps extends RouteComponentProps {
}

const Menu: React.FunctionComponent<MenuProps> = () => {

    const {projectStore} = useRootStore();

    const openModalNewProject = () => {
        console.log('OPEN IT');
    }

    return (
        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/inbox`} routerDirection="none">
                            <IonIcon slot="start" icon={folderOpenOutline}/>
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/today`} routerDirection="none">
                            <IonIcon slot="start" icon={folderOpenOutline}/>
                            <IonLabel>Today</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/week`} routerDirection="none">
                            <IonIcon slot="start" icon={folderOpenOutline}/>
                            <IonLabel>7 days</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={Routes.POKEMON} routerDirection="none">
                            <IonLabel>My Pokémon</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <ProjectsAccordionMenu/>
                </IonList>
            </IonContent>
        </IonMenu>
    )
};

export default withRouter(Menu);
