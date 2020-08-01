require('dotenv').config({ path: (process.env.NODE_ENV = '.env') });

const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

const serveJson = jsonServer.create();
const router = jsonServer.router(`./src/database/${process.env.NAME_DATABASE}`);
const middlewares = jsonServer.defaults({
  readOnly: process.env.READ_ONLY_DATABASE,
});
const port = process.env.PORT || 5000;

serveJson.use(middlewares);
serveJson.use(router);

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.get('/port', async (req, res) => {
  res.send({ port });
});

app.use(serveJson);

require('./services/socket_rules')(server);

server.listen(port);

console.log(process.env.APP_NAME);
console.log(`Server Socket io in port: ${port}`);
