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
import {
    addOutline,
    bookmarkOutline,
    calendar,
    calendarOutline,
    calendarSharp,
    folderOpenOutline, phonePortraitOutline,
    power, settingsOutline
} from "ionicons/icons";
import {Routes} from "../router/Router";
import {useRootStore} from "../stores/StoreContext";
import ProjectsAccordionMenu from "./projects-accordion-menu/ProjectsAccordionMenu";
import ProjectModal from "./project-modal/ProjectModal";
import {auth} from "../firebase";


interface MenuProps extends RouteComponentProps {
}

const Menu: React.FunctionComponent<MenuProps> = ({history}) => {

    const {userStore} = useRootStore();

    const openModalNewProject = () => {
        console.log('OPEN IT');
    }

    const logOut = async () => {
        await userStore.logOut();
        history.push(Routes.SIGNIN_SIGNUP);
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
                        <IonItem routerLink={Routes.POKEDEX} routerDirection="none">
                            <IonIcon slot="start" icon={phonePortraitOutline}/>
                            <IonLabel>Pokédex</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={Routes.POKEMON} routerDirection="none">
                            <IonIcon slot="start" icon={bookmarkOutline}/>
                            <IonLabel>Pokémon</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/inbox`} routerDirection="none">
                            <IonIcon slot="start" icon={folderOpenOutline}/>
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/today`} routerDirection="none">
                            <IonIcon slot="start" icon={calendar}/>
                            <IonLabel>Today</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.HOME}/week`} routerDirection="none">
                            <IonIcon slot="start" icon={calendarOutline}/>
                            <IonLabel>7 days</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <ProjectsAccordionMenu/>

                    {/*<IonMenuToggle autoHide={false}>*/}
                    {/*    <IonItem routerLink={Routes.BATTLE} routerDirection="none">*/}
                    {/*        <IonIcon slot="start" icon={power}/>*/}
                    {/*        <IonLabel>Battle demo</IonLabel>*/}
                    {/*    </IonItem>*/}
                    {/*</IonMenuToggle>*/}

                    <IonMenuToggle autoHide={false}>
                        <IonItem routerLink={`${Routes.SETTINGS}`} routerDirection="none">
                            <IonIcon slot="start" icon={settingsOutline}/>
                            <IonLabel>Settings</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem onClick={logOut} routerDirection="none">
                            <IonIcon slot="start" icon={power}/>
                            <IonLabel>Log out</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    )
};

export default withRouter(Menu);
