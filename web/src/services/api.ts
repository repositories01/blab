import axios from 'axios';

const api = axios.create({
    baseURL: 'http://blab.thiagomedina.me',
})

export default api;