import React, { useEffect, useState } from 'react';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Upload from '../Upload/Upload';
import { Link } from 'react-router-dom';

export default function Home() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <div>
            <div id='top-container'>
                <Jumbotron fluid>
                    <h1>Convert JSON to CSV</h1>
                    <br></br>
                    <p>
                        {user ? <Upload /> :
                            <Link to='/login'><Button variant='primary'> Sign In</Button></Link>}
                    </p>
                </Jumbotron>

            </div>

            <div id='bottom-container'>
                <h1> See what other users uploaded </h1>
            </div>
        </div>
    );
}