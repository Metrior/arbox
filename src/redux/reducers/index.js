import { combineReducers } from 'redux'
import user from "./user"
import club from "./club"
import memberships from "./memberships"
import forms from "./forms"


const rootReducer = combineReducers({
    user,
    club,
    memberships,
    forms
});

export default rootReducer
