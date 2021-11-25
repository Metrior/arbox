import * as actionTypes from "./types";

export const editForm = (data) => {
    return {
        type: actionTypes.EDIT_FORM,
        payload: data
    }
};

export const saveForm = (data) => {
    return {
        type: actionTypes.SAVE_FORM,
        payload: data
    }
};
