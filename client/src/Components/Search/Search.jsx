import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Cell from '../Cell/Cell'

export default function Search() {
    const [value, setValue] = useState('');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/user/random')
            .then((res) => setRecords(res.data))
            .catch((err) => console.log(err));
    }, []);

    function searchEmail() {
        axios.get('http://localhost:8000/user/search/'+value)
        .then(res => setRecords(res.data))
        .catch(e => console.log(e)); 
    }

    return (
        <div>
            <div id='search-bar'> <input placeholder='Search user by e-mail' value={value} onChange={(e) => setValue(e.target.value)} /> </div>
            <Button variant='primary' onClick={searchEmail}> Search </Button>
            {records.map((record, index) => {
                return <Cell
                    key={index}
                    name={record.name}
                    email={record.email}
                    files={record.files}
                />
            })}
        </div>
    );
}