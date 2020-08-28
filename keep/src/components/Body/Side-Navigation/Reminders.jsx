import React from 'react';
import './Reminders.css'

function Reminders(){
    return (
        <div>
            <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-lg fa-stack-1x"></i>
                <i className="far fa-bell fa-stack-1x "></i>
            </span>
        </div>
    );
}

export default Reminders;