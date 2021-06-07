import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useParams, Link } from 'react-router-dom';

export default function UserDetail() {
    const [files, setFiles] = useState([]);
    const [page, setPage] = useState(1);
    const { name, id } = useParams();
    const left = '<';
    const right = '>';

    useEffect(() => {
        axios.get('http://localhost:8000/user/' + id + '/' + page)  // returns a list of object
            .then(res => {
                setFiles(res.data);
            })
            .catch(e => console.log(e));
    }, [page]);


    return (
        <div>
            <h1 id='hhege'> {name} {id} </h1>
            {files.map((file) => {
                return <Link to={`/user/${name}/${id}/${file.internal_filename}`}><div> {file.original_filename} </div> </Link>
            })}
            <div id='pages'>
                {page > 1 ? <Button variant='light' onClick={(e) => setPage(page - 1)}> {left} </Button> : null}
                {page}
                {files.length > 0 ? <Button variant='light' onClick={(e) => setPage(page + 1)}> {right} </Button> : null}
            </div>
        </div>
    );
}