import React, {useState} from 'react';
import CreateNote from './CreateNote';
import Note from './Note';

function ContentArea(){
    const [notes, setNotes] = useState([]);

    // when adding a note, return the previous notes and the new note
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }
    return (
        <div className="container">
            <CreateNote onAdd={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note key={index} id={index} title={note.title} content={note.content}/>);
                })
            }
        </div>
    );
}

export default ContentArea;