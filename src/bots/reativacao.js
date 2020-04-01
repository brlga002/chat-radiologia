const menu = require('./menu/menus');

const reativacao = [
  { type: 'message', text: `Para reativar e simples.` },
  {
    type: 'message',
    text: `Basta preencher esta ficha: <a href="https://www.crtr19.gov.br/wp-content/uploads/2019/01/02-REATIVAÇÃO.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Reativação de Inscrição</a> juntamente com um comprovante de endereço.`,
  },
  {
    type: 'message',
    text: `Pagar a taxa de reativação e anuidade Proporcional.`,
  },
  {
    type: 'message',
    text: `Caso necessário podemos solicitar também Taxa para emissão de uma nova habilitação profissional e duas fotos.`,
  },
  { type: 'bot', bots: menu.inicial() },
];

module.exports = reativacao;
