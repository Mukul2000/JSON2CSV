import React from 'react';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div>
            <div id='top-container'>
                <Jumbotron fluid>
                    <h1>Upload your file for conversion!</h1>
                    <p>
                        Form going to come up here
                    </p>
                    <p>
                        <Button variant="primary">Submit</Button>
                    </p>
                </Jumbotron>
                {/* Need to add user avatar here */}
            </div>
            <div id='bottom-container'>
                <h1> See what other users uploaded </h1>
            </div>
        </div>
    );
}