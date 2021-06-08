import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useParams, Link } from 'react-router-dom';

export default function UserDetail() {
    const [files, setFiles] = useState([]);
    const { name, id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/user/' + id)  // returns a list of object
            .then(res => {
                setFiles(res.data);
            })
            .catch(e => console.log(e));
    }, []);


    return (
        <div className='m-5'>
            <h4>User name : {name} </h4> 
            <h6>User id : {id}</h6>
            <p> Uploaded files : </p>
            {files.map((file, idx) => {
                return <Link to={`/user/${name}/${id}/${file.internal_filename}`}><div key = {idx}> {file.original_filename} </div> </Link>
            })}
        </div>
    );
}