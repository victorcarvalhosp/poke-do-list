import React from 'react';
import {IonCol, IonGrid, IonRow, IonSplitPane} from "@ionic/react";
import Menu from "../Menu";
import {AppPage} from "../../declarations";
import {home, list} from "ionicons/icons";
import {IonReactRouter} from "@ionic/react-router";

const PageWithSideMenu: React.FC = ({children}) => {
    return (
        <IonSplitPane contentId="main">
            <Menu />
            {children}
        </IonSplitPane>
    );
};

export default PageWithSideMenu;
