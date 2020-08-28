import React from 'react';
import Archive from './Archive';
import Notes from './Notes';
import Labels from './Labels';
import Trash from './Trash';
import Reminders from './Reminders';
import './SideNav.css'

function SideNav(){
    return(
        <div className="container">
            <ul className="side-nav-list">
                <li className="item"><Notes /></li>
                <li className="item"><Reminders /></li>
                <li className="item"><Labels /></li>
                <li className="item"><Archive /></li>
                <li className="item"><Trash /></li>
            </ul>
        </div>
    );
}

export default SideNav;