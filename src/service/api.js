const axios = require('axios');
const api = axios.create({
    baseURL: 'http://127.0.0.1:4000'});
module.exports = api;