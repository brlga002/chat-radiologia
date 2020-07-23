const menu = require('./menu/menus');

const relacaoDocumentos = [
  { type: 'message', text: `Segue a lista:` },
  {
    type: 'message', text: `(01) RG – Cédula de Identidade (CNH não serve como substituta para tal documento).`,
  },
  { type: 'message', text: `(02) CPF – Cadastro de Pessoa Física.`
  },
  { type: 'message', text: `(03) Título de Eleitor.` },
  {
    type: 'message', text: `(04) Certificado de Reservista (somente para homens).`,
  },
  { type: 'message', text: `(05) Certidão de nascimento ou casamento.` },
  {
    type: 'message', text: `(06) 3 (Três) Fotos Coloridas 3×4 (recentes e idênticas).`,
  },
  {
    type: 'message', text: `(07) Comprovante de Residência (telefone, loja, banco) com CEP no nome do inscrito ou de seus pais ou cônjuge, caso contrário o mesmo deverá fazer Declaração de Residência no Modelo CRTR para justificar o nome apresentado no comprovante.`,
  },
  {
    type: 'message', text: `(08) Certificado de conclusão do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)`,
  },
  {
    type: 'message', text: `(09) Histórico do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)`,
  },
  {
    type: 'message', text: `(10) Diploma do Respectivo Curso em Radiologia (autorizado pelo CEE)`,
  },
  {
    type: 'message', text: `(11)  Histórico do Respectivo Curso de Radiologia (autorizado pelo CEE).`,
  },
  {
    type: 'message', text: `(12) Declaração de Conclusão de  Estágio  (Carga Horária mínima: 400h desde 11/11/2011. Emitido pela Instituição de Ensino estando assinada pelo Preceptor e o Diretor da Instituição.)`,
  },
  {
    type: 'message', text: `Para formados a partir de 23/10/2014, também faz-se necessário item 13 e 14.`,
  },
  {
    type: 'message', text: `(13) Relatório assinado pelo preceptor (Relatório Instrumental).`,
  },
  {
    type: 'message', text: `(14) Termo de Convênio entre as instituições, cedente e concedente, nos termos da Lei n.° 11.788/2008.`,
  },
  {
    type: 'message', text: `Essa é a ficha de inscrição nela tem a relação de documentos que te falei <a href="https://www.crtr19.gov.br/wp-content/uploads/2020/01/Ficha-de-Inscrição-P.-F.pdf" target="_blank" rel="noopener noreferrer">Ficha de Inscrição</a> esse e o modelo de <a href="https://www.crtr19.gov.br/wp-content/uploads/2017/12/MODELO-DE-DECLARAÇÃO-DE-RESIDENCIA..pdf" target="_blank" rel="noopener noreferrer">Declaração de Residência</a>`,
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = relacaoDocumentos;
