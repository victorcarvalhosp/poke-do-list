import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Signin.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";

const SigninPage: React.FC<RouteComponentProps> = ({history}) => {

  const goToSignup = () => {
    history.push(Routes.SIGNUP)
  }

  return (
        <IonPage>
          <IonHeader>
          </IonHeader>
          <IonContent>
            <IonList lines="none">
              <IonItem onClick={goToSignup}>
                <IonIcon slot="start" color="medium" icon={book} />
                <IonLabel>Sign up</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
  );
};

export default withRouter(SigninPage);
