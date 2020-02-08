import {IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonBackButton} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import './Signup.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import professorOak from "../../assets/images/professor.png";
import TextContainer from "../../components/text-container/TextContainer";
import useAudio from "../../hooks/useAudio";
import SignupFormModal from "./SignupFormModal";
import {useRootStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";

const SignupPage: React.FC<RouteComponentProps> = observer(({history}) => {


    const [toggleAudio, playAudio, stopAudio] = useAudio("/audio/musics/introduction.mp3");
    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const {userStore} = useRootStore();

    const FINAL_STEP = 12;
    // const OPEN_SIGNUP_STEP = 10;
    const OPEN_SIGNUP_STEP = 2;

    const goToSignin = () => {
        history.push(Routes.SIGNIN)
    }

    const onCloseModal = () => {
        setOpenModal(false);
        history.push(Routes.SIGNIN_SIGNUP);
    }

    const afterSignup = () => {
        setOpenModal(false);
        let nextStep = step + 1;
        setStep(nextStep);
        // history.push(Routes.SIGNIN_SIGNUP);
    }

    useEffect(() => {
        // playAudio();
    }, []);

    const onClickContinue = async () => {
        console.log('GO TO NEXT' + step);
        if (step === FINAL_STEP) {
            await stopAudio();
            history.push(Routes.HOME);
        } else if (step == OPEN_SIGNUP_STEP) {
            setOpenModal(true);
        } else {
            let nextStep = step + 1;
            await setStep(nextStep);
        }
        // if(nextStep === 9) {
        //     const el: any = document.getElementById('dialog-default');
        //     el.showModal();
        //     console.log('open modal');
        // }
    }

    function getStep(step: number) {
        switch (step) {
            case(0): {
                return (<TextContainer key={"cont" + step} message="Hello! Sorry to keep you waiting!"
                                       onClickContinue={onClickContinue}/>)
            }
            case(1): {
                return (<TextContainer key={"cont" + step} message="Welcome to the world of Pokémon!"
                                       onClickContinue={onClickContinue}/>)
            }
            case(2): {
                return (<TextContainer key={"cont" + step} message="My name is OAK."
                                       onClickContinue={onClickContinue}/>)
            }
            case(3): {
                return (<TextContainer key={"cont" + step}
                                       message="People call me the Pokémon Professor."
                                       onClickContinue={onClickContinue}/>)
            }
            case(4): {
                return (<TextContainer key={"cont" + step}
                                       message="This world is inhabited by creatures that we call Pokémon."
                                       onClickContinue={onClickContinue}/>)
            }
            case(5): {
                return (<TextContainer key={"cont" + step}
                                       message="People and Pokémon live together by supporting each other"
                                       onClickContinue={onClickContinue}/>)
            }
            case(6): {
                return (
                    <TextContainer key={"cont" + step} message="Some people play with Pokémon, some battle with them."
                                   onClickContinue={onClickContinue}/>)
            }
            case(7): {
                return (<TextContainer key={"cont" + step} message="But we don't know everything about Pokémon yet."
                                       onClickContinue={onClickContinue}/>)
            }
            case(8): {
                return (<TextContainer key={"cont" + step} message="There are still many mysteries to solve."
                                       onClickContinue={onClickContinue}/>)
            }
            case(9): {
                return (<TextContainer key={"cont" + step} message="That's why I study Pokémon every day."
                                       onClickContinue={onClickContinue}/>)
            }
            case(10): {
                return (<TextContainer key={"cont" + step} message="Now, what did you say your name was?"
                                       onClickContinue={onClickContinue}/>)
            }
            case(11): {
                return (<TextContainer key={"cont" + step} message={`Nice to meet you ${userStore.user.name}`}
                                       onClickContinue={onClickContinue}/>)
            }
            case(12): {
                return (<TextContainer key={"cont" + step} message="A world full of adventures waits you! Let's get started!"
                                       onClickContinue={onClickContinue}/>)
            }
            // case(9): {
            //     return (<dialog className="nes-dialog" id="dialog-default" open>
            //         <form method="dialog" onSubmit={onClickContinue}>
            //             <p className="title">What's your name?</p>
            //             <div className="nes-field">
            //                 <label htmlFor="name_field">Your name</label>
            //                 <input type="text" id="name_field" className="nes-input" value={name}
            //                        onChange={e => setName(e.target.value)} autoFocus={true}/>
            //                 <button type="submit" className="nes-btn is-primary"
            //                         onClick={() => onClickContinue()}>Done!
            //                 </button>
            //             </div>
            //         </form>
            //     </dialog>)
            // }
            // case(10): {
            //     return (<TextContainer key={"cont" + step} message={`Nice to meet you ${name}!`}
            //                            onClickContinue={onClickContinue}/>)
            // }
            // case(11): {
            //     return (<TextContainer key={"cont" + step}
            //                            message="A world full of adventures waits you! Let's get started!"
            //                            onClickContinue={onClickContinue}/>)
            // }
            default : {
                return (<></>)
            }
        }
    }

    return (
        <IonPage id="signup-page" className="intro-background">
            <IonHeader class="transparent-header">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton color="dark" defaultHref={Routes.SIGNIN_SIGNUP}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="centered">
                    <img className="responsive-sprite professor" src={professorOak}/>
                </div>
                {getStep(step)}
                <SignupFormModal open={openModal} onClickClose={onCloseModal} afterSaveAction={afterSignup}/>

            </IonContent>
        </IonPage>
    );
});

export default withRouter(SignupPage);
