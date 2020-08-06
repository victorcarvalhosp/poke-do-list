import React, {useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {observer} from "mobx-react-lite";
import {useForm} from "react-hook-form";
import DefaultModal from "../../../components/default-modal/DefaultModal";
import {useRootStore} from "../../../stores/StoreContext";
import {IonNote} from '@ionic/react';

interface IComponentProps extends RouteComponentProps {
    open: boolean;

    onClickClose(): void;
}

type FormData = {
    serial: string;
}
const SerialModal: React.FC<IComponentProps> = observer(({open, onClickClose, history}) => {

    const {userStore} = useRootStore();
    const {register, handleSubmit, errors, reset} = useForm<FormData>();
    const [message, setMessage] = useState<{ type: 'error' | 'success', text: string }>({type: "success", text: ''})

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        register("serial");
        reset({
            serial: userStore.user.serialKey || '',
        });

    }

    const onSubmit = handleSubmit(async (data: any) => {
        const {serial} = data;
        try {
            fetch(`https://us-central1-poke-do-list.cloudfunctions.net/getSerialKeyValid/?serial=${serial}`, {
                method: 'GET',
                headers: {'user': userStore.user.uid}
            }).then((res:any) => res.json()).then(value => {
                if(value.success === true) {
                    userStore.updateSerialKey(serial);
                    setMessage({type: "success", text: "This serial is valid! Enjoy!"});
                } else {
                    setMessage({type: "error", text: "This serial is not valid."});
                }
            })
        } catch (e) {
            setMessage({type: "error", text: "This serial is not valid"})
            console.log(e);
        }
    })

    return (
        <DefaultModal open={open} onClickClose={onClickClose} title="Serial Key" onModalDidPresent={ionModalDidPresent}>
            {{
                headerEndArea: <></>,
                content: <div className="ion-padding">
                    <form id="formSignin" noValidate onSubmit={onSubmit}>
                        <label htmlFor="serial">Serial Key:</label>
                        <div className="nes-field">
                            <input type="text" id="serial" name="serial"
                                   className={`nes-input ${errors && errors.serial ? 'is-error' : ''} ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                   ref={register}/>
                        </div>
                        <p color={message.type}>{message.text}</p>
                        <button type="submit" className="nes-btn is-primary">
                            Validate Serial Key
                        </button>
                        <br/><br/>
                        <IonNote>If you're having any issues with your serial please contact us on Twitter @PokeDoList! </IonNote>
                    </form>
                </div>
            }}
        </DefaultModal>
    );
});

export default withRouter(SerialModal);
