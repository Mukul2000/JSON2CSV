import React from 'react';
import "./Login.css";
import GoogleLogin from 'react-google-login';

export default function Login({ setUser }) {
    function googleSuccess(res) {
        const user = {
            profile: res.profileObj,
            token: res.tokenId
        };
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    }

    function googleFailure(err) {
        alert('There was a problem logging in')
        console.log(err);
    }

    return (
        <div id="login-container">
            <h1> Login Page </h1>
            <GoogleLogin
                clientId="709601355432-7216gbncr7mdr0oku6n9bc9i7jt45736.apps.googleusercontent.com"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                buttonText="Sign in with Google"
            />
        </div>
    );
}