import React, { useEffect } from 'react';
import Logo from './Logo';
import MainMenu from './Main-Menu';
import './Navbar.css'
import Search from './Search';
import Refresh from './Refresh';
import View from './View';
import Setting from './Setting';
import Logout from './Logout';

import store from '../../store';
import { loadUser } from '../../actions/authActions';

function Navbar(props){
    //console.log(props.mainlocation);
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto left-items">
                        <li className="nav-item nav-left active items"><MainMenu /></li>
                        <li className="nav-item nav-left active items">
                            <span className="fa-stack fa-lg">
                                <i title="Keep" className="fa fa-sticky-note fa-lg fa-stack-2x"></i>
                                <i className="far fa-lightbulb fa-md fa-stack-1x fa-inverse"></i>
                            </span>
                        </li>
                        <li className="nav-item active items"><Logo /></li>
                    </ul>
                    <ul className="navbar-nav mr-auto search-bar">
                        <li className="nav-item active"><Search/></li>
                    </ul>
                    <ul className="navbar-nav ml right-items">
                        <li className="nav-item nav-right active items"><Refresh /></li>
                        <li className="nav-item nav-right active items"><View /></li>
                        <li className="nav-item nav-right active items"><Setting /></li>
                        <li className="nav-item nav-right active items"><Logout mainlocation={props.mainlocation}/></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;