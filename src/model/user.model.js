import database from '../database/conexao'
async function inserir(CNPJ, nomeEmpresa,senha, email){
    await database.connection.promise().query(`insert into tabela (CNPJ, nomeEmprea, senha, email) values (${email})`)
    return "Erro"
}

