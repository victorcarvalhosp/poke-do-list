import React from 'react';
import './PokedexBasicInfoVarieties.scss'
import {observer} from "mobx-react-lite";
import {IPokemonVariety} from "../../../../models/PokemonVariety";
import {IPokedexStatus} from "../../../../models/PokedexStatus";
import {IonButton, IonIcon} from "@ionic/react";
import {pokemonVarieties} from "../../../../data/pokemon-varieties";
import {ellipse} from "ionicons/icons";
import PokedexBasicInfo from "../pokedex-basic-info/PokedexBasicInfo";
import {pokemonSpecies} from "../../../../data/pokemon-species";

interface IComponentProps {
    varieties: number[];
    pokedexItem: IPokedexStatus;
    activeVariety: IPokemonVariety;
    setActiveVariety(variety: IPokemonVariety): void;
}

const PokedexBasicInfoVarieties: React.FC<IComponentProps> = observer(({varieties, pokedexItem, setActiveVariety, activeVariety}) => {

    return (<div className="pokedex-basic-info-varieties">
            <PokedexBasicInfo pokemonVariety={activeVariety}/>
            {varieties?.length > 1 && varieties?.map(variety => (<>
            <IonButton fill="clear" onClick={() => setActiveVariety(pokemonVarieties[variety])} color={activeVariety.id === variety ? 'primary': 'medium'} disabled={!pokedexItem.varieties[variety]}>
                <IonIcon slot="icon-only" icon={ellipse}  />
            </IonButton></>))}
            <p>{pokemonSpecies[activeVariety.specie].description}</p>
        </div>
    );
})

export default PokedexBasicInfoVarieties;
