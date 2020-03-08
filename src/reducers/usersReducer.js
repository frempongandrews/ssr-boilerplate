import {FETCH_USERS_ERROR, FETCH_USERS_START, FETCH_USERS_SUCCESS} from "../actions/usersActions";

const initialState = {
    users: [],
    isFetchingUsers: false,
    isFinishedFetchingUsers: false,
    areUsersFetched: false,
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USERS_START:
            return {
                ...state,
                isFetchingUsers: true,
                isFinishedFetchingUsers: false,
                areUsersFetched: false,
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetchingUsers: false,
                isFinishedFetchingUsers: true,
                areUsersFetched: true,
                users: action.users
            };

        case FETCH_USERS_ERROR:
            return {
                ...state,
                isFetchingUsers: false,
                isFinishedFetchingUsers: true,
                areUsersFetched: false,
                error: action.error
            };

        default:
            return state;
    }
}