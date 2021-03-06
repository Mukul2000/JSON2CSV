import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Cell from '../Cell/Cell'
import './Search.css';

export default function Search() {
    const [value, setValue] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/user/random')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    function searchEmail() {
        axios.get('http://localhost:8000/user/search/' + value)
            .then(res => setUsers(res.data))
            .catch(e => console.log(e));
    }

    return (
        <div>
            <div id='top-area'>
            <div id='search-bar'> <input placeholder='Search user by id' value={value} onChange={(e) => setValue(e.target.value)} /> </div>
            <div id = 'submit-btn'><Button variant='primary' onClick={searchEmail}> Search </Button> </div>
            </div>
            <h4> Recents - </h4>
            <div className='card-group'>
            {users.map((user, idx) => {
                return <Cell
                    key = {idx}
                    id={user.id}
                    name={user.name}
                    files={user.files}
                />
            })}
            </div>
        </div>
    );
}