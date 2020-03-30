const bot = require('./bots/');

module.exports = server => {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log(`on[connection] - ${socket.id}`);
    
    socket.username = 'Anonymous';
    socket.email = 'nao informado';
    
    socket.on('welcome', async (data) => {
      try {
        console.log(`on[welcome] - ${socket.id}`)  
        socket.username = data.username
        socket.email = data.email       
        bot.messageAutomatica(io,socket);
      } catch (err) {
        console.log(err);
        enviarMensagem(`houve um erro: ${err}`);        
      }        
    })
      
    socket.on('new_message', async (data) => {          
      try {
        console.log(`on[new_message] - ${JSON.stringify(data)}`)             
      } catch (err) {
        console.log(`on[new_message] - Erro: ${err}`)        
      }      
    });
      
    
    socket.on('new_choice', async (data) => {          
      try {
        console.log(`on[new_choice] - ${JSON.stringify(data)}`);
        
        if ( typeof bot[data.choice] === 'function' ){
          bot[data.choice](io,socket);
        }  
              
      } catch (err) {
        console.log(`on[new_choice] - Erro: ${err}`)        
      }      
    });
    
    socket.on('disconnect', () => {    
      console.log("disconnect")
    });
    
    const  enviarMensagem = (message) => {
      io.to(`${socket.id}`).emit('new_message', { message });      
    }
  });    
}

