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
                            <label htmlFor="color">Project theme:</label>
                            <div className={errors && errors.color ? 'nes-select is-error' : 'nes-select'}>
                                <select  id="color" name="color" required ref={register({required: "required"})}>
                                    <option value="" hidden>Select...</option>
                                    <option value="#ce372b" style={{color: '#ce372b'}}>Red</option>
                                    <option value="#108de0" style={{color: '#108de0'}}>Blue</option>
                                    <option value="#f2c409" style={{color: '#f2c409'}}>Yellow</option>
                                    <option value="#9E8C55" style={{color: '#9E8C55'}}>Gold</option>
                                    <option value="#878A90" style={{color: '#878A90'}}>Silver</option>
                                    <option value="#7C8EC4" style={{color: '#7C8EC4'}}>Crystal</option>
                                </select>
                                {errors && errors.color && (<label className="error">Theme is required</label>)}
                            </div>
                        </div>
                    </form>
                </IonContent>)
            }}
        </DefaultModal>
    );
})

export default ProjectModal;
