import {IonCol, IonContent, IonGrid, IonPage, IonRow, useIonViewDidEnter, useIonViewWillEnter} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Pokedex.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import {pokemonSpecies} from "../../data/pokemon-species";
import {threeHousesNumberPipe} from "../../utils/utils";
import PokedexDetailsModal from "../../components/pokedex-details-modal/PokedexDetailsModal";
import {IPokedexStatus, PokedexStatus} from "../../models/PokedexStatus";
import Loading from "../../components/loading/Loading";


const PokedexPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {userStore} = useRootStore();
    const [loading, setLoading] = useState<boolean>(true);
    const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
    const [selectedPokedexItem, setSelectedPokedexItem] = useState<IPokedexStatus>(new PokedexStatus());
    const [allPokemonPokedex, setallPokemonPokedex] = useState<number[]>([]);

    useEffect(() => {
        setLoading(true);
        const allNumbers: number[] = [];
        for (let i = 1; i <= (userStore.premium ? 721 : 251); i++) {
            allNumbers.push(i);
        }
        setallPokemonPokedex(allNumbers);
        setLoading(false);
    }, [userStore.premium])


    const onCloseModal = () => {
        setModalDetailsOpen(false);
    }

    const openModalDetails = (specieId: number) => {
        if (userStore.user.pokedex[specieId]) {
            setSelectedPokedexItem(userStore.user.pokedex[specieId]);
            setModalDetailsOpen(true);
        }
    }

    useEffect(() => {
        console.log('LOAD LIST EFFECT');
    }, [])

    // const importAllData = async () => {
        // await PokeApi.importAllSpecies();
        // await PokeApi.importAllVarieties();
        // await PokeApi.importEncounters();
        // PokeApi.importAllMoves();
    // }

    return (
        <IonPage id="pokedex-page">
            <PkmnHeader title="Pokédex"/>
            <IonContent className="ion-padding">
                {loading && (<Loading/>)}
                {!loading && (<IonGrid>
                    <IonRow className="pkmn-grid">
                        {/*<IonButton onClick={importAllData}>Import all data</IonButton>*/}
                        {allPokemonPokedex.map(i => (
                                <IonCol key={i} className="pkmn-grid-item" sizeXl="1" sizeLg="2" sizeMd="2" sizeSm="3"
                                        onClick={e => openModalDetails(i)}
                                        sizeXs="4">
                                    {userStore.user.pokedex[i] ? (
                                            <Overworld direction="down" animationActive={false} type="pokemon"
                                                       className={userStore.user.pokedex[i].caught ? '' : 'just-seen-pokedex'}
                                                       spriteUrl={`${pokemonSpecies[i].id}.png`}/>) :
                                        (<div className="empty-item"></div>)
                                    }
                                    <p>#{threeHousesNumberPipe(i)} {userStore.user.pokedex[i] ? pokemonSpecies[i].name : ''}</p>

                                </IonCol>
                            )
                        )}
                    </IonRow>
                </IonGrid>)}
                <PokedexDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal}
                                     pokedexItem={selectedPokedexItem}/>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokedexPage);
