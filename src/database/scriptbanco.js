import conexao from "./conexao"


async function user (){
    await conexao.connection.promise().query("CREATE TABLE user (id_user SERIAL CONSTRAINT pk_id_user PRIMARY KEY,CNPJ varchar(14) NOT NULL, nomeDaEmpresa varchar(35) NOT NULL, email varchar(35) UNIQUE NOT NULL,senha varchar(200) NOT NULL);")
    return true 
}
async function empresa (){
    await conexao.connection.promise().query("CREATE TABLE empresa (id_user SERIAL CONSTRAINT pk_id_user PRIMARY KEY,CNPJ varchar(14) NOT NULL, nomeDaEmpresa varchar(35) NOT NULL, email varchar(35) UNIQUE NOT NULL,senha varchar(200) NOT NULL);")
    return true 
}

