import {EDIT_MEMBERSHIP,SAVE_MEMBERSHIP} from "../actions/types";

const initialSettingsState = {
    memberships:[{
        id:1,
        title:"Memb1",
        description:"Desc1"
    },{
        id:2,
        title:"Memb2",
        description:"Desc2"
    }]
}

const membership = (state = initialSettingsState, action) => {
    switch (action.type) {
        case EDIT_MEMBERSHIP:
            return {
                ...state,
            }
        case SAVE_MEMBERSHIP:
            const otherMemberships = state.memberships.filter(membership=>membership.id!==action.payload.id)
            return {
                ...state,
                memberships: [...otherMemberships,action.payload],
            }
        default:
            return state
    }
}

export default membership
