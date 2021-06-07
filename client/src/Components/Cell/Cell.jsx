import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cell.css';

//Mini display cell to just show things
export default function Cell({ name, email, files }) {
    return (
        <div id = 'container'>
            <Link to={`/user/${email}`}><div id='header'> {name} {email} </div> </Link>
            {files.map((file,idx) => {
                return <div id='afile' key = {idx}> {file.original_filename} </div>
            })}
        </div>
    );
}