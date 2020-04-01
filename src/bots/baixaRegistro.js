const menu = require('./menu/menus');

const baixaRegistro = [
  { type: 'message', text: `Vou te explicar sobre a baixa` },
  {
    type: 'message',
    text: `O requerente entrega a Solicitação de Cancelamento de Inscrição Profissional preenchida juntamente com a Cédula de Identidade Profissional.`,
  },
  {
    type: 'message',
    text: `Se o requerimento for protocolizado até a data do vencimento da anuidade do ano em curso, a mesma não será devida. Após essa data, será cobrada a a proporcionalidade da anuidade.`,
  },
  {
    type: 'message',
    text: `Essa é a ficha para solicitação de baixa: <a href="https://www.crtr19.gov.br/wp-content/uploads/2019/07/FICHA-03-VERS%C3%83O-01-SOLICITA%C3%87%C3%83O-DE-CANCELAMENTO-DE-REGISTRO-PROFISSIONAL.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Cancelamento de Inscrição Profissional</a>`,
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = baixaRegistro;
