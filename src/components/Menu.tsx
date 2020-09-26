import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Menu.scss";
import { Routes } from "../router/Router";
import { useRootStore } from "../stores/StoreContext";
import ProjectsAccordionMenu from "./projects-accordion-menu/ProjectsAccordionMenu";
import TrainerWithPartner from "./trainer-with-partner/TrainerWithPartner";
import { observer } from "mobx-react-lite";
import pokedex_on from "../assets/images/menu_pokedex_on.png";
import pokemon_on from "../assets/images/menu_pokemon_on.png";
import explore_on from "../assets/images/menu_explore_on.png";
import today_on from "../assets/images/menu_today_on.png";
import week_on from "../assets/images/menu_week_on.png";
import inbox_on from "../assets/images/menu_inbox_on.png";
import settings_on from "../assets/images/menu_settings_on.png";
import logout_on from "../assets/images/menu_logout_on.png";

interface MenuProps extends RouteComponentProps {}

const Menu: React.FunctionComponent<MenuProps> = observer(({ history }) => {
  const { userStore } = useRootStore();

  const logOut = async () => {
    await userStore.logOut();
    history.push(Routes.SIGNIN_SIGNUP);
  };

  return (
    <IonMenu contentId="main" type="overlay" id="side-menu">
      <IonHeader>
        <IonToolbar>
          <div slot="start">
            <TrainerWithPartner />
          </div>
          <div className="trainer-details">
            <p className="trainer-name">
              {userStore.user.name}
              {userStore.premium && <span>(premium)</span>}
            </p>
            <p className="pkmn-name">
              <span>Partner:</span>
              {userStore.user.partnerPokemon?.name}
            </p>
            <p className="pkmn-level">
              Lv.: {userStore.user.partnerPokemon?.level}
            </p>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={Routes.POKEDEX} routerDirection="none">
              <img
                alt="Pokédex"
                className="icon"
                slot="start"
                src={pokedex_on}
              />
              <IonLabel>Pokédex</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={Routes.POKEMON} routerDirection="none">
              <img
                alt="Pokémon"
                className="icon"
                slot="start"
                src={pokemon_on}
              />
              <IonLabel>Pokémon</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={`${Routes.EXPLORE}`} routerDirection="none">
              <img
                alt="Explore"
                className="icon"
                slot="start"
                src={explore_on}
              />
              <IonLabel>Explore</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={`${Routes.HOME}/today`} routerDirection="none">
              <img alt="Today" className="icon" slot="start" src={today_on} />
              <IonLabel>Today</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={`${Routes.HOME}/week`} routerDirection="none">
              <img alt="7 days" className="icon" slot="start" src={week_on} />
              <IonLabel>7 days</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={`${Routes.HOME}/inbox`} routerDirection="none">
              <img alt="Inbox" className="icon" slot="start" src={inbox_on} />
              <IonLabel>Inbox</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <ProjectsAccordionMenu />

          {/*<IonMenuToggle autoHide={false}>*/}
          {/*    <IonItem routerLink={Routes.BATTLE} routerDirection="none">*/}
          {/*        <IonIcon slot="start" icon={power}/>*/}
          {/*        <IonLabel>Battle demo</IonLabel>*/}
          {/*    </IonItem>*/}
          {/*</IonMenuToggle>*/}

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink={`${Routes.SETTINGS}`} routerDirection="none">
              <img
                alt="Settings"
                className="icon"
                slot="start"
                src={settings_on}
              />
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem onClick={logOut} routerDirection="none">
              <img
                alt="Log out"
                className="icon"
                slot="start"
                src={logout_on}
              />
              <IonLabel>Log out</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
});

export default withRouter(Menu);
