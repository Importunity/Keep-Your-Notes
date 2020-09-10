// this javascript file is used to make request to the backend
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from './types';
import axios from 'axios';

export const getNotes = () => dispatch =>{
    dispatch(setNotesLoading());
    axios
        // makes a request to http://localhost:5000/api/notes
        // to retrieve the notes and the data
        .get('/api/notes')
        .then(response => 
            dispatch({
                type: GET_NOTES,
                payload: response.data
            })
        )
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

export const deleteNote = (id) => dispatch => {
    axios
        .delete(`/api/notes/${id}`)
        .then(response => dispatch({
            type: DELETE_NOTE,
            payload: id
        }))
    /*return {
        type: DELETE_NOTE,
        payload: id
    }*/
};

/*export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
};*/

export const addNote = (note) => dispatch => {
    axios
        .post('/api/notes', note)
        .then(response => dispatch({
            type: ADD_NOTE,
            payload: response.data
        }))
};


export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    }
};