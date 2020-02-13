import {
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
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react';
import {book, build, colorFill, grid} from 'ionicons/icons';
import React, {useState} from 'react';
import './SelectPokemon.scss';
import {Redirect, Route, RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import PageWithSideMenu from "../../components/page-with-side-menu/PageWithSideMenu";
import Overworld from "../../components/overworld/Overworld";
import {pokemonVarieties} from "../../data/pokemon-varieties";
import Type from "../../components/type/Type";
import {observable} from "mobx";
import {observer} from "mobx-react-lite";
import {pokemonSpecies} from "../../data/pokemon-species";
import {useRootStore} from "../../stores/StoreContext";

const SelectPokemonPage: React.FC<RouteComponentProps> = observer(({history}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const initialPokemons = [1, 4, 7];
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonVarieties[initialPokemons[0]]);
    const {pokemonStore, userStore} = useRootStore();
    const [direction, setDirection] = useState<"down" | "up" | "right" | "left">   ("down");

    // var characterElement = document.querySelector(".Character");

    // @ts-ignore
    // characterElement.insertAdjacentHTML( 'beforeend', spritesheetElements );

    // @ts-ignore
    // document.querySelector(".Navigation").insertAdjacentHTML( 'beforeend', navigationElements );

    function setActive(index: number) {
        setActiveIndex(index);
        setSelectedPokemon(pokemonVarieties[initialPokemons[index]]);
        // document.querySelectorAll(`.active`).forEach(node => {
        //     node.classList.remove("active")
        // })
        // document.querySelectorAll(`.index-${index}`).forEach(node => {
        //     node.classList.add("active")
        // })
    }

    // function setDirection(direction: string) {
    //     [
    //         "Character--walk-down",
    //         "Character--walk-right",
    //         "Character--walk-up",
    //         "Character--walk-left"
    //     ].forEach(className => {
    //         // @ts-ignore
    //         characterElement.classList.remove(className)
    //     })


    // @ts-ignore
    //     document.querySelector(".DirectionArrow--active").classList.remove("DirectionArrow--active")
    //
    //     var directionClass = "Character--walk-down";
    //     if (direction === "DOWN") {
    //         // @ts-ignore
    //         document.querySelector(".DirectionArrow-down").classList.add("DirectionArrow--active")
    //     }
    //
    //     if (direction === "LEFT") {
    //         directionClass = "Character--walk-left"
    //         // @ts-ignore
    //         document.querySelector(".DirectionArrow-left").classList.add("DirectionArrow--active")
    //     }
    //     if (direction === "RIGHT") {
    //         directionClass = "Character--walk-right"
    //         // @ts-ignore
    //         document.querySelector(".DirectionArrow-right").classList.add("DirectionArrow--active")
    //     }
    //     if (direction === "UP") {
    //         directionClass = "Character--walk-up"
    //         // @ts-ignore
    //         document.querySelector(".DirectionArrow-up").classList.add("DirectionArrow--active")
    //     }
    //
    //     // @ts-ignore
    //     characterElement.classList.add(directionClass)
    // }

    const selectPokemon = async () => {
        await pokemonStore.selectInitialPokemon(selectedPokemon);
        history.push(Routes.HOME+'/inbox');
    }

    function setPreviousActive() {
        const newActiveIndex = activeIndex > 0 ? activeIndex - 1 : initialPokemons.length - 1;
        setActive(newActiveIndex)
    }

    function setNextActive() {
        const newActiveIndex = activeIndex < initialPokemons.length - 1 ? activeIndex + 1 : 0;
        setActive(newActiveIndex)
    }

    const changeDirection = () => {
        if(direction === "down") {
            setDirection("left");
        } else if(direction === "left"){
            setDirection("up");
        } else if (direction === "up") {
            setDirection("right");
        } else {
            setDirection("down");
        }
    }

    const goToSignup = () => {
        history.push(Routes.SIGNUP)
    }

    if (userStore.user.partnerPokemon) {
        return <Redirect to={Routes.HOME+'/week'}/>;
    }

    return (
        <IonPage id="select-pokemon-page">
            <IonContent>
                <main className="Container">
                    <div className="ion-padding">
                        <h2>Select your first Pokémon</h2>
                        <div className="SpritesheetSlider">
                            <div className={`Character Character--walk-${direction}`} onClick={changeDirection}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/WalkingDemo-Shadow.png"
                                     className="Character_shadow PixelArtImage"/>
                                {initialPokemons.map((id, i) => (
                                    <img src={`/assets/overworlds/pokemon/${id}.png`}
                                         className={`PixelArtImage Character_sprite-sheet ${(i === activeIndex ? 'active ' : ' ')}`}/>
                                ))}
                            </div>


                            <div className="Navigation flex-center">
                                {initialPokemons.map((id, i) => (
                                    <button
                                        className={`NavigationBubble index-${id} ` + (i === activeIndex ? 'active' : '')}
                                        onClick={e => setActive(i)}/>
                                ))}
                            </div>
                            <button className="NextSpritesheetButton NextSpritesheetButton--prev"
                                    onClick={e => setPreviousActive()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 4 7" shape-rendering="crispEdges">
                                    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                                    <path stroke="#434343" d="M3 0h1M2 1h1M1 2h1M0 3h1M1 4h1M2 5h1M3 6h1"/>
                                </svg>
                            </button>
                            <button className="NextSpritesheetButton NextSpritesheetButton--next"
                                    onClick={e => setNextActive()}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 4 7" shape-rendering="crispEdges">
                                    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                                    <path stroke="#434343" d="M0 0h1M1 1h1M2 2h1M3 3h1M2 4h1M1 5h1M0 6h1"/>
                                </svg>
                            </button>
                        </div>

                        <div className="more-details">
                            <h2>{selectedPokemon.name}</h2>
                            <Type type1={selectedPokemon.type1} type2={selectedPokemon.type2}/>
                            <p>{pokemonSpecies[selectedPokemon.id].description}</p>
                        </div>
                    </div>
                    <IonButton className="choose-button" size="large" expand="full" onClick={selectPokemon} disabled={userStore.user.partnerPokemon}>Choose {selectedPokemon.name}!</IonButton>
                </main>
            </IonContent>
        </IonPage>
    );
});

export default withRouter(SelectPokemonPage);
