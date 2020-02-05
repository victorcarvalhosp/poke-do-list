import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import * as firebase from "firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Routes} from "./Router";

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
}
const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: RouteComponent,...rest } = props;

    const [user] = useAuthState(firebase.auth());
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) :(
                    <Redirect to={Routes.SIGNIN}/>
                )
            }
        />
    );
};


export default PrivateRoute
