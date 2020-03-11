import {FETCH_CURRENT_USER_SUCCESS} from "../actions/authActions";

let initialState = {
    currentUser: null,
};

export default (state=initialState, action) => {
    switch (action.type) {

        case FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.user
            };

        default:
            return state;
    }
};