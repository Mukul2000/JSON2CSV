import React, { useEffect, useState } from 'react';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Home() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <div>
            <div id='top-container'>
                <Jumbotron fluid>
                    <h1>Convert JSON to CSV</h1>
                    <br></br>
                    <p>
                        {user ? <Button variant="primary">Upload</Button> :
                         <Button variant="primary"> Sign in</Button>}
                    </p>
                </Jumbotron>

            </div>
            <div id='bottom-container'>
                <h1> See what other users uploaded </h1>
            </div>
        </div>
    );
}