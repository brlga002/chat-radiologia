const delay = require('delay');
const monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
const now = new Date;
const calculaProporcional = (nMesesRestantes,valorAnuidade) => nMesesRestantes * (valorAnuidade / 12);        
const formaraMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const anuidadeTecnico = 342.15;
const anuidadeTecnologo = 427.38;
const taxaInscricao = 94.55;
const emissaoCarteira = 37.21;
const mesesRestantes = 12 - now.getMonth();

let io, socket;

async function sendChoice(arrayData,delayTime=10) {   
    io.to(`${socket.id}`).emit('render_choice', {data: {"choices": arrayData}});
    await delay(delayTime);       
}

async function envio (message,delayTime=10) {        
    io.to(`${socket.id}`).emit('new_message', { 
        message: message
    });
    await delay(delayTime);   
}

module.exports.messageAutomatica = async (io_server,socket_server) => {
    io = io_server;
    socket = socket_server;
    console.log('messageAutomatica para '+ socket.id)

    await envio(`Ola, que bom que você veio!`);       
    await envio('Seja bem vindo(a), me chamo <b>Radio</b> estou sendo treinado para fazer o atendimento do CRTR 19ª Região 24h por dia, todo dia aprendo algo novo mas ainda sou muito novo e vou melhorar com o tempo &#128522;');
    this.menuinicial();
 }

 module.exports.inscricao = async () => {
    await envio(`Inscrição, Boa escolha`);
    await envio(`O processo de inscrição ocorre em x Etapas:`);
    await envio(`Etapa 1: O requerente reuni a documentação necessária e protocola a mesma no consellho juntamente com a taxa de inscrição`);
    await envio(`A documentação em questão são copias autenticadas, porem caso você apresente copia simples juntamente com os originais, o CRTR autentica sem custos`);
    await envio(`Etapa 2: A documentação apresentada é analisada em Reunião de Diretoria. Apos a analize você é informado do Resultado, mediante a aprovação é gerado <b>Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação</b>`);
    await envio(`Etapa 3: Após o pagamento da Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação é feita a habilitação profissional, e uma data é definida para ela ser entregue`);  
    await sendChoice([
        { nome:"Valores das taxas Tecnólogo", choice:"taxas_inscricao_tecnologo"},
        { nome:"Valores das taxas Técnico", choice:"taxas_inscricao_tecnico"},
        { nome:"Quero outras informações", choice:"menuinicial"}
    ]);    
}

module.exports.taxas_inscricao_tecnologo = async () => {
    taxasInscricao(anuidadeTecnico) 
}

module.exports.taxas_inscricao_tecnico = async () => {
    taxasInscricao(anuidadeTecnico) 
}

async function taxasInscricao(valorAnuidade) {        
    const anuidadeProporcional = calculaProporcional(mesesRestantes,valorAnuidade);
    const valorFormatado = formaraMoeda(anuidadeProporcional);
    const soma = formaraMoeda(anuidadeProporcional +  taxaInscricao + emissaoCarteira);
       
    await envio(`As taxas para Para o mês <b>${monName[now.getMonth()]}</b> de 2020 os valores das taxas são:`);      
    await envio(`Taxa de Inscrição R$ ${taxaInscricao}`);     
    await envio(`Emissão de Carteira R$ ${emissaoCarteira}`);     
    await envio(`Anuidade Proporcional: ${valorFormatado}`);
    await envio(`Somando Tudo: ${soma}`);  
}

module.exports.menuinicial = async () => {
    await envio(`Eu posso te ajudar com:`,10); 
    await sendChoice([
        { nome:"Inscrição de Registro", choice:"inscricao"},
        { nome:"Baixa de Registro", choice:"baixa"}
    ]); 
}