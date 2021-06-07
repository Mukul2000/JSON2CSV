import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cell.css';

//Mini display cell to just show things
export default function Cell({ id, name, email, files }) {
    return (
        <div id = 'container'>
            <Link to={`/user/${name}/${id}`}><div id='header'> {name} #{id} </div> </Link>
            {files.map((file,idx) => {
                return <Link to={`/user/${name}/${id}/${file.internal_filename}`}> <div id='afile' key = {idx}> {file.original_filename} </div> </Link> 
            })}
        </div>
    );
}