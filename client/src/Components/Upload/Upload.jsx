import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Upload() {
    const [file, setFile] = useState();

    // TODO: Maybe put the POST request code seperately, we'll see.

    function handleChange(e) {
        if(e.target.files[0].size > 2097152) {
            alert("File size must be less than 2MB");
            e.target.value='';
        }
        else if(!e.target.files[0].name.endsWith('.json')) {
            alert("Only JSON file types allowed");
            e.target.value='';
        }
        else {
            const file = e.target.files[0];
            setFile(file);
        }
    }

    async function handleSubmit(e) {
        const formData = new FormData();

        formData.append('uploaded_json', file);
        try {
            const response = await axios.post('http://localhost:8000/files', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: JSON.parse(localStorage.getItem('user')).token
                }
            });
            const url = 'http://localhost:8000/files/' + response.data
            // Dirty workaround to download file.
            axios({
                url: url,
                method: 'GET',
                responseType: 'blob', // important
              }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', "converted.csv");
                document.body.appendChild(link);
                link.click();
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