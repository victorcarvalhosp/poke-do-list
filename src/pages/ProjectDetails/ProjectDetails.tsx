import {IonContent, IonFab, IonFabButton, IonIcon, IonPage, useIonViewDidEnter, IonFabList, IonButton} from '@ionic/react';
import {add, pencil, pencilOutline} from 'ionicons/icons';
import React, {useEffect, useState} from 'react';
import './ProjectDetails.scss'
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import PkmnHeader from '../../components/pkmn-header/PkmnHeader';
import TaskModal from "../../components/task-modal/TaskModal";
import {RouteComponentProps} from "react-router";
import ListItems from "../../components/list-items/ListItems";
import {ITask, Task} from "../../models/Task";

interface RouteInfo {
    id: string;
}

interface ComponentProps extends RouteComponentProps<RouteInfo> {
}


const ProjectDetailsPage: React.FC<ComponentProps> = observer(({match}) => {

    const {projectStore, userStore, taskStore} = useRootStore();
    const projectId = match.params.id;

    useEffect(() => {
        loadList(projectId);

    }, [projectId]);

    async function loadList(projectId: string) {
        if (!projectStore.selected || !projectStore.selected.id) {
            await projectStore.selectById(projectId);
        }
        await taskStore.loadListByProject(projectId);
    }

    const openModalEditProject = () => {
        if(projectStore.selected){
            projectStore.openModal(projectStore.selected);
        }
    }

    const openModalNewTask = () => {
        const task = new Task();
        task.project = projectStore.selected;
        taskStore.openModal(task);
    }

    return (
        <IonPage>
           <PkmnHeader title={projectStore.selected.name} >
               <IonButton onClick={e => openModalEditProject()}>
                   <IonIcon slot="icon-only" icon={pencilOutline} />
               </IonButton>
           </PkmnHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton color="light">
                        <IonIcon icon={add} onClick={e => openModalNewTask()}/>
                    </IonFabButton>
                </IonFab>
                <ListItems list={taskStore.list} loading={taskStore.loadingList}/>
            </IonContent>
        </IonPage>
    );
});

export default ProjectDetailsPage;
