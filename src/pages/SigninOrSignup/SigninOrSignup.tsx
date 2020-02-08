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
import {book, build, colorFill, grid} from 'ionicons/icons';
import React from 'react';
import './SigninOrSignup.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import NesDialog from "../../components/nes-dialog/NesDialog";

const SigninOrSignupPage: React.FC<RouteComponentProps> = ({history}) => {

    const goToSignin = () => {
        history.push(Routes.SIGNIN)
    }

    const goToSignup = () => {
        history.push(Routes.SIGNUP)
    }

    const openModalConfirmationNewAccount = () => {
      const modalEl: any = document.getElementById('dialog-default');
      modalEl.showModal()
    }

    return (
        <IonPage id="signin-or-signup-page">
            <IonHeader>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="nes-container is-rounded">
                    <a onClick={openModalConfirmationNewAccount}>New Account</a><br/>
                    <a onClick={goToSignin}>Continue</a>
                </div>
              <NesDialog id="dialog-default" >
                <form method="dialog">
                  {/*<p className="title">Continue?</p>*/}
                  <p>Are you sure you want to create a new account?</p>
                  <menu className="dialog-menu">
                    <button className="nes-btn">Cancel</button>
                    <button className="nes-btn is-primary" onClick={goToSignup}>Confirm</button>
                  </menu>
                </form>
              </NesDialog>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(SigninOrSignupPage);
