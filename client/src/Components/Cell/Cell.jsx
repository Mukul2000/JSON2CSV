import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cell.css';

//Mini display cell to just show things
export default function Cell({ id, name, files }) {
    return (
        <div id = 'container' className="card border-dark bg-light mb-3" >
            <Link to={`/user/${name}/${id}`}>
                <div id='header' className='card-header'>User - {name} #{id} </div>
            </Link>

            {files.map((file,idx) => {
                return <Link to={`/user/${name}/${id}/${file.internal_filename}`}> 
                            <div id='afile' key = {idx} className='card-body link-secondary' > {file.original_filename} </div>
                        </Link> 
            })}
        </div>
    );
}