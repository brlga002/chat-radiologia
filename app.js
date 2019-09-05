const express = require('express');
const app = express();
const server = require('http').Server(app);


require('./src/socketioRules')(server);

const handlebars = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', async(req, res) => {
    res.render('home', {
        port: port
    });
});






server.listen(port);
console.log('Server Socket io in port: ' + port);
