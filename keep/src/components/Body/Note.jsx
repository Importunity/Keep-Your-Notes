import React from 'react';
import './Note.css'

function Note(){
    return (
        <div className="container take-a-note-container">
            <input className="take-a-note" type="text" placeholder="Take a note..." />
        </div>
    );
}


export default Note;