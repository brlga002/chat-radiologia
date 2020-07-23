const delay = require('delay')
const messageAutomatica = async (io,socket) => {
    async function envio (message,delayTime=0) {        
        io.to(`${socket.id}`).emit('new_message', { 
            message: message
        });
        await delay(delayTime);        
    }

    await envio(`Ola, ${socket.username}`);       
    await envio('Seja bem vindo ao atendimento do CRTR 5ª Região');
    await envio(`
        <button onclick="sendChoice('parcelamento')">parcelamento</button>
        <button onclick="sendChoice('inscricao')">inscricao</button>
    `);
}

module.exports = messageAutomatica;