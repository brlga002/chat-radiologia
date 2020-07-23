const delay = require('delay')
const messageAutomatica = async (io,socket) => {
    async function envio (message,delayTime=2000) {        
        io.to(`${socket.id}`).emit('new_message', { 
            message: message
        });
        await delay(delayTime);        
    }
 
    await envio(`${socket.username}, O processo de inscrição profissional segue algumas etapas:`);
    await envio(`Etapa 1: Preencher e assinar o Formulário de Inscrição de Pessoa Física: link https://crtrsp.org.br/documents/Pessoa_fisica/01-Inscricao_PF-01.PDF`)
    await envio(`Etapa 2: Datar e assinar o Termo de Instruções sobre o Registro Profissional de Pessoa Física: link https://crtrsp.org.br/wp-content/uploads/2018/12/02-Termo-de-Responsabilidade-e-Instrucoes-sobre-o-Registro-Profissional-NOVO-2018.pdf)
    await envio(`Etapa 3: Entregar Documentação Necessária`);
    await envio(`Etapa 4: Pagar a Taxa de Inscição Porfissional`);
    await envio(`Etapa 6: Sua Documentação será analisada pelo setor responsável, no prazo de até 45 (quarenta e cinco dias), conforme preconiza a Resolução CONTER 14/2017`);
    await envio(`Etapa 7: Após analisados dos seus documentos, é encaminhado para ser aprovado em Reunião de Diretoria, que se dá 01 (uma) vez por mês)
    await envio(`Etapa 8: Após o Deferimento de seu registro profissional, seguira o procedimento de Ativação de seu registro, confecção da Cédula de Identidade Profissional (CIP) e envio dos boletos de anuidade e taxa de CIP`)
    await envio(`Etapa 9: Após o pagamento dos boletos, deverá acessar o site e se atentar as datas de convocação para a retirada de sua CIP`)
    await envio(`Aviso Importante: Pautado no Art. 23 do Código de Ética, “Constitui DEVER e OBRIGAÇÃO dos profissionais das Técnicas Radiológicas manter atualizados seus dados cadastrais e regularizadas as suas obrigações financeiras junto ao Conselho Regional.”`);
    await envio(`<a href="https://crtrsp.org.br/inscricao-profissional/">Saiba mais Aqui</a>`);         
}

module.exports = messageAutomatica;