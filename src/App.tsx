import React from 'react';
import {IonReactRouter} from '@ionic/react-router';
import DayjsUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';


import Menu from './components/Menu';
import './globals.scss';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.scss';
import Router from "./router/Router";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import {observer} from "mobx-react-lite";
import {useRootStore} from "./stores/StoreContext";
import ProjectModal from "./components/project-modal/ProjectModal";
import TaskModal from "./components/task-modal/TaskModal";
import ToastDefault from "./components/toast-default/ToastDefault";


const App: React.FC = () => {
    const [user, initialising, error] = useAuthState(auth);
    const {userStore} = useRootStore();
    userStore.setUser(user ? user.uid : '0');

    if (initialising) {
        return (
            <div>
                Initialising...
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        )
    }

    return (
        <>
            {/*<IonApp id="ion-app-root">*/}
            <MuiPickersUtilsProvider utils={DayjsUtils}>
                <IonReactRouter>
                    {/*<IonSplitPane contentId="main">*/}
                    <Menu/>
                    <Router/>
                    <ProjectModal/>
                    <TaskModal/>
                    <ToastDefault />
                    {/*</IonSplitPane>*/}
                </IonReactRouter>
            </MuiPickersUtilsProvider>
            {/*</IonApp>*/}
        </>
    )
};


export const Counter = observer(() => {
    const {counterStore} = useRootStore();

    return (
        <>
            <div>{counterStore.count}</div>
            <button onClick={() => counterStore.increment()}>++</button>
            <button onClick={() => counterStore.decrement()}>--</button>
        </>
    )
})

export default App;
