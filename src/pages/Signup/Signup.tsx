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
import './Signup.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";

const SignupPage: React.FC<RouteComponentProps> = ({history}) => {

  const goToSignin = () => {
    history.push(Routes.SIGNIN)
  }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem onClick={goToSignin}>
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Sign in</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(SignupPage);
