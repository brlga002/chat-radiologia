const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);

require('./socketio')(server);

const path = require('path');
const port = process.env.PORT || 5000;

app.use(cors('*'));
app.use(express.json());

app.get('/', async(req, res) => {
    res.send({port})
});

server.listen(port);
console.log('Server Socket io in port: ' + port);