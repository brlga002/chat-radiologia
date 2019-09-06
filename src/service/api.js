const axios = require('axios');
const api = axios.create({
    baseURL: 'http://127.0.0.11:4000'})
module.exports = api;