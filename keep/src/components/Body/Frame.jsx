import React from 'react';
import SideNav from './Side-Navigation/SideNav';
import ContentArea from './Main-Body/ContentArea';

function Frame(){
    return(
        <div>
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