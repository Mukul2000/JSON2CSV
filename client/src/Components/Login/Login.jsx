import React, { useEffect } from 'react';
import "./Login.css";
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    // Uses OAuth only for the time being, leaving the page here for future purposes.
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user')) {
            alert('Already logged in');
            history.push('/');
        }
    }, []);

    function googleSuccess(res) {
        const user = {
            profile: res.profileObj,
            token: res.tokenId
        };
        axios.post('http://localhost:8000/user/login', res.profileObj)
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        })
        .catch(e => console.log(e));
        
    }

    function googleFailure(err) {
        alert('There was a problem logging in')
        console.log(err);
    }

    return (
        <div id="login-container" className='text-center'>
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