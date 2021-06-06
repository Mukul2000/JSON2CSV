import React, { useEffect } from "react";
import axios from "axios";

export default function FileDetail({ owner_id, filename }) {
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchFile = async () => {
            const response = await axios.get('http://localhost:8000/file/' + filename);
            setContent(response.data);
        }

        fetchFile();
    });

    return (
        <div>
            {content}
            <h3> Download as : </h3>
            <Button variant = 'primary' > JSON </Button>
            <Button variant = 'primary' > CSV </Button>
        </div>
    );
}