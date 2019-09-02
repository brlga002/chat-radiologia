const express = require('express');
const app = express();
const server = require('http').Server(app);

require('./src/io')(server);

const handlebars = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', {
      port: port
  });
});



server.listen(port);
console.log('Server online na porta: ' + port);
