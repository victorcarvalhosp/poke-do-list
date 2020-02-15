import {IonCol, IonContent, IonGrid, IonPage, IonRow, IonButton} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Pokedex.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {useRootStore} from "../../stores/StoreContext";
import Overworld from "../../components/overworld/Overworld";
import {observer} from "mobx-react-lite";
import PkmnHeader from "../../components/pkmn-header/PkmnHeader";
import {pokemonSpecies} from "../../data/pokemon-species";
import {threeHousesNumberPipe} from "../../utils/utils";
import {IPokemonSpecie, PokemonSpecie} from "../../models/PokemonSpecie";
import PokedexDetailsModal from "../../components/pokedex-details-modal/PokedexDetailsModal";
import {IPokedexStatus, PokedexStatus} from "../../models/PokedexStatus";
import {IEvolution} from "../../models/Evolution";

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();


const PokedexPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const {userStore} = useRootStore();
    const [modalDetailsOpen, setModalDetailsOpen] = useState<boolean>(false);
    const [selectedPokedexItem, setSelectedPokedexItem] = useState<IPokedexStatus>(new PokedexStatus());

    var allPokemonPokedex = [];
    for (var i = 1; i <= 251; i++) {
        allPokemonPokedex.push(i);
    }


    const onCloseModal = () => {
        setModalDetailsOpen(false);
    }

    const openModalDetails = (specieId: number) => {
        setSelectedPokedexItem(userStore.user.pokedex[specieId]);
        setModalDetailsOpen(true);
    }

    useEffect(() => {
        console.log('LOAD LIST EFFECT');
    }, [])

    function findEvolutions(chain: any, name: string ) : IEvolution[] {
        const evolutions: IEvolution[] = [];
        if (chain.species.name === name) {
            chain.evolves_to.forEach((e: any) => {
                const urlSplit: [string] = e.species.url.split("/");
                const evolutionId: number = parseInt(urlSplit[urlSplit.length - 2]);
                evolutions.push({to: evolutionId, method: "level_up", minLevel: e.evolution_details[0].min_level || 32})
            })
        } else if(chain.evolves_to[0]){
            return findEvolutions(chain.evolves_to[0], name);
        }
        return evolutions;
    }

    async function importAllSpecies() {
        const response = await P.resource(['/api/v2/pokemon-species/?limit=100&offset=151']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            const varieties: number[] = [];
            let evolutions: IEvolution[] = [];
            const response2 = await P.resource([`/api/v2/pokemon-species/${id}`]);
            let name = response2[0].name;
            let exibitionName = "";
            let description = "";
            response2[0].names.forEach((n: any) => {
                if (n.language.name === 'en') {
                    exibitionName = n.name;
                }
            })

            for (let d of response2[0].flavor_text_entries) {
                if (d.language.name === 'en') {
                    description = d.flavor_text;
                    break;
                }
            }

            response2[0].varieties.forEach((v: any) => {
                const urlSplitVariety: [string] = v.pokemon.url.split("/");
                varieties.push(parseInt(urlSplitVariety[urlSplitVariety.length - 2]));
            })


            species[id] = {id: id, name: name, exibitionName: exibitionName, description: description, varieties: varieties};
            consoleLog = consoleLog + `${id}:{id:${id}, exibitionName: "${exibitionName}", name: "${name}", description: "${description}", varieties: [${varieties.toString()}]},`;
            console.log(consoleLog);
        }
    }


    async function importAllVarieties() {
        const response = await P.resource(['/api/v2/pokemon/?limit=100&offset=151']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            let name = res.name;
            const response2 = await P.resource([`/api/v2/pokemon/${id}`]);

            console.log(response2[0].species.url)
            const urlSplitSpecie: [string] = response2[0].species.url.split("/");
            const specieId: number = parseInt(urlSplitSpecie[urlSplitSpecie.length - 2]);
            const isDefault = response2[0].is_default
            let type1: string = "";
            let type2: string = "";
            let evolutions: IEvolution[] = [];

            response2[0].types.forEach((t: any) => {
                if(t.slot === 1) {
                    type1 = t.type.name;
                }
                if(t.slot === 2) {
                    type2 = t.type.name;
                }
            })

            const responseSpecie = await P.resource([`/api/v2/pokemon-species/${specieId}`]);

            const urlSplitEvolutionChan: [string] = responseSpecie[0].evolution_chain.url.split("/");
            const evolutionChainId: number = parseInt(urlSplitEvolutionChan[urlSplitEvolutionChan.length - 2]);
            console.log('EVOLUTION CHAIN NAME', name);
            const evol = await P.getEvolutionChainById(evolutionChainId);

            evolutions = findEvolutions(evol.chain, name);
            console.log(evolutions.toString());
            let evolStr = "";
            evolutions.forEach(e => {
                evolStr += `{to: ${e.to}, method: "${e.method}", minLevel: ${e.minLevel}},`
            })

            // response2[0].evolutions.forEach((v: any) => {
            //     const urlSplitVariety: [string] = v.pokemon.url.split("/");
            //     varieties.push(parseInt(urlSplitVariety[urlSplitVariety.length - 2]));
            // })

            // species[id] = {id: id, name: name, description: description, varieties: varieties};
            consoleLog = consoleLog + `${id}:{id:${id}, name: "${name}", specie: ${specieId}, is_default: ${isDefault}, type1: "${type1}", ${type2 ? `type2: "${type2}",`: ''} evolutions: [${evolStr}]},`;

            /*
            0: {
            "id": 0,
            "name": "-",
            "specie": 0,
            "is_default": true,
            "type1": "unknown",
        },*/
            console.log(consoleLog);
        }
    }

    async function importEncounters() {
        const tier1 = [];
        const tier2 = [];
        const tier3 = [];
        const tier4 = [];
        const tier5 = [];
        const response = await P.resource(['/api/v2/pokemon-species/?limit=100&offset=151']);
        let consoleLog = "";
        const species: Record<number, IPokemonSpecie> = {};
        for (let res of response[0].results) {
            const urlSplit: [string] = res.url.split("/");
            const id: number = parseInt(urlSplit[urlSplit.length - 2]);
            const response2 = await P.resource([`/api/v2/pokemon-species/${id}`]);
            const catchRate: number = response2[0].capture_rate;
            if(catchRate >= 200) {
                tier1.push(id);
            } else if(catchRate >= 100) {
                tier2.push(id);
            } else if(catchRate >= 45) {
                tier3.push(id);
            } else if(catchRate >= 35) {
                tier4.push(id);
            } else {
                tier5.push(id);
            }
        }

        console.log("TIER 1");

        let tier1Str= "";
        for(let i of tier1){
            tier1Str += `{varietyId: ${i}}, `;
        }
        console.log(tier1Str);

        console.log("TIER 2");

        let tier2Str= "";
        for(let i of tier2){
            tier2Str += `{varietyId: ${i}}, `;
        }
        console.log(tier2Str);

        console.log("TIER 3");
        let tier3Str= "";
        for(let i of tier3){
            tier3Str += `{varietyId: ${i}}, `;
        }
        console.log(tier3Str);

        console.log("TIER 4");

        let tier4Str= "";
        for(let i of tier4){
            tier4Str += `{varietyId: ${i}}, `;
        }
        console.log(tier4Str);

        console.log("TIER 5");

        let tier5Str= "";
        for(let i of tier5){
            tier5Str += `{varietyId: ${i}}, `;
        }
        console.log(tier5Str);
    }

    const importAllData = async () => {
        // await importAllSpecies();
        //  await importAllVarieties();
        // await importEncounters();
    }

    return (
        <IonPage id="pokedex-page">
            <PkmnHeader title="Pokédex"/>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow className="pkmn-grid">
                        {/*<IonButton onClick={importAllData}>Import all data</IonButton>*/}
                        {allPokemonPokedex.map(i => (
                                <IonCol key={i} className="pkmn-grid-item" sizeXl="1" sizeLg="2" sizeMd="2" sizeSm="3"
                                        onClick={e => openModalDetails(i)}
                                        sizeXs="4">
                                    {userStore.user.pokedex[i] ? (<Overworld direction="down" animationActive={false} type="pokemon"
                                                                             className={userStore.user.pokedex[i].caught ? '' : 'just-seen-pokedex'}
                                                                             spriteUrl={`${pokemonSpecies[i].id}.png`}/>) :
                                        (<div className="empty-item"></div>)
                                    }
                                    <p>#{threeHousesNumberPipe(i)} {userStore.user.pokedex[i] ? pokemonSpecies[i].name : ''}</p>

                                </IonCol>
                            )
                        )}
                    </IonRow>
                </IonGrid>
                <PokedexDetailsModal open={modalDetailsOpen} onClickClose={onCloseModal}
                                     pokedexItem={selectedPokedexItem}/>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(PokedexPage);
