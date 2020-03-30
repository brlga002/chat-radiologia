const delay = require('delay');
const menu = require('./menus');
const taxas = require('./taxas')

let io, socket;

async function sendChoice(arrayData,delayTime=5) {   
    io.to(`${socket.id}`).emit('render_choice', {data: {"choices": arrayData}});
    await delay(delayTime);       
}

async function envio (message,delayTime=1) {        
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
    this.menuInicial();
 }

 module.exports.inscricao = async () => {
    await envio(`Inscrição, Boa escolha`);
    await envio(`O processo de inscrição ocorre em 3 Etapas:`);
    await envio(`Etapa 1: O requerente reuni a documentação necessária e protocola a mesma no consellho juntamente com a taxa de inscrição`);
    await envio(`A documentação em questão são copias autenticadas, porem caso você apresente copia simples juntamente com os originais, o CRTR autentica sem custos`);
    await envio(`Etapa 2: A documentação apresentada é analisada em Reunião de Diretoria. Apos a analize você é informado do Resultado, mediante a aprovação é gerado <b>Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação</b>`);
    await envio(`Etapa 3: Após o pagamento da Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação é feita a habilitação profissional, e uma data é definida para ela ser entregue`);  
    await sendChoice(menu.taxaInscricaoProfisional());
}

module.exports.baixa = async () => {
    await envio(`Vou te explicar sobre a baixa.`);       
    await envio('O requerente entrega a Solicitação de Cancelamento de Inscrição Profissional preenchida juntamente com a Cédula de Identidade Profissional.');
    await envio('Se o requerimento for protocolizado até a data do vencimento da anuidade do ano em curso, a mesma não será devida. Após essa data, será cobrada a a proporcionalidade da anuidade.');
    await envio('Essa é a ficha para solicitação de baixa: <a href="https://www.crtr19.gov.br/wp-content/uploads/2019/07/FICHA-03-VERS%C3%83O-01-SOLICITA%C3%87%C3%83O-DE-CANCELAMENTO-DE-REGISTRO-PROFISSIONAL.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Cancelamento de Inscrição Profissional</a>');
    await sendChoice(menu.fimChat());
 }

 module.exports.reativacao = async () => {
    await envio(`Para reativar e simples.`);       
    await envio('Basta preencher esta ficha: <a href="https://www.crtr19.gov.br/wp-content/uploads/2019/01/02-REATIVAÇÃO.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Reativação de Inscrição</a> juntamente com um comprovante de endereço.');
    await envio('Pagar a taxa de reativação e anuidade Proporcional.');
    await envio('Caso necessário podemos solicitar também Taxa para emissão de uma nova habilitação profissional e duas fotos.');
    await sendChoice(menu.fimChat());
 }

 module.exports.relacaoDocumentos = async () => {
    await envio(`Segue a lista:`);       
    await envio('(01) RG – Cédula de Identidade (CNH não serve como substituta para tal documento).');
    await envio('(02) CPF – Cadastro de Pessoa Física.');
    await envio('(03) Título de Eleitor.');
    await envio('(04) Certificado de Reservista (somente para homens).');
    await envio('(05) Certidão de nascimento ou casamento.');
    await envio('(06) 3 (Três) Fotos Coloridas 3×4 (recentes e idênticas).');
    await envio('(07) Comprovante de Residência (telefone, loja, banco) com CEP no nome do inscrito ou de seus pais ou cônjuge, caso contrário o mesmo deverá fazer Declaração de Residência no Modelo CRTR para justificar o nome apresentado no comprovante.');
    await envio('(08) Certificado de conclusão do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)');
    await envio('(09) Histórico do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)');
    await envio('(10) Diploma do Respectivo Curso em Radiologia (autorizado pelo CEE)');
    await envio('(11)  Histórico do Respectivo Curso de Radiologia (autorizado pelo CEE).');
    await envio('(12) Declaração de Conclusão de  Estágio  (Carga Horária mínima: 400h desde 11/11/2011. Emitido pela Instituição de Ensino estando assinada pelo Preceptor e o Diretor da Instituição.)');
    await envio('Para formados a partir de 23/10/2014, também faz-se necessário item 13 e 14.');
    await envio('(13) Relatório assinado pelo preceptor (Relatório Instrumental).');
    await envio('(14) Termo de Convênio entre as instituições, cedente e concedente, nos termos da Lei n.° 11.788/2008.');    
    await envio('Essa é a ficha de inscrição nela tem a relação de documentos que te falei <a href="https://www.crtr19.gov.br/wp-content/uploads/2020/01/Ficha-de-Inscrição-P.-F.pdf" target="_blank" rel="noopener noreferrer">Ficha de Inscrição</a> esse e o modelo de <a href="https://www.crtr19.gov.br/wp-content/uploads/2017/12/MODELO-DE-DECLARAÇÃO-DE-RESIDENCIA..pdf" target="_blank" rel="noopener noreferrer">Declaração de Residência</a>');    
    await sendChoice(menu.taxaInscricaoProfisional());
 }

 module.exports.localizacao = async () => {
    await envio(`Vou te explicar:`);       
    await envio('Nossa sede é na cidade de Manaus no Amazonas.');
    await envio('O endereço: Rua Michel Fokine, n.° 11, Quadra Q, Conjunto Shangrilar IV.');
    await envio('CEP: 69.054-739  Bairro: Parque 10 de Novembro.');
    await envio('Segue um mapa para te ajudar, <b>clique para abrir no Google Maps</b>:',100);
    await envio('<a href="https://goo.gl/maps/ALjUPKB4zfPLGneP9" target="_blank" rel="noopener noreferrer"><img src="img/mapa.png" class="img-thumbnail" alt="Conselho"></a>');
    await envio('O ponto de referência: Na rua do <b>Supermercado Veneza</b> tem a <b>Casa da Carne Otávio</b>, que fica bem no início da nossa rua, desça até o fim dela, não tem erro.');
    await envio('Vou te mostrar uma foto:',100);
    await envio('<img src="img/casadacarne.png" class="img-thumbnail" alt="Casa de carne Otavio">');    
    await sendChoice(menu.fimChat());
 }

module.exports.taxas_inscricao_tecnologo = async () => {
    taxas.inscricaoProfisional('tecnologo',io,socket)
}

module.exports.taxas_inscricao_tecnico = async () => {
    taxas.inscricaoProfisional('tecnico',io,socket) 
}

module.exports.menuInicial = async () => {
    await envio(`Posso te ajudar com:`); 
    await sendChoice(menu.inicial());
}

module.exports.fimChat = async () => {
    await envio(`Foi um prazer ajudar.`); 
    await envio(`Caso precise estou a disposição.`);
}


