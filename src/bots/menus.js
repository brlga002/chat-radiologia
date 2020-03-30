module.exports.inicial = () => {
    return [
        { nome:"Inscrição de Registro", choice:"inscricao"},
        { nome:"Baixa de Registro", choice:"baixa"},
        { nome:"Reativacao de Registro", choice:"reativacao"},
        { nome:"Localização", choice:"localizacao"},
    ];     
};

module.exports.taxaInscricaoProfisional = () => {
    return [
        { nome:"Relação de Documentos", choice:"relacaoDocumentos"},
        { nome:"Valores das taxas Tecnólogo", choice:"taxas_inscricao_tecnologo"},
        { nome:"Valores das taxas Técnico", choice:"taxas_inscricao_tecnico"},
        { nome:"Quero outras informações", choice:"menuInicial"},
    ];     
};

module.exports.fimChat = () => {
    return [
        { nome:"Isso é Tudo", choice:"fimChat"},
        { nome:"Quero outras informações", choice:"menuInicial"},
    ];     
};