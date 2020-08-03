require('dotenv').config({ path: (process.env.NODE_ENV = '.env') });

const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);

const jsonServer = require('json-server');

const router = jsonServer.router(`./src/database/${process.env.NAME_DATABASE}`);
const middlewares = jsonServer.defaults({
  readOnly: process.env.READ_ONLY_DATABASE,
});
const port = process.env.PORT || 5000;
const cors = require('cors');

require('./services/socket_rules')(server);

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.get('/port', async (req, res) => {
  res.send({ port });
});

const serveJson = jsonServer.create();
serveJson.use(middlewares);
serveJson.use(router);

app.use(serveJson);

server.listen(port);

console.log(`Server Socket io in port: ${port}`);
