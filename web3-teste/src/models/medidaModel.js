var database = require("../database/config");

function buscarUltimasMedidas() {
    instrucaoSql = `select sum(novoTestamento) as 'Novo_Testamento', sum(velhoTestamento) as 'Velho_Testamento'
    from usuario;  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {
    instrucaoSql = `select sum(novoTestamento) as 'Novo_Testamento', sum(velhoTestamento) as 'Velho_Testamento'
    from usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
