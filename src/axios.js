import axios from "axios";

const instance = axios.create({
    baseUrl: '...'   // The API URL ( Cloud function using Node.js )
});

export default instance;