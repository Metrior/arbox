import { EDIT_CLUB, SAVE_CLUB, CALL_CLUB, EMAIL_CLUB, SITE_CLUB } from "../actions/types";

const initialSettingsState = {
    clubImage:"https://previews.123rf.com/images/branche/branche1304/branche130400116/19263737-gym-icon-bodybuilder.jpg",
    title:"Best gym & Co.",
    description:"Best gym",
    phone: 113,
    website:"google.com",
    email:null,
    colors:"#5454e5"
}

const club = (state = initialSettingsState, action) => {
    switch (action.type) {
        case EDIT_CLUB:
        case CALL_CLUB:
        case EMAIL_CLUB:
        case SITE_CLUB:
            return {
                ...state,
            }
        case SAVE_CLUB:
            return {
                ...state,
                clubImage: action.payload.clubImage,
                title:action.payload.title,
                description:action.payload.description,
                phone: action.payload.phone,
                website:action.payload.website,
                email:action.payload.email,
                colors:action.payload.colors
            }
        default:
            return state
    }
}

export default club
