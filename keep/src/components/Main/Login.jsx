import React from 'react';

function Login(){
    return (
        <div className="container">
            <form>
                <label>Username</label>
                <input type="text" placeholder="Password"></input>
                <button>Login</button>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Login;