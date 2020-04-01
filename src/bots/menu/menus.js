module.exports.inicial = () => {
  return [
    { nome: 'Inscrição', choice: 'inscricaoProfisional' },
    { nome: 'Baixa', choice: 'baixaRegistro' },
    { nome: 'Reativação', choice: 'reativacao' },
    { nome: 'Transferência', choice: 'transferenciaRegistro' },
    { nome: 'Localização', choice: 'localizacao' },
  ];
};

module.exports.taxaInscricaoProfisional = () => {
  return [
    { nome: 'Relação de Documentos', choice: 'relacaoDocumentos' },
    {
      nome: 'Valores das taxas Tecnólogo',
      choice: 'taxasInscricaoProfisionalTecnologo',
    },
    {
      nome: 'Valores das taxas Técnico',
      choice: 'taxasInscricaoProfisionalTecnico',
    },
    { nome: 'Quero outras informações', choice: 'menuInicial' },
  ];
};

module.exports.fimChat = (add = '') => {
  if (add !== '') {
    return [
      add,
      { nome: 'Isso é Tudo', choice: 'fimChat' },
      { nome: 'Quero outras informações', choice: 'menuInicial' },
    ];
  }

  return [
    { nome: 'Isso é Tudo', choice: 'fimChat' },
    { nome: 'Quero outras informações', choice: 'menuInicial' },
  ];
};
