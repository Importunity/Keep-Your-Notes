import {GET_ERRORS, CLEAR_ERRORS } from './types';

// get errors
export const getErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status, id}
    };
};

// clear errors
export const clearErrors = () => {
    return{
        type: CLEAR_ERRORS
    };
};