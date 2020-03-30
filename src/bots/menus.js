module.exports.inicial = () => {
    return [
        { nome:"Inscrição", choice:"inscricao"},
        { nome:"Baixa", choice:"baixa"},
        { nome:"Reativação", choice:"reativacao"},
        { nome:"Transferência", choice:"transferencia"},
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

module.exports.fimChat = (add='') => {
    if (add !== ''){
        return [
            add, 
            { nome:"Isso é Tudo", choice:"fimChat"},
            { nome:"Quero outras informações", choice:"menuInicial"},                   
        ];
    } 

    return [
        { nome:"Isso é Tudo", choice:"fimChat"},
        { nome:"Quero outras informações", choice:"menuInicial"},        
    ];         
};