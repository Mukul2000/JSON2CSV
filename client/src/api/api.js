import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export async function upload(formData) {
    const response = await API.post('/files', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: JSON.parse(localStorage.getItem('user')).token
        }
    });


    // Dirty workaround to download file.
    download('/files/' + response.data);
}

export async function download(URL) {
    const res = await API.get(URL, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', "converted.csv");
    document.body.appendChild(link);
    link.click();
}

