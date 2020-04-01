const menu = require('./menu/menus');

const monName = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'Maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];
const now = new Date();

const calculaProporcional = (nMesesRestantes, valorAnuidade) =>
  nMesesRestantes * (valorAnuidade / 12);

const formaraMoeda = (valor) =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    valor
  );

const anuidadeTecnico = 342.15;
const anuidadeTecnologo = 427.38;
const taxaInscricao = 94.55;
const emissaoCarteira = 37.21;
const mesesRestantes = 12 - now.getMonth();

module.exports = function taxasInscricaoProfisional(tipo = 'tecnico') {
  const valorAnuidade =
    tipo === 'tecnico' ? anuidadeTecnico : anuidadeTecnologo;
  const tipoProfissional = tipo === 'tecnico' ? 'Técnico' : 'Técnólogo';
  const anuidadeProporcional = calculaProporcional(
    mesesRestantes,
    valorAnuidade
  );
  const soma = anuidadeProporcional + taxaInscricao + emissaoCarteira;

  return [
    {
      type: 'message',
      text: `As taxas de ${tipoProfissional} para Para o mês <b>${
        monName[now.getMonth()]
      }</b> de 2020 são:`,
    },
    {
      type: 'message',
      text: `Taxa de Inscrição ${formaraMoeda(taxaInscricao)}`,
    },
    {
      type: 'message',
      text: `Emissão de Carteira ${formaraMoeda(emissaoCarteira)}`,
    },
    {
      type: 'message',
      text: `Anuidade Proporcional: ${formaraMoeda(anuidadeProporcional)}`,
    },
    { type: 'message', text: `Somando Tudo: ${formaraMoeda(soma)}` },
    { type: 'bot', bots: menu.fimChat() },
  ];
};
