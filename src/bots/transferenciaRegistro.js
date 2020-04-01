const menu = require('./menu/menus');

const transferenciaRegistro = [
  {
    type: 'message',
    text: `Bem, nós somos o CRTR 19ª Região Amazonas e Roraima, os profissionais inscritos conosco podem trabalhar na nossa jurisdição.`,
  },
  {
    type: 'message',
    text: `Caso um profissional queira trabalhar em outros Etados ele pode:`,
  },
  {
    type: 'message',
    text: `Caso "As atividades que se desenvolvam até 90 (noventa) dias por ano, em cada região serão consideras de natureza eventual, e por conseguinte, não sujeitarão o profissional à inscrição secundária. O profissional enquadrado na situação prevista no parágrafo anterior, deverá comunicar ao CRTR da jurisdição, se a permanência for mais de 30 (trinta) dias, devendo o conselho Regional, emitir uma Certidão de Autorização, com o prazo de validade enquanto durar o trabalho.},
        <a href="http://conter.gov.br/uploads/legislativo/n_122006.pdf" target="_blank" rel="noopener noreferrer">Resolução Conter N.° 12 de 15 de semtembro de 2006</a>"`,
  },

  {
    type: 'message',
    text: `Solicitar Transferência de Regional ou Fazer uma Inscrição Secundária`,
  },
  {
    type: 'message',
    text: `Essa e nossa ficha de <a href="https://www.crtr19.gov.br/wp-content/uploads/2020/01/FICHA-02-VERS%C3%83O-01-SOLICITA%C3%87%C3%83O-DE-TRANSFER%C3%8ANCIA.pdf" target="_blank" rel="noopener noreferrer">Solicitação de Transferência de Inscrição Profissional</a>`,
  },
  { type: 'message', text: `A Documentação Necessária:` },
  { type: 'message', text: `Devolução da Cédula de Identidade Profissional.` },
  {
    type: 'message',
    text: `Cópia do comprovante de residência da jurisdição de destino.`,
  },
  {
    type: 'message',
    text: `Cópia do Comprovante de pagamento da taxa de transferência.`,
  },
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = transferenciaRegistro;
