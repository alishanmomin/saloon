// import jwt_decode from "jwt-decode";
import axios from "axios";

const token = localStorage?.getItem("token");
// if (token)
// {
//     const decoded = jwt_decode(token);
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime)
//     {
//         window.localStorage.clear();
//         window.location.reload();
//     }
// }


const instance = axios.create({
    // baseURL: "http://192.168.18.79:8080/verification/",
    baseURL: "http://192.168.100.17:8080/superAdmin",
    headers: {
        // "Content-Type": "application/json",
        // "access-control-allow-origin": "*",
        Authorization: `Bearer ${ token }`,
    },
});

export default instance;