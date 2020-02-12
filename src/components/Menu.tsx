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
                        <IonItem routerLink={Routes.HOME} routerDirection="none">
                            <IonIcon slot="start" icon={folderOpenOutline}/>
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={Routes.POKEMON} routerDirection="none">
                            <IonLabel>My Pokémon</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonItem>
                        <IonLabel>Projects</IonLabel>
                        <div slot="end" >

                        <IonButton fill="clear"> <IonIcon slot="icon-only" icon={folderOpenOutline}/>
                        </IonButton>

                        <IonButton  fill="clear"> <IonIcon slot="icon-only" icon={addOutline}/>
                        </IonButton>
                        </div>
                    </IonItem>
                        <ProjectsAccordionMenu />
                </IonList>
            </IonContent>
        </IonMenu>
    )
};

export default withRouter(Menu);
