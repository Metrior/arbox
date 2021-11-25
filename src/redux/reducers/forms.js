import {EDIT_FORM, SAVE_FORM} from "../actions/types";

const initialSettingsState = {
    forms:[{
        id:1,
        title:"Form1",
        description:"Desc1"
    },{
        id:2,
        title:"Form2",
        description:"Desc2"
    }]
}

const forms = (state = initialSettingsState, action) => {
    switch (action.type) {
        case EDIT_FORM:
            return {
                ...state,
            }
        case SAVE_FORM:
            const otherMemberships = state.forms.filter(form=>form.id!==action.payload.id)
            return {
                ...state,
                forms: [...otherMemberships,action.payload],
            }
        default:
            return state
    }
}

export default forms
