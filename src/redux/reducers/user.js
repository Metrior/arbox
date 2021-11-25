import { EDIT_USER, SAVE_USER } from "../actions/types";

const initialSettingsState = {
    profileImage:"https://www.theonering.net/torwp/wp-content/uploads/2013/05/samwise-gamgee.jpg",
    name:"Sam",
    bio:"body builder",
    clubItem: null,
    birth:"06.04.1380",
    colors:"green"
}

const user = (state = initialSettingsState, action) => {
    switch (action.type) {
        case EDIT_USER:
            return {
                ...state,
            }
        case SAVE_USER:
            return {
                ...state,
                profileImage: action.payload.image,
                name:action.payload.name,
                bio:action.payload.bio,
                clubItem: action.payload.clubItem,
                birth:action.payload.birth,
                colors:action.payload.colors
            }
        default:
            return state
    }
}

export default user
