const delay = require('delay')
const messageAutomatica = async (io,socket) => {
    async function envio (message,delayTime=2000) {        
        io.to(`${socket.id}`).emit('new_message', { 
            message: message
        });
        await delay(delayTime);        
    }

    await envio(`Anuidade 2020 pode ser parcelada em até 5 vezes`);       
    await envio(`Escolha o numero de parcelas`);
    await envio(`
        <button onclick="sendChoice('umaParcela')">UmaParcela</button>
        <button onclick="sendChoice('duasParcela')">duasParcela</button>
        <button onclick="sendChoice('tresParcela')">tresParcela</button>
    `);
}

module.exports = messageAutomatica;
