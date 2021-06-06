import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserFile from './UserFile/UserFile';

export default function UserDetail({ user_id }) {
    const [userInfo, setInfo] = useState();
    const [files, setFiles] = useState({});

    useEffect(() => {
        // Get all files of a user
        const fetchData = async () => {
            const response = await axios.get('localhost:8000/user/' + user_id);
            setFiles[response.data];
        }
        fetchData();
    }, [])

    return (
        <div>
            <div id = 'user-info'>
                <h2> User info come somewhere </h2>
            </div>
            <div id = 'file-list'>
                {files.foreach((file_data) => 
                 <UserFile 
                    owner_id = {file_data.owner_id} 
                    owner_name = {file_data.owner_name} 
                    original_filename = {file_data.original_filename} 
                    filename = {file_data.filename}/>)}
            </div>
        </div>
    );
}