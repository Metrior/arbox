import * as actionTypes from "./types";

export const editClub = (data) => {
    return {
        type: actionTypes.EDIT_CLUB,
        payload: data
    }
};

export const saveClub = (data) => {
    return {
        type: actionTypes.SAVE_CLUB,
        payload: data
    }
};

export const callClub = () => {
    console.log("call")
    return {
        type: actionTypes.CALL_CLUB,
    }
};

export const goWebsiteClub = () => {
    return {
        type: actionTypes.SITE_CLUB,
    }
};

export const emailClub = () => {
    return {
        type: actionTypes.EMAIL_CLUB,
    }
};
