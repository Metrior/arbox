import React from 'react';
import {Route} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute"

import Main from "../components/Main";

const Routes = () => {
    return (
        <>
            <Route path="/" component={Main} exact/>
        </>
    );
};

export default Routes;
