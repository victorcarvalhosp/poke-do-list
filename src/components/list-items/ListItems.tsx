import {observer} from "mobx-react-lite";
import {useRootStore} from "../../stores/StoreContext";
import React, {useEffect, useState} from "react";
import {IonLabel, IonList, IonListHeader} from "@ionic/react";
import Item from "../Item";
import {ITask} from "../../models/Task";
import Loading from "../loading/Loading";
import BlankState from "../blank-state/BlankState";
import dayjs from "dayjs";
import {diffDaysFromToday} from "../../utils/utils";


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
    const {taskStore} = useRootStore();
    const [listGroupByDate, setListGroupByDate] = useState<Map<number, ListSubGroup>>(new Map<number, ListSubGroup>());
    const OVERDUE_SUBGROUP = -1;
    const LATER_SUBGROUP = 8;

    function groupListByDate() {
        const defaultGroups: Map<number, ListSubGroup> = new Map<number, ListSubGroup>();

        defaultGroups.set(OVERDUE_SUBGROUP, {groupName: "Overdue", list: []});
        defaultGroups.set(0, {groupName: "Today", list: []});
        if (groupType === "week" || groupType == "all") {
            defaultGroups.set(1, {groupName: "Tomorrow", list: []});
            for (let i = 2; i < 8; i++) {
                const date = dayjs().add(i, 'day').toDate();
                const dayName: string = days[date.getDay()];
                defaultGroups.set(i, {groupName: dayName, list: []});
            }
        }
        if (groupType == "all") {
            defaultGroups.set(LATER_SUBGROUP, {groupName: "Later", list: []});
        }

        setListGroupByDate(defaultGroups);
        list.forEach(task => {
            console.log('LIST FOR EACH');
            if (task.date) {
                for (let [key, value] of defaultGroups) {
                    console.log("COMPARISON KEY" + key, dayjs(task.date?.toDate()).diff(dayjs(), "hour"));
                    if (key == OVERDUE_SUBGROUP) {
                        if (diffDaysFromToday(task.date?.toDate()) <= key) {
                            defaultGroups.get(key)?.list.push(task);
                            break;
                        }
                    } else if (key == LATER_SUBGROUP) {
                        if (diffDaysFromToday(task.date?.toDate()) >= key) {
                            defaultGroups.get(key)?.list.push(task);
                            break;
                        }
                    } else {
                        if (diffDaysFromToday(task.date?.toDate()) == key) {
                            defaultGroups.get(key)?.list.push(task);
                            break;
                        }
                    }
                }
            } else {
                console.log('NO DATE TASK');
                defaultGroups.get(7)?.list.push(task);
            }
        })
    }

    useEffect(() => {
        // {group: "Overdue", tasks: []}, {group: "Today", tasks: []}, {group: "Later", tasks: []}

//groups - overdue, today, tomorrow, next day name 5 times, future
        if (groupType != "none") {
            groupListByDate();
        }
    }, [list]);

    const onClickTask = (task: ITask) => {
        taskStore.openModal(task);
    }

    return (<>
        {groupType != 'none' ?
            (<>
                {Array.from(listGroupByDate.values()).map(subGroup => (
                    <>
                        <IonListHeader lines="inset">
                            <IonLabel>{subGroup.groupName}</IonLabel>
                        </IonListHeader>
                        <IonList>
                            {subGroup.list.map(task => (
                                    <Item key={task.id} item={task} onClickItem={() => onClickTask(task)}/>
                                )
                            )}
                        </IonList>
                    </>
                ))}
            </>)
            : (
                <IonList>
                    {loading && (<Loading/>)}
                    {!loading && list.map(task => (
                            <Item key={task.id} item={task} onClickItem={() => onClickTask(task)}/>
                        )
                    )}
                    {!loading && list.length === 0 && (<BlankState/>)}
                </IonList>
            )}

    </>);
});

export default ListItems;
