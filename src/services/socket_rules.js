const request = require('supertest');

const bot = require('../bots');

const rulesSocket = (server) => {
  // eslint-disable-next-line global-require
  const io = require('socket.io')(server);

  io.on('connection', async (socket) => {
    console.log(`on[connection] - ${socket.id}`);

    const enviarMensagem = (conteudoBot) => {
      io.to(`${socket.id}`).emit('new_message', { message: conteudoBot });
    };

    // socket.on('welcome', async () => {
    //   const conteudoBot = await bot.bemVindo();
    //   console.log(conteudoBot);
    //   enviarMensagem(conteudoBot);
    // });

    socket.on('welcome', async () => {
      const response = await request(server).get('/bots/1?_expand=menu');
      const messages = JSON.parse(response.text);
      enviarMensagem(messages);
    });

    socket.on('new_message', async (data) => {
      console.log(`[server-receive] -> new_message`);
    });

    // socket.on('usuario_solicita_bot', async (data) => {
    //   try {
    //     const conteudoBot = await bot[data.choice]();
    //     enviarMensagem(conteudoBot);
    //   } catch (error) {
    //     console.log(`Não encontrado bot nome = ${data.choice}`);
    //   }
    // });

    socket.on('usuario_solicita_bot', async (data) => {
      const response = await request(server).get(
        '/posts/?_expand=menu&botName=baixaRegistro'
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
