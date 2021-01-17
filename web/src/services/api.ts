import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blab.thiagomedina.me',
})

export default api;