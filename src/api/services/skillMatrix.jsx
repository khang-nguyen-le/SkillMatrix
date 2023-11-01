import axios from 'axios';

const skillMatrixApi = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default skillMatrixApi;
