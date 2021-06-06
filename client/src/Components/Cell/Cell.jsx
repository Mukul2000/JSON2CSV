import React, { useEffect } from 'react';

export default function Cell({name, email, files}) {
    return (
        <div>
            <div id = 'header'> {name} {email} </div>
            {files.map((file) => {
                return <div> {file.original_filename} </div>
            })}
        </div>
    );
}