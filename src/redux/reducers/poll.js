import {GET_POLLS, SWITCH_PAGE, SUBMIT_VOTE} from "../actions/types";

const initialSettingsState = {
    polls:[],
    page:1,
    complete:false
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
                polls: [action.payload.data],
                page:action.payload.page,
                complete: !!action.payload.complete
            }
        default:
            return state
    }
}

export default poll
