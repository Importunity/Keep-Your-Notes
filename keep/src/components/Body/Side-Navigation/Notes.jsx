import React from 'react';
import './Notes.css';

function Notes(){
    return (
        <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-lg fa-stack-1x"></i>
            <i className="far fa-lightbulb fa-stack-1x "></i>
        </span>
    );
}

export default Notes;
