import * as actionTypes from "./types";
import axios from "axios"
import {url} from "../../constants"

export const switchPageAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${url}/api/polls?page=${page}`)
            dispatch(switchPage(response))
        } catch (e) {
            dispatch(manageError(e.message))
        }
    }
}

export const switchPage = (response) => {
    return {
        type: actionTypes.GET_POLLS,
        payload: response
    }
};

export const submitVoteAsync = (poll, option) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${url}/api/poll/${poll}/vote/${option}`)
            dispatch(submitVote(response))
        } catch (e) {
            dispatch(manageError(e.message))
        }
    }
};

export const submitVote = (response) => {
    return {
        type: actionTypes.SUBMIT_VOTE,
        payload: response
    }
};

export const getPollsAsync = () => {
    return async dispatch => {
        try {
            const response = await axios.post(`${url}/api/polls?page=1`)
            dispatch(getPolls(response))
        } catch (e) {
            dispatch(manageError(e.message))
        }
    }
};

export const getPolls = (response) => {
    return {
        type: actionTypes.GET_POLLS,
        payload: response
    }
};

export const manageError = (error) => {
    return {
        type: actionTypes.ERROR,
        payload: error
    }
}
