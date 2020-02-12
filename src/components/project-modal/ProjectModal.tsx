import React, {useEffect, useState} from 'react';
import './ProjectModal.scss'
import {IonContent, IonSpinner} from "@ionic/react";
import {useRootStore} from "../../stores/StoreContext";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import {DatePicker,} from '@material-ui/pickers';
import dayjs from "dayjs";
import DefaultModal from "../default-modal/DefaultModal";
import {IProject} from "../../models/Project";

interface IComponentProps {
}

type FormData = {
    name: string;
    color: string;
}

const ProjectModal: React.FC<IComponentProps> = observer(() => {

    const {register, handleSubmit, errors, getValues, setValue, watch, reset, control} = useForm<FormData>();
    const {projectStore} = useRootStore();
    const [isDateSelectOpen, setIsDateSelectOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState<Date|null>(null);

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        reset({name: '', color: ''});
    }

    const onClickCloseModal = () => {
        projectStore.closeModal();
    }

    const onSubmit = handleSubmit(async (data: FormData) => {
        console.log(data);
        const projectSave: IProject = {name: data.name, color: data.color};
        await projectStore.save(projectSave);
    })

    // @ts-ignore
    return (
        <DefaultModal open={projectStore.modalOpen} onClickClose={onClickCloseModal} title="Project" onModalDidPresent={ionModalDidPresent}>
            {{headerEndArea: (
                <button form="formProject" type="submit" className="btn-fill-clear" disabled={projectStore.loadingSave}>
                    {!projectStore.loadingSave ? (
                        <>SAVE</>
                    ) : (<IonSpinner/>)}
                </button>),
                content: (<IonContent className="ion-padding">
                    <form id="formProject" noValidate onSubmit={onSubmit}>
                        <div className="nes-field">
                            <label htmlFor="name">Project name:</label>
                            <input type="text" id="name" name="name"
                                   className={errors && errors.name ? 'nes-input is-error' : 'nes-input'}
                                   ref={register({required: "required"})}/>
                            {errors && errors.name && (<label className="error">Name is required</label>)}
                        </div>

                        <div className="nes-field">
                            <label htmlFor="color">Project color:</label>
                            <div className={errors && errors.color ? 'nes-select is-error' : 'nes-select'}>
                                <select  id="color" name="color" required ref={register({required: "required"})}>
                                    <option value="" hidden>Select...</option>
                                    <option value="#000" style={{color: '#000'}}>Black</option>
                                    <option value="#FFF" style={{color: '#FFF'}}>White</option>
                                    <option value="#ce372b" style={{color: '#ce372b'}}>Red</option>
                                    <option value="#108de0" style={{color: '#108de0'}}>Blue</option>
                                    <option value="#f2c409" style={{color: '#f2c409'}}>Yellow</option>
                                </select>
                                {errors && errors.color && (<label className="error">color is required</label>)}
                            </div>
                        </div>
                    </form>
                </IonContent>)
            }}
        </DefaultModal>
    );
})

export default ProjectModal;
