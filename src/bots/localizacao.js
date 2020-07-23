const menu = require('./menu/menus');

const localizacao = [
  { type: 'message', text: 'Vou te explicar:' },
  { type: 'message', text: 'Nossa sede é na cidade de São Paulo/SP.' },
  {
    type: 'message',
    text:
      'O endereço: Rua Herculano, nº 169 - São Paulo/SP.',
  },
  { type: 'message', text: 'CEP: 01.257-030 - Bairro: Sumarézinho.' },
  {
    type: 'message',
    text:
      'O ponto de referência: Na rua do <b>Próximo ao metrô Vila Madalena</b> tem a <b>Caixa Econômica Federal</b>',
  },
  { type: 'message', text: 'Vou te mostrar uma foto:' },
  {
    type: 'message',
    text:
      '<img src="img/casadacarne.png" class="img-thumbnail" alt="Casa de carne Otavio">',
  },
  {
    type: 'message',
    text:
      '<a href="https://g.page/crtrsp?share" target="_blank" rel="noopener noreferrer"><img src="img/mapa.png" class="img-thumbnail" alt="Conselho"></a>',
  },
  {
    type: 'message',
    text:
      'Segue um mapa para te ajudar, <b>clique na imagem acima para abrir no Google Maps</b>:',
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = localizacao;
