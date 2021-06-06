import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function UserDetail() {
    const [user, setUser] = useState({});
    const { email } = useParams();
    console.log(email);

    useEffect(() => {
        console.log("runs?");
        axios.get('http://localhost:8000/user/search/' + email)
        .then(res => {
            setUser(res.data);
        })
        .catch(e => console.log(e));
    }, []);

    console.log(user);
    
    return (
        <div>
            <h1 id = 'hhege'> {user.name} {user.email} </h1>
            {user.files.map((file) => {
                return <div> {file.original_filename} </div> 
            })} 
        </div>
    );
}