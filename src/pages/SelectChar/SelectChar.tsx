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
import './SelectChar.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";

const SelectCharPage: React.FC<RouteComponentProps> = ({history}) => {

    const goToSignup = () => {
        history.push(Routes.SIGNUP)
    }

    return (
        <main className="Container">
          <div className="Character Character--walk-down">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                 className="Character_shadow PixelArtImage"/>
            <img src={`/assets/overworlds/pokemon/486.png`}
                 className="PixelArtImage Character_sprite-sheet index-7 active" />
          </div>
        </main>
);
};

export default withRouter(SelectCharPage);
