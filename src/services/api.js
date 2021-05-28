import axios from 'axios';

const api = axios.create({
  baseURL: 'http://c25be4aafd6c.ngrok.io',
});

export default api;
