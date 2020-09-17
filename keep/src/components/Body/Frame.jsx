import React, { useEffect } from 'react';
import SideNav from './Side-Navigation/SideNav';
import ContentArea from './Main-Body/ContentArea';
import Navbar from '../Header/Navbar';

function Frame(props){
    return(
        <div>
            <Navbar mainlocation={props.mainlocation}/>
            <div className="row">
                <div className="col-2">
                    <SideNav />
                </div>
                <div className="col-10">
                    <ContentArea />
                </div>
            </div>
        </div>
    );
}

export default Frame;