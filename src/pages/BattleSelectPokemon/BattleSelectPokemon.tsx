import {
    IonBackButton,
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
    IonPage, IonSpinner,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonFabButton,
    IonFab
} from '@ionic/react';
import {arrowUp, book, build, colorFill, grid, people, person, search, star} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import './BattleSelectPokemon.scss';
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";
import {useForm} from "react-hook-form";
import {auth, firestore} from "../../firebase";
import {IPokemon, Pokemon} from "../../models/Pokemon";
import {useRootStore} from "../../stores/StoreContext";
import Item from "../../components/Item";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import PokemonDetailsModal from "../../components/pokemon-details-modal/PokemonDetailsModal";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import PkmnList from "../../components/pkmn-list/PkmnList";
import BattleSelectPokemonDetailsModal from "./pokemon-details-modal/BattleSelectPokemonDetailsModal";
import PkmnGridItem from "../../components/pkmn-list/pkmn-grid-item/PkmnGridItem";
import Type from "../../components/type/Type";


const BattleSelectPokemonPage: React.FC<RouteComponentProps> = observer(({history}) => {

        const {pokemonStore, battleStore} = useRootStore();
        const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
        const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>(new Pokemon());
        const [selectedPos, setSelectedPos] = useState<number>(0);

        const onCloseModal = () => {
            setModalDetailsOpen(false);
        }

        const openModalDetailsSelected = () => {
            setSelectedPokemon(battleStore.player1SelectedPokemons[selectedPos]);
            setModalDetailsOpen(true);
        }

        const openModalDetails = (pokemonSelected: IPokemon) => {
            setSelectedPokemon(pokemonSelected);
            setModalDetailsOpen(true);
        }

        useEffect(() => {
            console.log('LOAD LIST EFFECT');
            pokemonStore.loadList();
            battleStore.clearPlayer1SelectedPokemons();
        }, []);

        const handleSelectPokemon = (pokemonSelected: IPokemon) => {
            battleStore.player1SelectedPokemons.filter(pkmn => pkmn.id === pokemonSelected.id).length > 0 ? openModalDetails(pokemonSelected) : battleStore.setPokemonPos(selectedPos, pokemonSelected);

            for (let i = 0; i <= 2; i++) {
                if (!battleStore.player1SelectedPokemons[i].id) {
                    setSelectedPos(i);
                    break;
                }
            }
        }

        const goToBattle = () => {
            battleStore.initBattle();
            history.push(Routes.BATTLE);
        }

// if (!battleStore.opponentInfo || battleStore.opponentInfo.pokemon.length === 0) {
//     return <Redirect to={Routes.HOME + '/week'}/>
// }

        return (
            <IonPage id="battle-select-pokemon-page">
                <IonHeader className="pkmn-header">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton color="primary" defaultHref={Routes.EXPLORE}/>
                        </IonButtons>
                        <IonTitle>Select Pokémon's</IonTitle>
                        <IonButtons slot="end">
                            <IonButton
                                disabled={battleStore.player1SelectedPokemons.filter(pkmn => pkmn.id != '').length < 3}
                                onClick={goToBattle}>Go To Battle!</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent
                    className="ion-padding">
                    <span className="sub-title">Opponent:</span>
                    <IonGrid>
                        <IonRow className="ion-align-items-center ion-justify-content-center">
                            <div className="opponent-info">
                                {battleStore.opponentInfo.sprite && (
                                    <Overworld spriteUrl={battleStore.opponentInfo.sprite || "invisible.png"}
                                               direction="down" type="human"
                                               animationActive={true}/>
                                )}
                                <p>{
                                    battleStore.opponentInfo.name
                                }</p>
                                {
                                    battleStore.opponentInfo.maxLevel && (
                                        <span>Max lv: {battleStore.opponentInfo.maxLevel}</span>)
                                }
                                {
                                    battleStore.opponentInfo.type && (<Type type1={battleStore.opponentInfo.type}/>)
                                }
                            </div>
                        </IonRow>
                    </IonGrid>
                    <div className="selected-pokemons">
                        <span className="sub-title">Your Pokémon's:</span>
                        <IonGrid>
                            <IonRow className="ion-align-items-center ion-justify-content-center">
                                {[0, 1, 2].map(i => (
                                    <PkmnGridItem pkmn={battleStore.player1SelectedPokemons[i]}
                                                  handleItemClick={() => setSelectedPos(i)}
                                                  className={selectedPos === i ? 'selected' : ''}/>
                                ))}
                            </IonRow>
                        </IonGrid>
                    </div>
                    <PkmnList list={battleStore.myPokemonListWithMaxLevel} handleItemClick={handleSelectPokemon}/>
                    <BattleSelectPokemonDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal}
                                                     pokemon={selectedPokemon} position={selectedPos}
                    />
                    {battleStore.player1SelectedPokemons[selectedPos].id && (
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton onClick={e => openModalDetailsSelected()}>
                                <IonIcon icon={search}/>
                            </IonFabButton>
                        </IonFab>
                    )}
                </IonContent>
            </IonPage>
        );
    })
;

export default withRouter(BattleSelectPokemonPage);
