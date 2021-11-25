import React from 'react';
import {connect} from "react-redux";

import {saveClub, callClub, goWebsiteClub, emailClub} from "../../../redux/actions/club"

import ClubPage from "./ClubPage";

const mapStateToProps = state => {
    return {
        clubImage: state.club.clubImage,
        title: state.club.title,
        description: state.club.description,
        phone: state.club.phone,
        website: state.club.website,
        email: state.club.email,
        colors: state.club.colors,
        memberships: state.memberships.memberships,
        forms: state.forms.forms,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveClub: (data) => dispatch(saveClub(data)),
        // callClub: () => dispatch(callClub()),
        // goWebsiteClub: () => dispatch(goWebsiteClub()),
        // emailClub: () => dispatch(emailClub()),
    };
};

const ClubPageContainer = connect(mapStateToProps, mapDispatchToProps)(ClubPage)

export default ClubPageContainer;
