import * as actionTypes from "./types";

export const switchPage = (msg, type) => {
    return {
        type: actionTypes.SWITCH_PAGE,
        payload: {msg, type}
    }
};

export const submitVote = (msg, type) => {
    return {
        type: actionTypes.SUBMIT_VOTE,
        payload: {msg, type}
    }
};

export const getPolls = (msg, type) => {
    return {
        type: actionTypes.GET_POLLS,
        payload: {msg, type}
    }
};
