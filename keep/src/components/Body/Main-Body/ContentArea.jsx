import React, {useState} from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getNotes} from '../../../actions/noteActions';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function ContentArea(props){
    //console.log(props.note.notes);
    useEffect(() =>{
        props.getNotes();
        //console.log(note.getNotes);
    },[props.getNotes]);

    const notess = props.note.notes;
    //console.log(notess.length);
    /*for(var i = 0; i < notess.length; i++){
        console.log(notess[i]);
    }*/

    const [notes, setNotes] = useState([]);


    // when adding a note, return the previous notes and the new note
    function addNote(newNote) {
        setNotes(prevNotes => {
            // returns the previous note and append the new note
            return [...prevNotes, newNote];
        });
    }


    // deletes the note on click of triple dots and clicking delete from dropdown
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
            return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <CreateNote onAdd={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />);
                })
            }
            {notess.map((objectNote, index) => {
                return (
                    <Note key={index} id={index} title={objectNote.title} content={objectNote.content} />
                );
            })}
        </div>
    );
}

ContentArea.propTypes = {
    getNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired
}

/*function mapStateToProps(state){
    return {
        note: state.note
    };
}*/


const mapStateToProps = state => ({
    note: state.note
});
  

export default connect(mapStateToProps, {getNotes})(ContentArea);