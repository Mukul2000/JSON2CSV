import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export function upload(formData) {
    API.post('/files', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: JSON.parse(localStorage.getItem('user')).token
        }
    }).then((res) => download('/files/' + res.data, 'converted.csv'))
        .catch(e => console.log(e));

}

// Dirty workaround to download file.
export function download(URL, filename) {
    API.get(URL, { responseType: 'blob' })
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${filename}`);
            document.body.appendChild(link);
            link.click();
        })
        .catch(e => console.log(e));
}

