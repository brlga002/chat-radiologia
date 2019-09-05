const delay = require('delay')
const api = require('./service/api');

module.exports = server => {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('New user connected ' + socket.id);
    
    socket.username = 'Anonymous';
    socket.email = 'nao informado';
    
    socket.on('welcome', async (data) => {
      console.log(data);
      try {          
        const response = await api.post('/conversa',{
          "socketid":socket.id, 
          "name": data.username, 
          "email": data.email
        })

        console.log('resposta#########')
        console.log(response.data)
        const { _id:conversaId } = response.data.conversas
        
        socket.conversaId = conversaId
        socket.username = data.username
        socket.email = data.email
        console.log(`o id da conversa é ${conversaId}`)
        enviarMensagem(`Ola, ${socket.username}`);
        messageAutomatica();         
      } catch (err) {
        //console.log(err);
        enviarMensagem(`houve um ao iniciar um conversa erro: ${err.response.data.error}`);        
      }        
    })
    
    socket.on('new_message', async (data) => {          
      try {
        const response = await api.post('/menssage',{
          "socketid":socket.id,
          "name": socket.username,
          "text": data.message,
          "conversa": socket.conversaId
        })
      } catch (err) {
        console.log(`erro ao gravar nova mgs: ${err.response.data.error}`)        
      }      
    });
    
    socket.on('disconnect', () => {    
      console.log("disconnect")
    });
    
    const  enviarMensagem = (message) => {
      io.to(`${socket.id}`).emit('new_message', { message });      
    }
    
    const  messageAutomatica = async () => {
      await delay(500);           
      enviarMensagem("Seja bem vindo ao atendimento do CRTR 19ª Região");
      await delay(1000);
      enviarMensagem("So um minuto, Estou procurando um atendente para você");         
    }
  });    
}

