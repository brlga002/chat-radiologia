const menu = require('./menu/menus');

const localizacao = [
  { type: 'message', text: 'Vou te explicar:' },
  { type: 'message', text: 'Nossa sede é na cidade de Manaus no Amazonas.' },
  {
    type: 'message',
    text:
      'O endereço: Rua Michel Fokine, n.° 11, Quadra Q, Conjunto Shangrilar IV.',
  },
  { type: 'message', text: 'CEP: 69.054-739  Bairro: Parque 10 de Novembro.' },
  {
    type: 'message',
    text:
      'O ponto de referência: Na rua do <b>Supermercado Veneza</b> tem a <b>Casa da Carne Otávio</b>, que fica bem no início da nossa rua, desça até o fim dela, não tem erro.',
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
      '<a href="https://goo.gl/maps/ALjUPKB4zfPLGneP9" target="_blank" rel="noopener noreferrer"><img src="img/mapa.png" class="img-thumbnail" alt="Conselho"></a>',
  },
  {
    type: 'message',
    text:
      'Segue um mapa para te ajudar, <b>clique na imagem acima para abrir no Google Maps</b>:',
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = localizacao;
