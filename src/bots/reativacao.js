const menu = require('./menu/menus');

const reativacao = [
  { type: 'message', text: `Para reativar e simples.` },
  {
    type: 'message',
    text: `Basta preencher esta ficha: <a href="http://www.crtrsp.org.br/documents/Pessoa_fisica/04_requerimento_pessoa_fisica.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Reativação de Inscrição</a> juntamente com um comprovante de endereço.`,
  },
  {
    type: 'message',
    text: `Pagar a taxa de reativação e anuidade Proporcional.`,
  },
  {
    type: 'message',
    text: `Caso necessário, podemos solicitar também Taxa para emissão de uma nova habilitação profissional e 01 (uma) fotos 3/4.`,
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = reativacao;
