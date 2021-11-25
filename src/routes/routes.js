import React from 'react';
import {Route} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute"

import ProfilePage from "../components/pages/ProfilePage";

const Routes = () => {
    return (
        <>
            <Route path="/" component={ProfilePage} exact/>
        </>
    );
};

export default Routes;
