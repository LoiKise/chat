import axios from "axios";

// Syntax
// requestAPI('/search', 'POST', {code}, { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` })
export default async function requestAPI(url, method, body, injectHeader) {
<<<<<<< HEAD
  let urlOrigin = "https://localhost:3000";
=======
  let urlOrigin = "http://localhost:3000";
>>>>>>> 9a8f64298c9dce6130cbc09225f7f62abe4d634e
  const headers = {
    "Content-Type": "application/json",
    // 'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "*",
    ...injectHeader,
  };

  let objMeta = {
    method,
    url: `${urlOrigin}${url}`,
    headers,
    data: body,
  };
  return await axios(objMeta);
}
