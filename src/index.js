const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '..', 'client')));

app.get('/port', async (req, res) => {
  res.send({ port });
});

require('./services/socket_rules')(server);

server.listen(port);

console.log('Server Socket io in port: ' + port);
