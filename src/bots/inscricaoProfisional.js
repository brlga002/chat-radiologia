const menu = require('./menu/menus');

const inscricaoProfisional = [
  { type: 'message', text: 'Inscrição, Boa escolha' },
  { type: 'message', text: 'O processo de inscrição ocorre em 3 Etapas:' },
  {
    type: 'message',
    text:
      'Etapa 1: O requerente reuni a documentação necessária e protocola a mesma no conselho juntamente com a taxa de inscrição',
  },
  {
    type: 'message',
    text:
      'A documentação em questão são copias autenticadas, porem caso você apresente copia simples juntamente com os originais, o CRTR autentica sem custos',
  },
  {
    type: 'message',
    text:
      'Etapa 2: A documentação apresentada é analisada em Reunião de Diretoria. Apos a analise você é informado do Resultado, mediante a aprovação é gerado <b>Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação</b>',
  },
  {
    type: 'message',
    text:
      'Etapa 3: Após o pagamento da Anuidade Proporcional de 2020 e Taxa de Emissão de habilitação é feita a habilitação profissional, e uma data é definida para ela ser entregue',
  },
  { type: 'message', text: 'Posso te ajudar com:' },
  { type: 'bot', bots: menu.taxaInscricaoProfisional() },
];

module.exports = inscricaoProfisional;
