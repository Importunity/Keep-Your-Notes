import React from 'react';
import './Note.css'

function Note(props){
    return (
        <div className="note">
            <div className="card note-card">
                <div className="card-header">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-body">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Note;