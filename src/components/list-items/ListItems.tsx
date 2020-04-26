import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import React, {useEffect, useState} from "react";
import {
    IonLabel,
    IonList,
    IonListHeader,
    IonItemOptions,
    IonItem,
    IonItemOption,
    IonItemSliding,
    IonIcon
} from "@ionic/react";
import Item from "../Item";
import {ITask} from "../../models/Task";
import Loading from "../loading/Loading";
import BlankState from "../blank-state/BlankState";
import dayjs from "dayjs";
import {diffDaysFromToday} from "../../utils/utils";
import "./ListItems.scss";
import {timeOutline} from "ionicons/icons";


interface IComponentProps {
    list: ITask[];
    loading: boolean;
    groupType: "week" | "today" | "none" | "all";
}

interface ListSubGroup {
    groupName: string;
    list: ITask[];
}


const ListItems: React.FC<IComponentProps> = observer(({list, loading, groupType}) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const {taskStore, uiStore} = useRootStore();
    const [listGroupByDate, setListGroupByDate] = useState<Map<number, ListSubGroup>>(new Map<number, ListSubGroup>());
    const OVERDUE_SUBGROUP = -1;
    const LATER_SUBGROUP = 8;

    /*REFACTOR THIS LOGIC  TO STORE/SERVICE*/
    function groupListByDate() {
        const defaultGroups: Map<number, ListSubGroup> = new Map<number, ListSubGroup>();

        defaultGroups.set(OVERDUE_SUBGROUP, {groupName: "Overdue", list: []});
        defaultGroups.set(0, {groupName: "Today", list: []});
        if (groupType === "week" || groupType === "all") {
            addNextSevenDaysToGroupListByDate(defaultGroups, days);
            if (groupType === "all") {
                defaultGroups.set(LATER_SUBGROUP, {groupName: "Later", list: []});
            }
        }

        setListGroupByDate(defaultGroups);
        list.forEach(task => {
            addTaskToTheCorrectGroupByDate(task, defaultGroups);
        })
    }

    function addNextSevenDaysToGroupListByDate(defaultGroups: Map<number, ListSubGroup>, days: string[]) {
        defaultGroups.set(1, {groupName: "Tomorrow", list: []});
        for (let i = 2; i < 8; i++) {
            const date = dayjs().add(i, 'day').toDate();
            const dayName: string = days[date.getDay()];
            defaultGroups.set(i, {groupName: dayName, list: []});
        }
    }

    function addTaskToTheCorrectGroupByDate(task: ITask, defaultGroups: Map<number, ListSubGroup>) {
        if (task.date) {
            for (let [key] of defaultGroups) {
                if (key === OVERDUE_SUBGROUP) {
                    if (diffDaysFromToday(task.date?.toDate()) <= key) {
                        defaultGroups.get(key)?.list.push(task);
                        break;
                    }
                } else if (key === LATER_SUBGROUP) {
                    if (diffDaysFromToday(task.date?.toDate()) >= key) {
                        defaultGroups.get(key)?.list.push(task);
                        break;
                    }
                } else {
                    if (diffDaysFromToday(task.date?.toDate()) === key) {
                        defaultGroups.get(key)?.list.push(task);
                        break;
                    }
                }
            }
        } else {
            defaultGroups.get(LATER_SUBGROUP)?.list.push(task);
        }
    }

    useEffect(() => {
        if (groupType !== "none") {
            groupListByDate();
        }
    }, [list]);

    const onClickTask = (task: ITask) => {
        taskStore.openModal(task);
    }

    const handlePostpone = async (task: ITask) => {
        await taskStore.postPone(task);
        uiStore.showToast("Task postponed to " + dayjs(task.date?.toDate()).format('MM/DD'));
        await document?.querySelector("ion-item-sliding")?.closeOpened();
    }

    return (<>
        {groupType !== 'none' ?
            (<div className="pkmn-list-items">
                {loading && (<Loading/>)}
                {!loading && Array.from(listGroupByDate.values()).map(subGroup => (
                    <span key={subGroup.groupName} className={subGroup.list.length === 0 ? 'empty-sub-list' : ''}>
                        <IonListHeader lines="inset">
                            <IonLabel>{subGroup.groupName}</IonLabel>
                        </IonListHeader>
                        <IonList>
                            {subGroup.list.map(task => (
                                    <Item key={task.id} item={task} onClickItem={() => onClickTask(task)} onPostpone={() => handlePostpone(task)}/>
                                )
                            )}
                        </IonList>
                    </span>
                ))}
            </div>)
            : (
                <IonList>
                    {loading && (<Loading/>)}
                    {!loading && list.map(task => (
                            <>
                                <Item key={task.id} item={task} onClickItem={() => onClickTask(task)}
                                      onPostpone={() => handlePostpone(task)}/>
                            </>
                        )
                    )}
                    {!loading && list.length === 0 && (<BlankState/>)}
                </IonList>
            )}

    </>);
});

export default ListItems;
