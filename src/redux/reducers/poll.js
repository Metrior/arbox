import {GET_POLLS, SWITCH_PAGE, SUBMIT_VOTE, ERROR} from "../actions/types";

const initialSettingsState = {
    polls:[],
    page:1,
    complete:false,
    error: null
}

const poll = (state = initialSettingsState, action) => {
    switch (action.type) {
        case GET_POLLS:
        case SUBMIT_VOTE:
            return {
                ...state,
                polls: [action.payload]
            }
        case SWITCH_PAGE:
            return {
                ...state,
                polls: [...action.payload.data],
                page:action.payload.page,
                complete: !!action.payload.complete
            }
        case ERROR:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}

export default poll
