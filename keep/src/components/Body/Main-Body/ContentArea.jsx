import React from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import {connect} from 'react-redux';
import {getNotes, deleteNote, addNote} from '../../../actions/noteActions';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './ContentArea.css';

// lightbulb
const CenterLightbulb = () => (
    <div className="empty-content">
        <i id="ca-lightbulb" className="far fa-lightbulb fa-5x"></i>
        <h5>Notes you add appear here</h5>
    </div>
)
function ContentArea(props){
    //console.log(props.note.notes);
    useEffect(() =>{
        props.getNotes();
        //console.log(note.getNotes);
    },[props.getNotes]);

    const notes = props.note.notes;
    //console.log(notes.length);
    /*for(var i = 0; i < notes.length; i++){
        console.log(notes[i]);
    }*/

    //const [notes] = useState([]);


    // when adding a note, return the previous notes and the new note
    /*function addNote(newNote) {
        setNotes(prevNotes => {
            // returns the previous note and append the new note
            return [...prevNotes, newNote];
        });
    }*/

    function addNote(newNote){
        //console.log(newNote.id);
        props.addNote(newNote);
    }


    // deletes the note on click of triple dots and clicking delete from dropdown
    /*function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }*/
    /*for(let i = 0; i < props.deleteNote; i++){
        console.log(deleteNote[i]);
    }*/
    function deleteNote(id){
        //console.log(`id is: ${id}`);
        props.deleteNote(id);
    }
    //console.log(props.deleteNote.id);



    return (
        <div className="container">
            <CreateNote onAdd={addNote} />
            {notes.length > 0? null : <CenterLightbulb />}
            {/*notes.map((note, index) => {
                return (
                    <Note key={note._id} id={note._id} title={note.title} content={note.content}  onDelete={deleteNote} />);
                })*/
            }
            {notes.map((objectNote, index) => {
                //console.log(index);
                return(
                    <div className="row">
                        <Note key={objectNote._id} id={objectNote._id} title={objectNote.title} content={objectNote.content} onDelete={deleteNote} />
                    </div>
                );
                /*return (
                    <Note key={objectNote._id} id={objectNote._id} title={objectNote.title} content={objectNote.content} onDelete={deleteNote} />
                );*/
            })}
        </div>
    );
}

ContentArea.propTypes = {
    getNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    note: state.note
});
  

export default connect(mapStateToProps, {getNotes, deleteNote, addNote})(ContentArea);