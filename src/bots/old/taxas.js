const delay = require('delay');
const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
const now = new Date;

const calculaProporcional = (nMesesRestantes,valorAnuidade) => nMesesRestantes * (valorAnuidade / 12);        
const formaraMoeda = (valor) =>  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(valor);

const anuidadeTecnico = 342.15;
const anuidadeTecnologo = 427.38;
const taxaInscricao = 94.55;
const emissaoCarteira = 37.21;
const mesesRestantes = 12 - now.getMonth();
const taxaTransferencia = 48.28;
let io,socket;

async function envio (message,delayTime=1) {        
    io.to(`${socket.id}`).emit('new_message', { 
        message: message
    });
    await delay(delayTime);  
}

module.exports.inscricaoProfisional = async (tipo='tecnico',io_serve,socket_server) => {
    io = await io_serve;
    socket = await socket_server;

    const valorAnuidade = (tipo === 'tecnico') ? anuidadeTecnico : anuidadeTecnologo;
    const tipoProfissional = (tipo === 'tecnico') ? 'Técnico' : 'Técnólogo';
    
    const anuidadeProporcional = calculaProporcional(mesesRestantes,valorAnuidade);
    const soma = (anuidadeProporcional +  taxaInscricao + emissaoCarteira);
       
    await envio(`As taxas de ${tipoProfissional} para Para o mês <b>${monName[now.getMonth()]}</b> de 2020 são:`);      
    await envio(`Taxa de Inscrição ${formaraMoeda(taxaInscricao)}`);     
    await envio(`Emissão de Carteira ${formaraMoeda(emissaoCarteira)}`);     
    await envio(`Anuidade Proporcional: ${formaraMoeda(anuidadeProporcional)}`);
    await envio(`Somando Tudo: ${formaraMoeda(soma)}`);     
};

module.exports.taxaTransferencia = async (io_serve,socket_server) => {
    io = await io_serve;
    socket = await socket_server;
    await envio(`Taxa de transferência de ${formaraMoeda(taxaTransferencia)} <b>Ela é devida ao regional de Origem</b>.`);     
};