import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Upload() {
    const [file, setFile] = useState();

    // TODO: Maybe put the POST request code seperately, we'll see.

    function handleChange(e) {
        const file = e.target.files[0];
        setFile(file);
    }

    function handleSubmit(e) {
        const formData = new FormData();

        formData.append('uploaded_json', file);
        try {
            axios.post('http://localhost:8000/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: JSON.parse(localStorage.getItem('user')).token
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div id='form-container'>
            {/* TODO: Limit upload file size  */}
            <input type='file' id='upload' name='uploaded_json' onChange={(e) => handleChange(e)} />
            <Button variant='secondary' onClick={(e) => handleSubmit(e)}> Convert to CSV </Button>
        </div>
    );
}