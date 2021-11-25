import React from 'react';
import {connect} from "react-redux";

import {saveUser} from "../../../redux/actions/user"

import ProfilePage from "./ProfilePage";

const mapStateToProps = state => {
    return {
        profileImage: state.user.profileImage,
        name: state.user.title,
        bio: state.user.description,
        clubItem: state.user.phone,
        birth: state.user.website,
        colors: state.user.colors,
        clubImage: state.club.clubImage,
        title: state.club.title,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveUser: (data) => dispatch(saveUser(data)),
    };
};

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

export default ProfilePageContainer;
