const express = require('express');
const app = express();
const server = require('http').Server(app);
const api = require('./src/service/api');

require('./src/sokect/public')(server);

const handlebars = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', async(req, res) => {

 




    res.render('home', {
        port: port
    });
});






server.listen(port);
console.log('Server Socket io na porta: ' + port);
