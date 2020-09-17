import React, { useEffect, useRef, useState } from 'react';
import './Login.css';

import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';


// the provider helps us share states throughout the components
import { connect } from 'react-redux';


function Login(props){
   // user information
   const [info, setInfo] = useState({name: "", email: "", password: "", msg: null});
   // retrieve the error responses
   const {error, isAuthenticated} = props;
   // use reference to contain the previous error
   const previousErrorReference = useRef();
   useEffect(() => {
       const {error} = props;
       // the current previouserrorreference is initialized to error
       previousErrorReference.current = error;
   });
   // previous error is not equal to the previouserrorreference
   const previousError = previousErrorReference.current;
   useEffect(() => {
       // if the errror is not equal to the prevoius error reference
       if(error !== previousError){
           //console.log(error);
           // if the error id is equal to register fail
           if(error.id === 'REGISTER_FAIL'){
               // then initialize information to the msg
               setInfo({msg: error.msg.msg});
           }else{
               setInfo({msg: null});
           }
       }
       
   }, [info.msg]);

   const handleSubmit = event => {
    event.preventDefault();
    const {name, email, password} = info;

    const newUser = {
        email,
        password
    };

    // logging in user
    props.login(newUser);
    // every time the user submit the form the previous errors are cleared
    event.target.reset();
    props.clearErrors();

    };

    const handleChange = event => {
        //setInfo({[event.target.name]: event.target.value});
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    };


    return (
        <div className="login-container">
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="card-body login-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control login-input" onChange={handleChange} type="email" placeholder="Email"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control login-input" onChange={handleChange} type="password"  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"></input>
                        </div>
                </div>
            </form>
            {}
        </div>
        );
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
    
export default connect(mapStateToProps, { login , clearErrors})(Login);