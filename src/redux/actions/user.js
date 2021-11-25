import * as actionTypes from "./types";

export const editUser = (data) => {
    return {
        type: actionTypes.EDIT_USER,
        payload: data
    }
};

export const saveUser = (data) => {
    return {
        type: actionTypes.SAVE_USER,
        payload: data
    }
};
