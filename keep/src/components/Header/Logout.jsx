import React, { Fragment } from 'react';
import './Logout.css';
import {logout} from '../../actions/authActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Logout(props){
    return (
        <div>
            <Fragment>
                <a href={props.mainlocation} onClick={props.logout}><i className="fas fa-sign-out-alt"></i></a>
            </Fragment>
        </div>
    );
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(null, {logout})(Logout);
