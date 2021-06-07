import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {useParams} from 'react-router-dom';
import './FileDetail.css'

export default function FileDetail() {
    const [fileData, setData] = useState([]);
    const {name, id, filename} = useParams();

    useEffect(() => {
        const url = 'http://localhost:8000/files/' + filename;
        axios.get(url)
        .then((res) => setData(res.data))
        .catch(e => console.log(e));
    }, []);

    function json() {
        const url = 'http://localhost:8000/files/' + filename;
            // Dirty workaround to download file.
            axios({
                url: url,
                method: 'GET',
                responseType: 'blob', // important
              }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', "file.json");
                document.body.appendChild(link);
                link.click();
              });
    }

    function csv() {
        const url = 'http://localhost:8000/files/' + filename + '.csv';
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
    
    return (
        <div className='m-5'>
            {name} {id}
            <br></br>
            <div id='text-area'>
                {/* So the JSON file could just be one json or multiple json as a list. Each of the below lines work for one of them. Have to find a way to do for both. */}
                <div id = 'text' className='m-2'> {JSON.stringify(fileData)} </div>
            
            </div>
            <div id='download button'>
                Download as : 
                <Button className='m-4' id ='json' variant='primary' onClick={json}> JSON </Button>
                <Button id ='csv' variant='primary' onClick={csv}> CSV </Button>
            </div>
        </div>
    );
}