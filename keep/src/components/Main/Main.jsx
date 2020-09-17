import React, { useEffect, useRef, useState } from 'react';

import './Main.css';
import Register from './Register';
import Navbar from '../Header/Navbar';
import Frame from '../Body/Frame';

// the provider helps us share states throughout the components
import {connect, Provider} from 'react-redux';

import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';


import store from '../../store';
import { loadUser } from '../../actions/authActions';



function Main(props){

 

       // user information
   const [info, setInfo] = useState({email: "", password: "", msg: null});
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
       const {error} = props;
       //console.log(error);
       //console.log(previousError);
       // if the errror is not equal to the prevoius error reference
       if(error !== previousError){
           //console.log(error);
           // if the error id is equal to login fail
           if(error.id === 'LOGIN_FAIL'){
               // then initialize information to the msg
               setInfo({msg: error.msg.msg});
           }else{
               setInfo({msg: null});
           }
       }
       
   }, [error, previousError, info]);
   //console.log(isAuthenticated);
   //console.log(error.id);

   const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = info;

        const user = {
            email,
            password
        };

        // logging in user
        props.login(user);
        // every time the user submit the form the previous errors are cleared
        event.target.reset();
        props.clearErrors();


    };
    //console.log(info);
    const handleChange = event => {
        //setInfo({[event.target.name]: event.target.value});
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    };
    // testing
    // check the button click
    const [register, setRegister] = useState(false);



    const mainlocation = window.location.href.replace('/#', '/');
    //console.log(`mainlocation is: ${mainlocation}`);
    return (
        
        <div>
        {isAuthenticated? (
            <Provider store={store}>
            <div className="header">
                <Frame mainlocation={mainlocation}/>
            </div>
            </Provider>
        ) :(
        <div className="main-container">
             <div className="row">
                <div className="col-4"></div>
                <div className="col-4 main-form">
                    <div className="card main-card">
                            {!register? (
                                    <div className="login-container">
                                    <form id="login-form" onSubmit={handleSubmit}>
                                        <div className="card-body login-body">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control login-input" name="email" onChange={handleChange} type="email" placeholder="Email"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input className="form-control login-input" name="password" onChange={handleChange} type="password"  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"></input>
                                                </div>
                                        </div>
                                    </form>
                                </div>
                            ) : <Register mainlocation={mainlocation} />}
                        <div className="card-footer main-footer">
                            {info.msg? (
                                <div className="alert alert-danger" role="alert">
                                    {info.msg}
                                </div>
                            ):(
                                null
                            )}
                            {!register? (
                                <ul className="tab-group">
                                    {/*<li className="tab active">
                                        <a className="main-text" href="/#" form="login-form">Login</a>
                            </li>*/}
                                    <button form="login-form" className="login-btn">Login</button>
                                    <li className="tab active">
                                        <a className="main-text" href="/#" onClick={() => setRegister(true)}>Register</a>
                                    </li>   
                                </ul>
                            ) : null }
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
        )}
        </div>
    );
}

Main.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { login , clearErrors})(Main);