// this javascript file is used to make request to the backend
import {GET_NOTES, ADD_NOTE, DELETE_NOTE} from './types';

export const getNotes = () =>{
    return {
        type: GET_NOTES
    }
};
