const delay = require('delay')
const messageAutomatica = async (io,socket) => {
    async function envio (message,delayTime=2000) {        
        io.to(`${socket.id}`).emit('new_message', { 
            message: message
        });
        await delay(delayTime);        
    }
 
    await envio(`${socket.username}, o processo de inscrição tem três etapas:`);
    await envio(`Etapa 1: Entregar Documentação Necessária`);
    await envio(`Etapa 2: Pagar 3 (três) taxas: Taxa de Inscição, Emissão de Carteira e Anuidade Proporcional do mês que estiver dando entrada`);
    await envio(`Etapa 3: Depois de aprovado em Reunião de Diretoria será expedida uma habilitação profissional`);
    await envio(`Mas atenção a partir do momento que der entrada no Conselho Todo ano terá que pagar anuidade`);
    await envio(`<a href="https://www.crtr19.gov.br/inscricao-de-registro-p-f">Saiba mais Aqui</a>`);         
}

module.exports = messageAutomatica;