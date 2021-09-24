import axios from "axios";

// Syntax
// requestAPI('/search', 'POST', {code}, { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` })
export default async function requestAPI(url, method, body, injectHeader) {
  let urlOrigin = "http://localhost:3001";
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
