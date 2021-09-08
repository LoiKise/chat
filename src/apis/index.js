import axios from 'axios'


// Syntax
//requestAPI('/login', 'POST', {user}, { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` })
export default async function requestAPI(url, method, body, injectHeader) {
    let urlOrigin = 'https://localhost:3000/api'
    const headers = {
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        ...injectHeader,
    };

    let objMeta = {
        method,
        url: `${urlOrigin}${url}`,
        headers,
        data: body
    };
    return await axios(objMeta);
}