const request = require('supertest');

const rulesSocket = (server) => {
  // eslint-disable-next-line global-require
  const io = require('socket.io')(server);

  io.on('connection', async (socket) => {
    console.log(`on[connection] - ${socket.id}`);

    const enviarMensagem = (conteudoBot) => {
      io.to(`${socket.id}`).emit('new_message', { message: conteudoBot });
    };

    socket.on('welcome', async () => {
      const response = await request(server).get('/bots/1?_expand=menu');
      const messages = JSON.parse(response.text);
      enviarMensagem(messages);
    });

    socket.on('new_message', async (data) => {
      console.log(`[server-receive] -> new_message`);
    });

    socket.on('usuario_solicita_bot', async (data) => {
      const response = await request(server).get(
        `/bots/?_expand=menu&botName=${data.choice}`
      );
      const messages = JSON.parse(response.text);
      enviarMensagem(messages[0]);
    });

    socket.on('disconnect', () => {
      //console.log("user-disconnect")
    });
  });
};

module.exports = rulesSocket;
