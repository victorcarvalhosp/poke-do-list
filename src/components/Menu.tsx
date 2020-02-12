import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppPage} from '../declarations';
import {home, list} from "ionicons/icons";

interface MenuProps extends RouteComponentProps {
}

const Menu: React.FunctionComponent<MenuProps> = () => {

    const appPages: AppPage[] = [
        {
            title: 'My To-do',
            url: '/home',
            icon: {md: home, ios: home}
        },
        // {
        //   title: 'Today',
        //   url: '/home',
        //   icon: home
        // },
        // {
        //   title: 'Next 7 days',
        //   url: '/home',
        //   icon: home
        // },
        // {
        //   title: 'Projects',
        //   url: '/home/list',
        //   icon: list
        // },
        {
            title: 'My Pokémon',
            url: '/pokemon',
            icon: {md: list, ios: list}
        },
        {
            title: 'Pokédex',
            url: '/pokemon',
            icon: {md: list, ios: list}
        },
        // {
        //   title: 'Settings',
        //   url: '/home/list',
        //   icon: list
        // }
    ];

    return (
        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem routerLink={appPage.url} routerDirection="none">
                                    <IonIcon slot="start" ios={appPage.icon.ios} md={appPage.icon.md}/>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    )
};

export default withRouter(Menu);
