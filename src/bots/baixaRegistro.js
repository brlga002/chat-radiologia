const menu = require('./menu/menus');

const baixaRegistro = [
  { type: 'message', text: `Vou te explicar sobre a baixa` },
  {
    type: 'message',
    text: `O requerente entrega a Solicitação de Baixa de Inscrição Profissional preenchida e entregue juntamente com a Cédula de Identidade Profissional.`,
  },
  {
    type: 'message',
    text: `Se o requerimento for protocolizado até a data do vencimento da anuidade do ano em curso, a mesma não será devida. Após essa data, será cobrada a proporcionalidade da anuidade.`,
  },
  {
    type: 'message',
    text: `Essa é a ficha para solicitação de baixa: <a href="http://www.crtrsp.org.br/documents/Pessoa_fisica/04_requerimento_pessoa_fisica.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Baixa de Inscrição Profissional</a>`,
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = baixaRegistro;
