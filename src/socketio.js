const bot = require('./bots');
const users = [];
module.exports = server => {
  const io = require('socket.io')(server);

  const connectedUsers = {};


  io.on('connection', async (socket) => {
    console.log(`on[connection] - ${socket.id}`);
    await bot.setIds(io,socket);
    
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;

    
        
    
    socket.on('welcome', async (data) => {
      try {
        console.log(`on[welcome] - ${socket.id}`)
        await bot.messageAutomatica();         
      } catch (err) {
        //console.log(err);
        enviarMensagem(`houve um erro: ${err}`);        
      }        
    })
      
    socket.on('new_message', async (data) => {          
      try {
        io.to(`${connectedUsers['gabriel']}`).emit('new_message', { data });            
      } catch (err) {
        //console.log(`on[new_message] - Erro: ${err}`)        
      }      
    });      
    
    socket.on('new_choice', async (data) => {          
      try {
        //console.log(`on[new_choice] - ${JSON.stringify(data)}`);
        
        if ( typeof bot[data.choice] === 'function' ){
          console.log(`on[bot] - ${socket.id}`);          
          await bot.setIds(io,socket);
          await bot[data.choice]();
        }  
              
      } catch (err) {
        //console.log(`on[new_choice] - Erro: ${err}`)        
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

