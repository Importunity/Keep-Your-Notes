import React, {useState} from 'react';
import CreateNote from './CreateNote';
import Note from './Note';

function ContentArea(){
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
        </div>
    );
}

export default ContentArea;