import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-8dfc1/us-central1/api' // THE API (cloud function) URL
});

export default instance;
// updatd paymnt processing and added stripe & axios