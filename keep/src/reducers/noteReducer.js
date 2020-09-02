// where we check out actions for notes
import uuid from 'uuid';
import {GET_NOTES, ADD_NOTE, DELETE_NOTE} from '../actions/types';
const initialState = {
    notes: [
        {id: uuid(), title: 'Hello', content: 'World'},
        {id: uuid(), title: 'Hello1', content: 'World1'},
        {id: uuid(), title: 'Hello2', content: 'World2'},
        {id: uuid(), title: 'Hello3', content: 'World3'}

    ]
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_NOTES:
            return {
                ...state
            };
        default:
            return state
    }
}