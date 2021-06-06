import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FileDetail() {
    const {email, filename} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/search/' + email)
        .then(res => setUser(res.data))
        .catch(e => console.log(e));
    }, []);
    
    return (
        <div>
        </div>
    );
}