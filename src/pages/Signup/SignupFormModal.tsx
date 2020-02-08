import React, {useEffect, useState} from 'react';
import './SignupFormModal.scss'
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonSpinner,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {close, send} from "ionicons/icons";
import {useForm} from "react-hook-form";
import {auth, firestore} from "../../firebase";
import Overworld from "../../components/overworld/Overworld";
import {useRootStore} from "../../stores/StoreContext";
import {useAuthState} from "react-firebase-hooks/auth";
import {Routes} from "../../router/Router";
import {observer} from "mobx-react-lite";

interface IComponentProps extends RouteComponentProps {
    open: boolean;

    onClickClose(): void;
    afterSaveAction?(): void;
}

type FormData = {
    name: string;
    email: string;
    password: string;
    character: string;
}

const SignupFormModal: React.FC<IComponentProps> = observer(({history, open, onClickClose, afterSaveAction}) => {

    const {register, handleSubmit, errors, getValues, setValue, watch, reset, control} = useForm<FormData>();
    // console.log(watch('character'));
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const [toggleAudio, playAudio] = useAudio("/audio/sounds/sfx_menu_move3.wav");
    const [selected, setSelected] = useState("0");
    const {userStore} = useRootStore();

    const [userFirebase] = useAuthState(auth);


    // console.log(watch('email')) // watch input value by passing the name of it
    const closeModal = () => {
        onClickClose();
    }

    const setChar = (e:any) => {
        console.log(e.target.name +" "+ e.target.value);
        setValue(e.target.name , e.target.value);
        setSelected(e.target.value);
    }

    const characterList = ['001', '002', '003', '004'];

    const onSubmit =  handleSubmit(async(data: any) => {
        if(Object.entries(data).length === 0 && data.constructor === Object){
            console.log('no data');
        }
        console.log(data);
        setIsSubmitting(true);
        const {name, email, password} = data;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            if (res && res.user) {
                const user = {uid: res.user.uid, name: name, email: res.user.email, creationDate: new Date()};
                await firestore.doc(`users/${res.user.uid}`).set(user);
                await userStore.setUser(user.uid)
            }
            setIsSubmitting(false);
            if(afterSaveAction){
                afterSaveAction();
            }
        } catch (e) {
            setIsSubmitting(false);
            console.log(e);
            // setFormSubmitErrorMessage(e.message);
        }
    })

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        reset({name: '', email: '', password: '', character: ''});
    }

    // if (userFirebase) {
    //     return <Redirect to={Routes.HOME}/>;
    // }

    return (
        <IonModal isOpen={open} backdropDismiss={false} cssClass="signup-form-modal" onDidPresent={ionModalDidPresent}>
            <IonHeader class="transparent-header">
                <IonToolbar color="transparent">
                    <IonButtons slot="start">
                        <IonButton color="dark" onClick={(e) => closeModal()} fill="clear">
                            <IonIcon icon={close}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>About you</IonTitle>
                    <IonButtons slot="end">
                        <button form="formSignup" type="submit" className="btn-fill-clear" disabled={isSubmitting}>
                            {!isSubmitting ? (
                                <>CONTINUE ></>
                            ) : (<IonSpinner/>)}
                        </button>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form id="formSignup" noValidate onSubmit={onSubmit}>
                    <div className="nes-field">
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id="name" name="name"
                               className={errors && errors.name ? 'nes-input is-error' : 'nes-input'}
                               ref={register({required: "required"})}/>
                        {errors && errors.name && (<label className="error">Name is required</label>)}
                    </div>

                    <div className="nes-field">
                        <label htmlFor="email">Your e-mail:</label>
                        <input type="text" id="email" name="email"
                               className={errors && errors.email ? 'nes-input is-error' : 'nes-input'}
                               ref={register({required: "required", pattern: /^\S+@\S+$/i   })}/>
                        {errors && errors.email && errors.email.type === 'required' && (<label className="error">E-mail is required</label>)}
                        {errors && errors.email && errors.email.type === 'pattern' && (<label className="error">E-mail address is invalid</label>) }
                    </div>

                    <div className="nes-field">
                        <label htmlFor="password">Your password:</label>
                        <input type="password" id="password" name="password"
                               className={errors && errors.password ? 'nes-input is-error' : 'nes-input'}
                               ref={register({required: "required"})}/>
                        {errors && errors.password && (<label className="error">Password is required</label>)}
                    </div>

                    <div className="nes-field">
                        <label htmlFor="appearance">Your Appearance:</label>
                        {errors && errors.character && (<label className="error">You need to choose your character</label>)}
                        <fieldset id="select-character">
                            {characterList.map(char => (
                                <label key={char} className={selected === char ? 'selected': ''} >
                                    {selected === char && (<span className="arrow-down">></span>)}
                                    <input type="radio" name="character" value={char} ref={register({ required: true })} onClick={e=>setChar(e)}/>
                                    <Overworld animationActive={selected === char} direction="down" spriteUrl={`../../assets/overworlds/humans/${char}.png`} />
                                </label>
                            ))}
                        </fieldset>
                    </div>
                </form>
            </IonContent>
        </IonModal>
    );
})

export default withRouter(SignupFormModal);
