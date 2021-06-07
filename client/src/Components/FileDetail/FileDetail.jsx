import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {useParams} from 'react-router-dom';
import './FileDetail.css'
import {download} from '../../api/api';

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
        download('/files/'+filename, 'file.json');
    }

    function csv() {
        download('/files/'+filename+'.csv', 'converted.csv');
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