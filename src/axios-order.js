import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-db-4c80e-default-rtdb.firebaseio.com/',
});

export default instance;
