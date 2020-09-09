// this javascript file is used to make request to the backend
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from './types';
import axios from 'axios';

export const getNotes = () => dispatch =>{
    return {
        type: GET_NOTES
    }
    /*dispatch(setNotesLoading());
    axios
    // getting the notes from the backend 
        .get('/api/notes')
        .then(response => dispatch({
            // payload contains the data
            type: GET_NOTES,
            payload: response.data
        }))*/
    
};

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
};

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
};

export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    }
};