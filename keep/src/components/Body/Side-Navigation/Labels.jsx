import React from 'react';
import './Labels.css'

function Labels(){
    return (
        <div>
            <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-lg fa-stack-1x"></i>
                <i className="far fa-tag fa-stack-1x "></i>
            </span>
        </div>
    );
}

export default Labels;