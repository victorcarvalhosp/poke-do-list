import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSpinner, IonToolbar, IonButton} from '@ionic/react';
import React, {useState} from 'react';
import './Signin.scss';
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import {useForm} from "react-hook-form";
import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";


type FormData = {
    email: string;
    password: string;
}
const SigninPage: React.FC<RouteComponentProps> = ({history}) => {

    const {register, handleSubmit, errors} = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitErrorMessage, setFormSubmitErrorMessage] = useState("");
    const [user] = useAuthState(auth);


    const onSubmit = handleSubmit(async (data: any) => {
        console.log(data);
        setIsSubmitting(true);
        const {email, password} = data;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setIsSubmitting(false);
            history.push(Routes.HOME+'/week');
        } catch (e) {
            setIsSubmitting(false);
            console.log(e);
            setFormSubmitErrorMessage(e.message);
        }
    })

    const goToSignup = () => {
        history.push(Routes.SIGNUP)
    }


    if (user) {
        // return <Redirect to={Routes.HOME+'/week'}/>;
    }

    return (
        <IonPage id="signin-page">
            <IonHeader class="transparent-header">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton color="dark" defaultHref={Routes.SIGNIN_SIGNUP}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="box">
                    <div className="pokeball-div">
                        <i className="nes-pokeball"></i>
                    </div>
                    <div className="nes-container is-rounded">
                        <h2>Sign in </h2>
                        <form id="formSignin" noValidate onSubmit={onSubmit}>
                            <div className="nes-field">
                                <label htmlFor="email">E-mail:</label>
                                <input type="text" id="email" name="email"
                                       className={errors && errors.email ? 'nes-input is-error' : 'nes-input'}
                                       ref={register({required: "required", pattern: /^\S+@\S+$/i})}/>
                                {errors && errors.email && errors.email.type === 'required' && (
                                    <label className="error">E-mail is required</label>)}
                                {errors && errors.email && errors.email.type === 'pattern' && (
                                    <label className="error">E-mail address is invalid</label>)}
                            </div>

                            <div className="nes-field">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password"
                                       className={errors && errors.password ? 'nes-input is-error' : 'nes-input'}
                                       ref={register({required: "required"})}/>
                                {errors && errors.password && (<label className="error">Password is required</label>)}
                                {formSubmitErrorMessage && (<label className="error">{formSubmitErrorMessage}</label>)}
                            </div>
                            <div className="btn-right-div">
                                <button type="submit" className="nes-btn is-primary" disabled={isSubmitting}>
                                    {!isSubmitting ? (
                                        <>NEXT</>
                                    ) : (<IonSpinner/>)}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="extra-links">
                        <IonButton fill="clear" onClick={goToSignup}>Forgot password?</IonButton>
                        <IonButton fill="clear" onClick={goToSignup} >Create Account</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default withRouter(SigninPage);
