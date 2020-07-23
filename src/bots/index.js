const menu = require('./menu/menus');
const baixaRegistro = require('./baixaRegistro');
const inscricaoProfisional = require('./inscricaoProfisional');
const reativacao = require('./reativacao');
const transferenciaRegistro = require('./transferenciaRegistro');
const localizacao = require('./localizacao');
const relacaoDocumentos = require('./relacaoDocumentos');
const taxasInscricaoProfisional = require('./taxasInscricaoProfisional');

module.exports.baixaRegistro = () => {
  return baixaRegistro;
};

module.exports.inscricaoProfisional = () => {
  return inscricaoProfisional;
};

module.exports.reativacao = () => {
  return reativacao;
};

module.exports.transferenciaRegistro = () => {
  return transferenciaRegistro;
};

module.exports.localizacao = () => {
  return localizacao;
};

module.exports.relacaoDocumentos = () => {
  return relacaoDocumentos;
};

module.exports.taxasInscricaoProfisionalTecnico = () => {
  return taxasInscricaoProfisional('tecnico');
};

module.exports.taxasInscricaoProfisionalTecnologo = () => {
  return taxasInscricaoProfisional('Técnólogo');
};

module.exports.bemVindo = () => {
  return [
    { type: 'message', text: `Seja bem vindo(a)` },
    { type: 'message', text: `Eu sou o bot do Conselho <b>BOT-CRTR19</b>` },
    { type: 'message', text: `Posso te ajudar com:` },
    { type: 'bot', bots: menu.inicial() },
  ];
};

module.exports.menuInicial = () => {
  return [
    { type: 'message', text: `Posso te ajudar com:` },
    { type: 'bot', bots: menu.inicial() },
  ];
};

module.exports.fimChat = () => {
  return [
    {
      type: 'message',
      text: `Foi muito bom poder ajudar, estou aqui caso necessite de mim.`,
    },
  ];
};
