import React, {useEffect, useState} from 'react';
import './TaskModal.scss'
import useAudio from "../../hooks/useAudio";
import Typing from 'react-typing-animation';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonSpinner,
    IonTitle,
    IonToolbar,
    IonAlert
} from "@ionic/react";
import {useRootStore} from "../../stores/StoreContext";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import {close, trash} from "ionicons/icons";
import {auth, firestore} from "../../firebase";
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import dayjs from "dayjs";
import {ModalDatePicker} from "../date-picker-modal/ModalDatePicker";
import DayjsUtils from "@date-io/dayjs";
import {ITask} from "../../models/Task";
import firebase from 'firebase';
import {IProject, Project} from "../../models/Project";
import PokemonWildModal from "../pokemon-wild-modal/PokemonWildModal";
import PokemonBasicDetails from "../pokemon-basic-details/PokemonBasicDetails";

interface IComponentProps {
}

type FormData = {
    title: string;
    project: string;
}

const TaskModal: React.FC<IComponentProps> = observer(() => {

    const {register, handleSubmit, errors, getValues, setValue, watch, reset, control} = useForm<FormData>();
    const {taskStore, projectStore} = useRootStore();
    const [isDateSelectOpen, setIsDateSelectOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        register({name: "date"})
    }, [])

    const handleDateChange = (e: any) => {
        setSelectedDate(e);
        setValue("date", e);
    }

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        reset({title: '', project: ""});
        setSelectedDate(taskStore.selected.date ? taskStore.selected.date.toDate() : null);
        setValue("title", taskStore.selected.title);
        if (taskStore.selected.project) {
            setValue("project", JSON.stringify(taskStore.selected.project));
        }
    }

    const closeModal = () => {
        taskStore.closeModal();
    }

    const onSubmit = handleSubmit(async (data: any) => {
        const taskSave: ITask = {
            ...taskStore.selected,
            title: data.title,
            complete: false,
            project: data.project ? JSON.parse(data.project) : null
        };
        if (selectedDate) {
            taskSave.date = firebase.firestore.Timestamp.fromDate(new Date(selectedDate));
        } else {
            taskSave.date = null;
        }
        console.log(taskSave);
        await taskStore.save(taskSave);
    })

    const handleRemove = () => {
        if (taskStore.selected.id) {
            const transactionRemove = taskStore.selected.id;
            taskStore.remove(transactionRemove);
        }
    }

    // @ts-ignore
    return (<>
            <IonModal isOpen={taskStore.modalOpen} backdropDismiss={false} cssClass="task-form-modal"
                      onDidPresent={ionModalDidPresent}>
                <IonHeader class="transparent-header">
                    <IonToolbar color="transparent">
                        <IonButtons slot="start">
                            <IonButton color="dark" onClick={(e) => closeModal()} fill="clear">
                                <IonIcon icon={close}/>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>To-do</IonTitle>
                        <IonButtons slot="end">
                            <button form="formTask" type="submit" className="btn-fill-clear"
                                    disabled={taskStore.loadingSave}>
                                {!taskStore.loadingSave ? (
                                    <>SAVE</>
                                ) : (<IonSpinner/>)}
                            </button>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <form id="formTask" noValidate onSubmit={onSubmit}>
                        <div className="nes-field">
                            <label htmlFor="title">Task:</label>
                            <input type="text" id="title" name="title"
                                   className={errors && errors.title ? 'nes-input is-error' : 'nes-input'}
                                   ref={register({required: "required"})}/>
                            {errors && errors.title && (<label className="error">Title is required</label>)}
                        </div>

                        {/*<ModalDatePicker label="Example" onChange={handleDateChange} />*/}
                        <div className="nes-field">
                            <label htmlFor="color">Project:</label>
                            <div className={errors && errors.project ? 'nes-select is-error' : 'nes-select'}>
                                <select id="project" name="project" required ref={register}>
                                    <option value="">Inbox</option>
                                    {projectStore.list.map(project => (
                                        <option key={project.id} value={JSON.stringify(project)}
                                                className={`theme-${project.theme}`}>{project.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="nes-field">
                            <button form="formTask" type="button" className="btn-fill-clear"
                                    onClick={() => setIsDateSelectOpen(true)}>
                                {selectedDate ? dayjs(selectedDate).format('MM/DD') : 'Select Date'}
                            </button>

                            <DatePicker
                                style={{display: 'none'}}
                                open={isDateSelectOpen}
                                onOpen={() => setIsDateSelectOpen(true)}
                                onClose={() => setIsDateSelectOpen(false)}
                                clearable
                                inputVariant="outlined"
                                value={selectedDate}
                                placeholder="10/10/2018"
                                onChange={date => handleDateChange(date as any)}
                                minDate={new Date()}
                                format="MM/DD/YYYY"
                            />
                        </div>
                        {/*<DatePicker*/}
                        {/*    label="Basic example"*/}
                        {/*    value={selectedDate}*/}
                        {/*    onAccept={handleDateChange}*/}
                        {/*    animateYearScrolling*/}
                        {/*/>*/}
                    </form>
                    {taskStore.selected.id && (
                        <IonButton onClick={(e) => setShowAlert(true)} fill="clear">
                            <IonIcon slot="icon-only" icon={trash}/>
                        </IonButton>
                    )}
                    {taskStore.selected && taskStore.selected.pokemon &&
                    <PokemonBasicDetails wild={true} pokemon={taskStore.selected.pokemon}/>}
                </IonContent>
            </IonModal>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Are you sure?'}
                message={`Are you sure you want to remove ${taskStore.selected.title}?`}
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
        </>
    );
})

export default TaskModal;
