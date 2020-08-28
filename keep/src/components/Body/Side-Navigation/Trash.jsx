import React from 'react';
import './Trash.css'

function Trash(){
    return(
        <div>
            <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-lg fa-stack-1x"></i>
                <i className="far fa-trash-alt fa-stack-1x "></i>
            </span>
        </div>
    );
}

export default Trash;