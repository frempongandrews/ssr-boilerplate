import axios from "axios";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const fetchUsers = () => {
     return async (dispatch, getState, api) => {
         //api is the axiosInstance created in client.js

         dispatch({
             type: FETCH_USERS_START,
         });

         return api.get("/users")
             .then(res => {
                 dispatch({
                     type: FETCH_USERS_SUCCESS,
                     users: res.data
                 })
             })
             .catch(err => {
                 dispatch({
                     type: FETCH_USERS_SUCCESS,
                     error: err
                 })
             })

     }
};