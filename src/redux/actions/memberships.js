import * as actionTypes from "./types";

export const editMembership = (data) => {
    return {
        type: actionTypes.EDIT_MEMBERSHIP,
        payload: data
    }
};

export const saveMembership = (data) => {
    return {
        type: actionTypes.SAVE_MEMBERSHIP,
        payload: data
    }
};
