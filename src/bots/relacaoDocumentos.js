const menu = require('./menu/menus');

const relacaoDocumentos = [
  { type: 'message', text: `Em atendimento as Resoluções CONTER 14/2017 e 14/2018, art 2º e 3º, a saber:` },

  { type: 'message', text: `(01) Ficha de Inscrição Profissional; https://crtrsp.org.br/documents/Pessoa_fisica/01-Inscricao_PF-01.PDF.` },

  { type: 'message', text: `(02) Instrução Sobre Registro Profissional; https://crtrsp.org.br/wp-content/uploads/2018/12/02-Termo-de-Responsabilidade-e-Instrucoes-sobre-o-Registro-Profissional-NOVO-2018.pdf.` },
  
  { type: 'message', text: `(03) RG – Cédula de Identidade (Posso apresentar a CNH? Não! A Carteira Nacional de Habilitação é um documento que possui validade, além disso, não possui informações
    específicas encontradas no RG, tais como: número e folhas do registro que deu origem ao documento, data e local de expedição` },

  { type: 'message', text: `(05) CPF – Cadastro de Pessoa Física (Posso apresentar a CNH? Não! A CNH, é documento utilizado para determinado fim, ou seja, conduzir um veículo. A universidade solicita
    o comprovante no CPF, o qual poderá ser obtido pelo sitio: http://www.receita.fazenda.gov.br/Aplicacoes/ATCTA/cpf/ConsultaPublica.asp).` },

  { type: 'message', text: `(06) Certificado de Reservista (somente para homens).`, },

  { type: 'message', text: `(07) Certidão de nascimento ou casamento.` },

  { type: 'message', text: `(08) 3 (Três) Fotos Coloridas 3×4 (recentes e idênticas).`, },

  { type: 'message', text: `(09) Comprovante de Residência (telefone, loja, banco) com CEP no nome do inscrito ou de seus pais ou cônjuge, caso contrário o mesmo deverá fazer Declaração de Residência no Modelo CRTR para justificar o nome apresentado no comprovante.`, },

  { type: 'message', text: `(10) Histórico do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)`, },

  { type: 'message', text: `(11) Certificado de conclusão do Ensino Médio (2º Grau) (Somente para categoria de Técnico em Radiologia)`, },

  { type: 'message', text: `(12) Histórico do Respectivo Curso de Radiologia (autorizado pelo CEE).`, },

  { type: 'message', text: `(13) Diploma do Respectivo Curso em Radiologia (autorizado pelo CEE)`, },
  
  { type: 'message', text: `(14) Declaração de Conclusão de  Estágio  (Carga Horária mínima: 400h desde 11/11/2011. Emitido pela Instituição de Ensino estando assinada pelo Preceptor e o Diretor da Instituição.)`, },

  { type: 'message', text: `(14.1) Termo de Convênio entre as Instituições cedente e concedente (para alunos matriculados a partir de 23/10/2014)`, },

  { type: 'message', text: `(15) Relatório assinado pelo preceptor (Relatório Instrumental).`, },
  
  { type: 'message', text: `(16) Termo de Convênio entre as instituições, cedente e concedente, nos termos da Lei n.° 11.788/2008.`, },
  
  { type: 'bot', bots: menu.fimChat() },
];

module.exports = relacaoDocumentos;
