import React, { useEffect, useState } from 'react';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Upload from '../Upload/Upload';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

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
                {/* I'll add a search bar to search for files of any user. Clicking on user goes to user detail page, clicking on file goes to FileDetail page
                This job is suited to a component */}
                <h1> See what other users uploaded </h1>
                <Search/>
            </div>
        </div>
    );
}