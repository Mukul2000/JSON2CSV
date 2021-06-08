import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {Link, useParams} from 'react-router-dom';
import './FileDetail.css'
import {download} from '../../api/api';

// Shows details of a file and options to download it as CSV or JSON.
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
            Owner - 
            <Link to = {`/user/${name}/${id}`}>
            <h4>{name} </h4> 
            <h6>#{id}</h6>
            </Link>
            <br></br>
            File content - 
            <div id='text-area'>
                <div id = 'text' className='m-2'>{JSON.stringify(fileData, null, 10)} </div>            
            </div>
            <div id='download-buttons'>
                Download as : 
                <Button className='m-4' id ='json' variant='primary' onClick={json}> JSON </Button>
                <Button id ='csv' variant='primary' onClick={csv}> CSV </Button>
            </div>
        </div>
    );
}