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
      icon: home
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
      icon: list
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
                                    <IonIcon slot="start" icon={appPage.icon}/>
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
