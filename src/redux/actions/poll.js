import * as actionTypes from "./types";
import axios from "axios"
import {url} from "../../constants"

export const switchPageAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${url}/api/polls?page=${page}`)
            dispatch(switchPage(response))
        } catch (e) {
            console.log(e)
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
            console.log(e)
        }
    }
};

export const submitVote = (response) => {
    return {
        type: actionTypes.SUBMIT_VOTE,
        payload: response
    }
};

export const getPolls = (msg, type) => {
    return {
        type: actionTypes.GET_POLLS,
        payload: {msg, type}
    }
};
