const express = require('express');
const app = express();
const delay = require('delay')
var server = require('http').Server(app);
var io = require('socket.io')(server);

const handlebars = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', {
      port: port
  });
});

io.on('connection', (socket) => {
  console.log('New user connected ' + socket.id);
  socket.on('welcome', () => {    
    (async () => {
      await delay(500);
      io.to(`${socket.id}`).emit('new_message', { message: "Olá", username: "Procurando..." }); 
      await delay(500);     
      io.to(`${socket.id}`).emit('new_message', { message: "Seja bem vindo ao atendimento do CRTR 19ª Região", username: "Procurando..." });
      await delay(500);
      io.to(`${socket.id}`).emit('new_message', { message: "Você pode me informar seu nome ou CPF?", username: "Procurando..." });     
      await delay(500);
      io.to(`${socket.id}`).emit('new_message', { message: '<a href="https://www.crtr19.gov.br/inscricao-de-registro-p-f/" target="_blank" rel="noopener noreferrer">Inscrição de Registro</a>', username: "Procurando..." });     
    })();
  })
  
  // default username
  socket.username = 'Anonymous';
  
  // listen on change_username
  socket.on('change_username', (data) => {
    if ( data.username != ""){
      socket.username = data.username;
    }  
  });
  
  // listen on new_message
  socket.on('new_message', (data) => {
    // broadcast the new message    
    io.sockets.emit('new_message', { message: data.message, username: socket.username });
  });
  
  socket.on('disconnect', () => {    
    console.log("disconnect")
  })
  
});

server.listen(port);
console.log('Server online na porta: ' + port);
