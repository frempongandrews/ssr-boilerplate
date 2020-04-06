export const FETCH_ADMINS_START = "FETCH_ADMINS_START";
export const FETCH_ADMINS_SUCCESS = "FETCH_ADMINS_SUCCESS";
export const FETCH_ADMINS_ERROR = "FETCH_ADMINS_ERROR";

export const fetchAdmins = () => {
    return (dispatch, getState, api) => {
        dispatch({
            type: FETCH_ADMINS_START
        });
        return api.get("/admins")
            .then(res => {
                dispatch({
                    type: FETCH_ADMINS_SUCCESS,
                    admins: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_ADMINS_ERROR,
                    error: err
                })
            })

    }
};