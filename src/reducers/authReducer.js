import {FETCH_CURRENT_USER_ERROR, FETCH_CURRENT_USER_START, FETCH_CURRENT_USER_SUCCESS} from "../actions/authActions";

let initialState = {
    isFetchingCurrentUser: false,
    isFinishedFetchingCurrentUser: false,
    isCurrentUserFetched: false,
    currentUser: null,
    error: {}
};

export default (state=initialState, action) => {
    switch (action.type) {

        case FETCH_CURRENT_USER_START: {
            return {
                ...state,
                isFetchingCurrentUser: true,
                isFinishedFetchingCurrentUser: false,
                isCurrentUserFetched: false,
            }
        }

        case FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isFetchingCurrentUser: false,
                isFinishedFetchingCurrentUser: true,
                isCurrentUserFetched: true,
                currentUser: action.user === "" ? null : action.user
            };
        case FETCH_CURRENT_USER_ERROR:
            return {
                ...state,
                isFetchingCurrentUser: false,
                isFinishedFetchingCurrentUser: true,
                isCurrentUserFetched: false,
                currentUser: false,
                error: action.error
            };

        default:
            return state;
    }
};