import {Route} from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import SigninOrSignupPage from "../pages/SigninOrSignup/SigninOrSignup";
import HomePage from "../pages/Home";
import {IonRouterOutlet} from "@ionic/react";
import SigninPage from "../pages/Signin/Signin";
import SignupPage from "../pages/Signup/Signup";
import SelectCharPage from "../pages/SelectChar/SelectChar";


export enum Routes {
    SIGNIN_SIGNUP = '/',
    SIGNIN = '/signin',
    SIGNUP = '/signup',
    RECOVER_PASSWORD = '/recover-password',
    HOME = '/home',
    SELECT_CHAR = '/select-char',

}

const Router: React.FC = () => {

    return (

        <IonRouterOutlet id="main">
            {/*<Route path="/" render={() => <Redirect to="/home"/> } exact={true} />*/}
            <Route path={Routes.SIGNIN} component={SigninPage} exact={true}/>
            <Route path={Routes.SIGNUP} component={SignupPage} exact={true}/>
            <Route path={Routes.SIGNIN_SIGNUP} component={SigninOrSignupPage} exact={true}/>
            <PrivateRoute path={Routes.HOME} component={HomePage}  exact={true}/>
            <PrivateRoute path={Routes.SELECT_CHAR} component={SelectCharPage}  exact={true}/>
        </IonRouterOutlet>
    )
};

export default Router;
