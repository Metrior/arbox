import React from 'react';
import {connect} from "react-redux";

import { callClub, goWebsiteClub, emailClub} from "../../redux/actions/club"

import Contacts from "./Contacts";

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
        callClub: () => dispatch(callClub()),
        goWebsiteClub: () => dispatch(goWebsiteClub()),
        emailClub: () => dispatch(emailClub()),
    };
};

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer;
