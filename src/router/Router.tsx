import {Route} from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import SigninOrSignupPage from "../pages/SigninOrSignup/SigninOrSignup";
import {IonRouterOutlet} from "@ionic/react";
import SigninPage from "../pages/Signin/Signin";
import SignupPage from "../pages/Signup/Signup";
import ListPage from "../pages/List";
import PokemonPage from "../pages/Pokemon/Pokemon";
import SelectPokemonPage from "../pages/SelectPokemon/SelectPokemon";
import ProjectModal from "../components/project-modal/ProjectModal";
import ProjectDetailsPage from "../pages/ProjectDetails/ProjectDetails";
import PokedexPage from "../pages/Pokedex/Pokedex";


export enum Routes {
    SIGNIN_SIGNUP = '/',
    SIGNIN = '/signin',
    SIGNUP = '/signup',
    RECOVER_PASSWORD = '/recover-password',
    SIGNUP_SELECT_POKEMON = '/signup/select-pokemon',
    HOME = '/home',
    POKEMON = '/pokemon',
    PROJECT_DETAILS = '/project',
    POKEDEX = '/pokedex',
}

const Router: React.FC = () => {

    return (

        <IonRouterOutlet id="main">
            {/*<Route path="/" render={() => <Redirect to="/home"/> } exact={true} />*/}
            <Route path={Routes.SIGNIN} component={SigninPage} exact={true}/>
            <Route path={Routes.SIGNUP} component={SignupPage} exact={true}/>
            <Route path={Routes.SIGNIN_SIGNUP} component={SigninOrSignupPage} exact={true}/>
            <PrivateRoute path={Routes.HOME+'/:filter'} component={ListPage}  exact={true}/>
            <PrivateRoute path={Routes.SIGNUP_SELECT_POKEMON} component={SelectPokemonPage}  exact={true}/>
            <PrivateRoute path={Routes.POKEMON} component={PokemonPage}  exact={true}/>
            <PrivateRoute path={Routes.POKEDEX} component={PokedexPage}  exact={true}/>
            <PrivateRoute path={Routes.PROJECT_DETAILS+'/:id'} component={ProjectDetailsPage}  exact={true}/>
        </IonRouterOutlet>
    )
};

export default Router;
