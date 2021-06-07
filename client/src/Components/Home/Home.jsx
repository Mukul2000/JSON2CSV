import React, { useEffect, useState } from 'react';
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Upload from '../Upload/Upload';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

export default function Home() {
    const [user, setUser] = useState();

    useEffect(() => {
        if (localStorage.getItem('user')) setUser(JSON.parse(localStorage.getItem('user')));
    }, [user]);

    function logout() {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <div>
            <div id='top-container'>
                <Jumbotron fluid>
                    {user ? <div id='user-bar'>
                       <Link to={`/user/${user.profile.name}/${user.profile.googleId}`}> <Button className='btn btn-dark'> My Profile </Button> </Link>
                        <Button className='btn btn-dark' onClick={logout}> Log Out </Button>
                    </div> : null}

                    <h1>Convert JSON to CSV</h1>
                    <br></br>
                    <p>
                        {user ? <Upload /> :
                            <Link to='/login'><Button variant='primary'> Sign In</Button></Link>}
                    </p>
                </Jumbotron>

            </div>

            <div id='bottom-container'>
                <h1 id='heading'> See what other users uploaded </h1>
                <Search />
            </div>
        </div>
    );
}