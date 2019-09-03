const api = require('../service/api');
const delay = require('delay')
module.exports = server => {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('New user connected ' + socket.id);
    
    socket.username = 'Anonymous';
    socket.email = 'nao informado';
    
    // Dar as boas vindas e grava dados do usuario
    socket.on('welcome', async (data) => {
      try {          
        const response = await api.post('/conversa',{
          "socketid":socket.id, 
          "name": data.username, 
          "email": data.email
        })
        const {_id:conversaId} = response.data.conversas
        
        socket.conversaId = `${conversaId}`
        socket.username = data.username
        socket.email = data.email
        
        io.to(`${socket.id}`).emit('new_message', { message: `Ola, ${socket.username}`, username: "você" }); 
        messageAutomatica();         
      } catch (err) {
        io.to(`${socket.id}`).emit('new_message', { message: `houve um erro: ${err.response.data.error}`, username: "você" }); 
      }        
    })
    
    // listen on new_message
    socket.on('new_message', async (data) => {          
      try {
        const response = await api.post('/menssage',
        {
          "socketid":socket.id, 
          "name": socket.username, 
          "text": data.message,
          "conversa": socket.conversaId,
        })
      } catch (err) {
        console.log(`erro grava nova mgs: ${err.response.data.error}`)
      }
      
    });
    
    socket.on('disconnect', () => {    
      console.log("disconnect")
    });
    
    const  messageAutomatica = async () => {
      await delay(1000);     
      io.to(`${socket.id}`).emit('new_message', { message: "Seja bem vindo ao atendimento do CRTR 19ª Região", username: "Procurando..." });
      await delay(1000);
      io.to(`${socket.id}`).emit('new_message', { message: "So um minuto, Estou procurando um atendente para você", username: "Procurando..." });     
    }   
  });    
}