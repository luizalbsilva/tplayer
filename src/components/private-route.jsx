import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export default function PrivateRoute({children, ...rest})  {
    const {jwt} = useSelector(state => state['login'])

    return (
        <Route {...rest}>
            {jwt == null ? (<Redirect to="/login" />) : children}
        </Route>
    )
}
