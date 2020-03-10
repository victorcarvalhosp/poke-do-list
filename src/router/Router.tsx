import {Redirect, Route} from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import SigninOrSignupPage from "../pages/SigninOrSignup/SigninOrSignup";
import {IonRouterOutlet} from "@ionic/react";
import SigninPage from "../pages/Signin/Signin";
import SignupPage from "../pages/Signup/Signup";
import ListPage from "../pages/List";
import PokemonPage from "../pages/Pokemon/Pokemon";
import SelectPokemonPage from "../pages/SelectPokemon/SelectPokemon";
import ProjectDetailsPage from "../pages/ProjectDetails/ProjectDetails";
import PokedexPage from "../pages/Pokedex/Pokedex";
import BattlePage from "../pages/Battle/Battle";
import SettingsPage from "../pages/Settings/Settings";
import ExplorePage from "../pages/Explore/Explore";
import BattleSelectPokemonPage from "../pages/BattleSelectPokemon/BattleSelectPokemon";


export enum Routes {
    SIGNIN_SIGNUP = '/init',
    SIGNIN = '/signin',
    SIGNUP = '/signup',
    RECOVER_PASSWORD = '/recover-password',
    SIGNUP_SELECT_POKEMON = '/signup/select-pokemon',
    HOME = '/home',
    POKEMON = '/pokemon',
    PROJECT_DETAILS = '/project',
    POKEDEX = '/pokedex',
    BATTLE_SELECT_POKEMON = '/battle-select-pokemon',
    BATTLE = '/battle',
    SETTINGS = '/settings',
    EXPLORE = '/explore'

}

const Router: React.FC = () => {

    return (
        <IonRouterOutlet id="main">
            <Route path="/" render={() => <Redirect to={Routes.HOME + '/week'}/>} exact={true}/>
            <Route path={Routes.SIGNIN} component={SigninPage} exact={true}/>
            <Route path={Routes.SIGNUP} component={SignupPage} exact={true}/>
            <Route path={Routes.SIGNIN_SIGNUP} component={SigninOrSignupPage} exact={true}/>
            <PrivateRoute path={Routes.HOME + '/:filter'} component={ListPage} exact={true}/>
            <PrivateRoute path={Routes.SIGNUP_SELECT_POKEMON} component={SelectPokemonPage} exact={true}/>
            <PrivateRoute path={Routes.POKEMON} component={PokemonPage} exact={true}/>
            <PrivateRoute path={Routes.POKEDEX} component={PokedexPage} exact={true}/>
            <PrivateRoute path={Routes.PROJECT_DETAILS + '/:id'} component={ProjectDetailsPage} exact={true}/>
            <PrivateRoute path={Routes.BATTLE} component={BattlePage} exact={true}/>
            <PrivateRoute path={Routes.SETTINGS} component={SettingsPage} exact={true}/>
            <PrivateRoute path={Routes.EXPLORE} component={ExplorePage} exact={true}/>
            <PrivateRoute path={Routes.BATTLE_SELECT_POKEMON} component={BattleSelectPokemonPage} exact={true}/>
        </IonRouterOutlet>
    )
};

export default Router;
