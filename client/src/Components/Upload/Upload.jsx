import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { upload } from '../../api/api';

export default function Upload() {
    const [file, setFile] = useState();

    function handleChange(e) {
        // Some checks on uploaded file
        if (e.target.files[0].size > 2097152) {
            alert("File size must be less than 2MB");
            e.target.value='';
        }
        else if (!e.target.files[0].name.endsWith('.json')) {
            alert("Only JSON file types allowed");
            e.target.value='';
        }
        else {
            const file = e.target.files[0];
            setFile(file);
        }
    }

    function handleSubmit(e) {
        const formData = new FormData();
        formData.append('uploaded_json', file);
        upload(formData);
    }

    return (
        <div id='form-container'>
            <input type='file' id='upload' name='uploaded_json' onChange={(e) => handleChange(e)} />
            <Button variant='primary' onClick={(e) => handleSubmit(e)}> Convert to CSV </Button>
        </div>
    );
}