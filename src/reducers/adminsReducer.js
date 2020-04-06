import {FETCH_ADMINS_ERROR, FETCH_ADMINS_START, FETCH_ADMINS_SUCCESS} from "../actions/adminsActions";

const initialState = {
    admins: [],
    isFetchingAdmins: false,
    isFinishedFetchingAdmins: false,
    areAdminsFetched: false,
    error: {}
};

export default (state=initialState, action) => {
    switch (action.type) {

        case FETCH_ADMINS_START:
            return {
                ...state,
                isFetchingAdmins: true,
                isFinishedFetchingAdmins: false,
                areAdminsFetched: false,
            };

        case FETCH_ADMINS_SUCCESS: {
            return {
                ...state,
                isFetchingAdmins: false,
                isFinishedFetchingAdmins: true,
                areAdminsFetched: true,
                admins: action.admins
            }
        }

        case FETCH_ADMINS_ERROR: {
            return {
                ...state,
                isFetchingAdmins: false,
                isFinishedFetchingAdmins: true,
                areAdminsFetched: false,
                error: action.error
            }
        }

        default:
            return state;
    }
}