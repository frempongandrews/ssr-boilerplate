export const FETCH_CURRENT_USER_START = "FETCH_CURRENT_USER_START";
export const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
export const FETCH_CURRENT_USER_ERROR = "FETCH_CURRENT_USER_ERROR";

export const fetchCurrentUser =  () => {
    return (dispatch, getState, api) => {
        dispatch({
            type: FETCH_CURRENT_USER_START
        });
        return api.get("/current_user")
            .then(res => {
                console.log("************* FETCH_CURRENT_USER", res);
                dispatch({
                    type: FETCH_CURRENT_USER_SUCCESS,
                    user: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCH_CURRENT_USER_ERROR,
                    error: err
                });
            })

    }
};