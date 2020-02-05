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
import './SigninOrSignup.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";

const SigninOrSignupPage: React.FC<RouteComponentProps> = ({history}) => {

  const goToSignin = () => {
    history.push(Routes.SIGNIN)
  }

  const goToSignup = () => {
    history.push(Routes.SIGNUP)
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
          <IonItem onClick={goToSignup}>
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Sign up</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(SigninOrSignupPage);
