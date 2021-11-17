import React from 'react';
import {connect} from "react-redux";

import ProtectedRoute from "./PrivateRouteContainer";

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        loading: state.auth.loading,
    };
};

const PrivateRouteContainer = connect(null, null)(ProtectedRoute)

export default PrivateRouteContainer;
