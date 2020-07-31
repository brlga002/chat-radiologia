const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');
const request = require('supertest');

const app = express();
const server = require('http').Server(app);

const serveJson = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

serveJson.use(middlewares);
serveJson.use(router);

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.get('/port', async (req, res) => {
  //res.send({ port });
  //const response = await request(app).get('/bots/1?_expand=menu');
  const response = await request(app).get(
    '/bots/?_expand=menu&botName=baixaRegistro'
  );
  const messages = JSON.parse(response.text);
  res.send(messages[0]);
});

app.use(serveJson);

require('./services/socket_rules')(server);

server.listen(port);

console.log(`Server Socket io in port: ${port}`);
