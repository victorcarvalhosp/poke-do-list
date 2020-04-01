import React, {useState} from 'react';
import './ProjectModal.scss'
import {IonAlert, IonButton, IonContent, IonIcon, IonSpinner} from "@ionic/react";
import {useRootStore} from "../../stores/StoreContext";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import DefaultModal from "../default-modal/DefaultModal";
import {IProject} from "../../models/Project";
import {trash} from "ionicons/icons";
import {RouteComponentProps, withRouter} from "react-router";
import {Routes} from "../../router/Router";
import {ProjectThemes} from "../../models/conditional-types-definitions";

interface IComponentProps extends RouteComponentProps {
}

type FormData = {
    name: string;
    theme: ProjectThemes;
}

const ProjectModal: React.FC<IComponentProps> = observer(({history}) => {

    const {register, handleSubmit, errors, setValue, reset} = useForm<FormData>();
    const {projectStore, userStore} = useRootStore();
    const [showAlert, setShowAlert] = useState(false);

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        reset({name: '', theme: ''});
        if (projectStore.selected.id) {
            setValue("name", projectStore.selected.name);
            setValue("theme", projectStore.selected.theme);
        }
    }

    const onClickCloseModal = () => {
        projectStore.closeModal();
    }

    const onSubmit = handleSubmit(async (data: FormData) => {
        const projectSave: IProject = {...projectStore.selected, name: data.name, theme: data.theme};
        console.log(projectSave);
        await projectStore.save(projectSave, true);
    })

    const handleRemove = () => {
        if (projectStore.selected.id) {
            const projectRemove = projectStore.selected.id;
            projectStore.remove(projectRemove);
            history.push(`${Routes.HOME}/week`)
        }
    }

    // @ts-ignore
    return (
        <span id="project-modal">
        <DefaultModal open={projectStore.modalOpen} onClickClose={onClickCloseModal} title="Project"
                      onModalDidPresent={ionModalDidPresent}>
            {{
                headerEndArea: (
                    <button form="formProject" type="submit" className="btn-fill-clear"
                            disabled={projectStore.loadingSave}>
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
                            <label htmlFor="theme">Project theme:</label>
                            <div className={errors && errors.theme ? 'nes-select is-error' : 'nes-select'}>
                                <select id="theme" name="theme" required ref={register({required: "required"})}>
                                    <option value="" hidden>Select...</option>
                                    <option value="red" className="theme-red">Red</option>
                                    <option value="blue" className="theme-blue">Blue</option>
                                    <option value="yellow" className="theme-yellow">Yellow</option>
                                    <option value="gold" className="theme-gold">Gold</option>
                                    <option value="silver" className="theme-silver">Silver</option>
                                    <option value="crystal" className="theme-crystal">Crystal</option>
                                    {userStore.premium && (<>
                                        <option value="ruby" className="theme-ruby">Ruby</option>
                                        <option value="sapphire" className="theme-sapphire">Sapphire</option>
                                        <option value="emerald" className="theme-emerald">Emerald</option>
                                        <option value="diamond" className="theme-diamond">Diamond</option>
                                        <option value="pearl" className="theme-pearl">Pearl</option>
                                        <option value="platinum" className="theme-platinum">Platinum</option>
                                        <option value="black" className="theme-black">Black</option>
                                        <option value="white" className="theme-white">White</option>
                                        <option value="x" className="theme-x">X</option>
                                        <option value="y" className="theme-y">Y</option>
                                    </>)}
                                </select>
                                {errors && errors.theme && (<label className="error">Theme is required</label>)}
                            </div>
                        </div>

                        {projectStore.selected.id && (
                            <IonButton onClick={(e) => setShowAlert(true)} fill="clear">
                                <IonIcon slot="icon-only" icon={trash}/>
                            </IonButton>
                        )}
                    </form>
                </IonContent>)
            }}
        </DefaultModal>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Are you sure?'}
                message={`Are you sure you want to remove ${projectStore.selected.name} and all it's tasks?`}
                buttons={[
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: blah => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Yes, remove',
                        handler: () => {
                            handleRemove();
                        }
                    }
                ]}
            />
            </span>
    );
})

export default withRouter(ProjectModal);
