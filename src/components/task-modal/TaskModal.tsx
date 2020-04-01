import React, {useEffect, useState} from 'react';
import './TaskModal.scss'
import {
    IonAlert,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonSpinner,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useRootStore} from "../../stores/StoreContext";
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import {close, trash} from "ionicons/icons";
import {DatePicker, TimePicker,} from '@material-ui/pickers';
import dayjs from "dayjs";
import {ITask} from "../../models/Task";
import firebase from 'firebase';
import PokemonBasicDetails from "../pokemon-basic-details/PokemonBasicDetails";

interface IComponentProps {
}

type FormData = {
    title: string;
    notes: string;
    project: string;
    repeat: boolean;
    repeatFrequency: "daily" | "monthly";
    mon?: boolean;
    tue?: boolean;
    wed?: boolean;
    thu?: boolean;
    fri?: boolean;
    sat?: boolean;
    sun?: boolean;
}

const TaskModal: React.FC<IComponentProps> = observer(() => {

    const {register, handleSubmit, errors, setValue, watch, reset} = useForm<FormData>();
    const {taskStore, projectStore, userStore} = useRootStore();
    const [isDateSelectOpen, setIsDateSelectOpen] = useState(false);
    const [isTimeDateSelectOpen, setIsTimeDateSelectOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTimeDate, setSelectedTimeDate] = useState<Date | undefined>(undefined);
    const [showNotes, setShowNotes] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const repeatTask = watch("repeat");
    const repeatFrequency = watch("repeatFrequency");
    const [formSubmitErrorMessage, setFormSubmitErrorMessage] = useState("");


    useEffect(() => {
        register({name: "date"})
    }, [])

    const handleDateChange = (e: any) => {
        if (!e) {
            setValue("repeat", false);
        }
        setSelectedDate(e);
    }

    const handleTimeDateChange = (e: any) => {
        console.log(e);
        if (e) {
            const selectedTimeDateDayJs = dayjs(e);
            console.log(selectedTimeDateDayJs.get('minute'));
            const dateWithTime = dayjs(selectedDate).set('hour', selectedTimeDateDayJs.get('hour')).set('minute', selectedTimeDateDayJs.get('minute')).toDate();
            setSelectedTimeDate(dateWithTime);
            setSelectedDate(dateWithTime);
        } else {
            setSelectedDate(dayjs(selectedDate).endOf('day').toDate());
            setSelectedTimeDate(e);
        }
    }

    const ionModalDidPresent = () => {
        /*Need to reset form in order for it to work properly!*/
        register("withTime");
        reset({
            title: '',
            project: "",
            notes: "",
            repeat: false,
            repeatFrequency: 'daily',
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: true,
            sun: true
        });
        setSelectedDate(taskStore.selected.date ? taskStore.selected.date.toDate() : undefined);
        setSelectedTimeDate(taskStore.selected.date && taskStore.selected.withTime ? taskStore.selected.date.toDate() : undefined);
        if (taskStore.selected.id) {
            taskStore.selected.notes ? setShowNotes(true) : setShowNotes(false);
            reset({
                title: taskStore.selected.title,
                notes: taskStore.selected.notes,
                repeat: taskStore.selected.repeat,
                repeatFrequency: taskStore.selected.repeatFrequency,
                mon: taskStore.selected.mon,
                tue: taskStore.selected.tue,
                wed: taskStore.selected.wed,
                thu: taskStore.selected.thu,
                fri: taskStore.selected.fri,
                sat: taskStore.selected.sat,
                sun: taskStore.selected.sun
            });
        }
        if (taskStore.selected.project) {
            setValue("project", JSON.stringify(taskStore.selected.project));
        }
    }

    const closeModal = () => {
        taskStore.closeModal();
    }

    const onSubmit = handleSubmit(async (data: FormData) => {
        if (data.repeat && data.repeatFrequency === 'daily' && !data.mon && !data.tue && !data.wed && !data.thu && !data.fri && !data.sat && !data.sun) {
            setFormSubmitErrorMessage("You need to select at least one day of the week to repeat")
            return;
        }
        const taskSave: ITask = {
            ...taskStore.selected,
            ...data,
            complete: false,
            project: data.project ? JSON.parse(data.project) : null,
            withTime: selectedTimeDate ? true : false
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

                        {showNotes === false && (
                            <div className="nes-field">
                                <button type="button" className="btn-fill-clear"
                                        onClick={() => setShowNotes(true)}>
                                    + Add notes
                                </button>
                            </div>
                        )}
                        {showNotes && (
                            <div className="nes-field">
                                <label htmlFor="textarea_field">Notes</label>
                                <textarea id="notes" name="notes"
                                          ref={register} className="nes-textarea"></textarea>
                            </div>
                        )}


                        <div className="nes-field">
                            <button type="button" className="btn-fill-clear"
                                    onClick={() => setIsDateSelectOpen(true)}>
                                {selectedDate ? dayjs(selectedDate).format('MM/DD') : 'Select Date'}
                            </button>
                            {selectedDate && (
                                <button type="button" className="btn-fill-clear"
                                        onClick={() => setIsTimeDateSelectOpen(true)} style={{marginLeft: '32px'}}>
                                    {selectedTimeDate ? dayjs(selectedTimeDate).format('hh:mm A') : 'Add time'}
                                </button>
                            )}

                            {selectedDate && (
                                <label className="nes-checkbox-label" style={{marginTop: '18px'}}>
                                    <input id="repeat" name="repeat" type="checkbox"
                                           className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                           ref={register}
                                    />
                                    <span>Repeat</span>
                                </label>
                            )}
                            {repeatTask && <div>
                                <div className="nes-field">
                                    <label htmlFor="repeatFrequency">Frequency:</label>
                                    <div
                                        className={errors && errors.repeatFrequency ? 'nes-select is-error' : 'nes-select'}>
                                        <select id="repeatFrequency" name="repeatFrequency"
                                                ref={register({required: "required"})}>
                                            <option value="daily">Daily</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                                {repeatFrequency === "daily" ? (<div>
                                    <label className="nes-checkbox-label">
                                        <input id="mon" name="mon" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>mon</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="tue" name="tue" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>tue</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="wed" name="wed" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>wed</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="thu" name="thu" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>thu</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="fri" name="fri" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>fri</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="sat" name="sat" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>sat</span>
                                    </label>
                                    <label className="nes-checkbox-label">
                                        <input id="sun" name="sun" type="checkbox"
                                               className={`nes-checkbox ${userStore.user.theme === 'dark' ? 'is-dark' : ''}`}
                                               ref={register}
                                        />
                                        <span>sun</span>
                                    </label>
                                </div>) : (<div></div>)}
                            </div>}
                            {formSubmitErrorMessage && (<label className="error">{formSubmitErrorMessage}</label>)}
                            <DatePicker
                                style={{display: 'none'}}
                                open={isDateSelectOpen}
                                onOpen={() => setIsDateSelectOpen(true)}
                                onClose={() => setIsDateSelectOpen(false)}
                                clearable
                                autoOk
                                inputVariant="outlined"
                                value={selectedDate}
                                placeholder="10/10/2018"
                                onChange={date => handleDateChange(date as any)}
                                minDate={new Date()}
                                format="MM/DD/YYYY"
                            />
                            <TimePicker
                                style={{display: 'none'}}
                                open={isTimeDateSelectOpen}
                                onOpen={() => setIsTimeDateSelectOpen(true)}
                                onClose={() => setIsTimeDateSelectOpen(false)}
                                clearable
                                inputVariant="outlined"
                                value={selectedTimeDate}
                                onChange={date => handleTimeDateChange(date as any)}
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
