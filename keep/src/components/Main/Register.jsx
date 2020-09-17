import React, { useEffect, useRef, useState } from 'react';
import './Register.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import './Register.css';

const Authenticated = () => (
    <div className="alert alert-success" role="alert">
        <h6>Account Creation Successful, Please Return to Home Page</h6>
    </div>
)


function Register(props){
    //console.log(`main location: ${props.mainlocation}`)
    // user information
    const [info, setInfo] = useState({name: "", email: "", password: "", msg: null});
    // retrieve the error responses
    const {error, isAuthenticated} = props;
    //console.log(error);
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
            name,
            email,
            password
        };

        // registering user
        props.register(newUser);
        // every time the user submit the form the previous errors are cleared
        event.target.reset();
        props.clearErrors();

    };

    const handleChange = event => {
        //setInfo({[event.target.name]: event.target.value});
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    };


    //console.log(info.name);
    return(
        <div className="register-container">
            <form id="register-form" onSubmit={handleSubmit}>
                <div className="card-body register-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control login-input" name="name" type="text" placeholder="Name" onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control login-input" name="email" type="email" placeholder="Email" onChange={handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control login-input" name="password" type="password" onChange={handleChange}  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"></input>
                    </div>
                </div>
                <div className="card-footer main-footer">
                    <ul className="tab-group"> 
                        {/*<li className="tab active">
                            <a className="main-text" href="/#" type="submit" value="submit">Register</a>
                        /li> */}  
                        {info.msg? (
                            <div className="alert alert-danger" role="alert">
                                {info.msg}
                            </div>
                        ):(
                            null
                        )}
                        {isAuthenticated? (
                            <Authenticated />
                        ) : (
                            null
                        )}
                        <button className="register-btn">Submit</button>
                        <li className="tab active return">
                            <a className="main-text" href={props.mainlocation} type="submit" value="submit">Return To Main Page</a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
  
export default connect(
    mapStateToProps, 
    { register, clearErrors }
)(Register);