const Jwt = require('jsonwebtoken');
const bcryptjs = require("bcrypt");

var palavra ="620d3fa4b71c0df775b06a39"

function SegurancaUser(iduser) {
    if (iduser != "") {
        const carga = iduser
        const token = Jwt.sign({ carga }, palavra, { expiresIn: "100 days" });
        return token
    }
}

 async function EncriptaSenha(senha) {
   return bcryptjs.hash(senha, 8)
}

async function comparehash(senha, hash){
    return bcryptjs.compare(senha, hash)
}

function VerificaJwt(token) {
    var verificado = Jwt.verify(token, palavra, (err, decoded) => {
        if (decoded) {
            return decoded.carga
        }
        return err;
    })
    return verificado
}

function Encripta(dado) {
    const carga = dado
    const token = Jwt.sign({ carga }, palavra, { expiresIn: "5000 days" });
    return token
}

function validaSenha(senha) {
    return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(senha)
}

function padraoErro(mensagem) {
    return {
        status: 400,
        message: mensagem,
        result: null
    }
}

function padraoSucesso(dado) {
    return {
        status: 200,
        message: "ok",
        result: dado
    }
}

module.exports = {SegurancaUser,EncriptaSenha, VerificaJwt, Encripta, validaSenha, comparehash}
