import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonRow,
  useIonViewWillEnter,
} from "@ionic/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Loading from "../../components/loading/Loading";
import Overworld from "../../components/overworld/Overworld";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import PokedexDetailsModal from "../../components/pokedex-details-modal/PokedexDetailsModal";
import { pokemonSpecies } from "../../data/pokemon-species";
import { IPokedexStatus, PokedexStatus } from "../../models/PokedexStatus";
import { useRootStore } from "../../stores/StoreContext";
import { threeHousesNumberPipe } from "../../utils/utils";
import "./Pokedex.scss";
import { IUserStore } from "../../stores/UserStore";

const PokedexPage: React.FC<RouteComponentProps> = observer(({ history }) => {
  const { userStore } = useRootStore();
  const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
  const [selectedPokedexItem, setSelectedPokedexItem] = useState<
    IPokedexStatus
  >(new PokedexStatus());
  const [totalLoaded, setTotalLoaded] = useState(0);

  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(
    false
  );
  const [allPokemonPokedex, setallPokemonPokedex] = useState<number[]>([]);

  function fetchList() {
    const maxPokemonVisible = userStore.premium ? 721 : 251;
    const allNumbers: number[] = [];
    for (
      let i = totalLoaded;
      i < totalLoaded + 50 && i <= maxPokemonVisible;
      i++
    ) {
      allNumbers.push(i + 1);
      setTotalLoaded(i + 1);
      if (i >= maxPokemonVisible) {
        setDisableInfiniteScroll(true);
      }
    }
    setallPokemonPokedex([...allPokemonPokedex, ...allNumbers]);
  }

  const onCloseModal = () => {
    setModalDetailsOpen(false);
  };

  const openModalDetails = (specieId: number) => {
    if (userStore.user.pokedex[specieId]) {
      setSelectedPokedexItem(userStore.user.pokedex[specieId]);
      setModalDetailsOpen(true);
    }
  };

  useIonViewWillEnter(async () => {
    fetchList();
  });

  // const importAllData = async () => {
  // await PokeApi.importAllSpecies();
  // await PokeApi.importAllVarieties();
  // await PokeApi.importEncounters();
  // PokeApi.importAllMoves();
  // }
  async function searchNext($event: CustomEvent<void>) {
    fetchList();
    ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  return (
    <IonPage id="pokedex-page">
      <PkmnHeader title="Pokédex" />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="pkmn-grid">
            {/*<IonButton onClick={importAllData}>Import all data</IonButton>*/}
            {allPokemonPokedex.map((i) => (
              <IonCol
                key={i}
                className="pkmn-grid-item"
                sizeXl="1"
                sizeLg="2"
                sizeMd="2"
                sizeSm="3"
                onClick={(e) => openModalDetails(i)}
                sizeXs="4"
              >
                {userStore.user.pokedex[i] ? (
                  <Overworld
                    direction="down"
                    animationActive={false}
                    type="pokemon"
                    className={
                      userStore.user.pokedex[i].caught
                        ? ""
                        : "just-seen-pokedex"
                    }
                    spriteUrl={`${pokemonSpecies[i].id}.png`}
                  />
                ) : (
                  <div className="empty-item"></div>
                )}
                <p>
                  #{threeHousesNumberPipe(i)}{" "}
                  {userStore.user.pokedex[i] ? pokemonSpecies[i].name : ""}
                </p>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        {!disableInfiniteScroll && <Loading />}
        <IonInfiniteScroll
          threshold="100px"
          disabled={disableInfiniteScroll}
          onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}
        >
          <IonInfiniteScrollContent loadingText="Loading more good Pokémon..."></IonInfiniteScrollContent>
        </IonInfiniteScroll>
        <PokedexDetailsModal
          open={modalDetailsOpen}
          onClickClose={onCloseModal}
          pokedexItem={selectedPokedexItem}
        />
      </IonContent>
    </IonPage>
  );
});

export default withRouter(PokedexPage);
