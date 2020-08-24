import React from 'react';
import SideNav from './SideNav';
import Note from './Note';

function Frame(){
    return(
        <div>
            <div className="row">
                <div className="col-2">
                    <SideNav />
                </div>
                <div className="col-10">
                    <Note />
                </div>
            </div>
        </div>
    );
}

export default Frame;