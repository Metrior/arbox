import {GET_POLLS, SWITCH_PAGE, SUBMIT_VOTE} from "../actions/types";

const initialSettingsState = {
    polls:[]
}

const poll = (state = initialSettingsState, action) => {
    switch (action.type) {
        case GET_POLLS:
        case SWITCH_PAGE:
        case SUBMIT_VOTE:
            return {
                ...state,
                polls: [action.payload]
            }
        default:
            return state
    }
}

export default poll
