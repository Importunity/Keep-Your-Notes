import axios from 'axios';
import {USER_LOADING,USER_LOADED ,AUTH_ERROR ,LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_SUCCESS ,REGISTER_FAIL} from './types';
import { getErrors } from './errorActions';

// check the token and load the user
// since we want the token also it is good to have the state
export const loadUser = () => (dispatch, getState) => {
    // dispatches an action to trigger a state change
    dispatch({type: USER_LOADING});

    // retrieving the information from api/auth/user
    axios.get('/api/auth/user', tokenConfig(getState))
        // then as a response, we'll assign the type to userloaded and assign payload to the response data
        .then(response => dispatch({
            type: USER_LOADED,
            payload: response.data
        }))
        // if there's an error then 
        .catch(error => {
            // dispatch the errors action witht he response data and the status
            dispatch(getErrors(error.response.data, error.response.status));
            // then assign the type to the authentication error
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// setup config/headers and token
export const tokenConfig = getState => {
        // this will go into the authReducer and retrieve the token from the initial state localstorage
        const token = getState().user.token;

        // headers
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
    
        // add the token
        if(token){
            config.headers['x-auth-token'] = token;
        }
    return config;
}