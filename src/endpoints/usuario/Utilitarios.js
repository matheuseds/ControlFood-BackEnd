var Jwt = require('jsonwebtoken');

var palavra ="620d3fa4b71c0df775b06a39"

function SegurancaUser(iduser) {
    if (iduser != "") {
        const carga = iduser
        const token = Jwt.sign({ carga }, palavra, { expiresIn: "100 days" });
        return token
    }
}

function EncriptaSenha(senha) {
    const carga = senha
    const token = Jwt.sign({ carga }, palavra, { expiresIn: "2 days" });
    return token
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
    let valida = new Object()
    valida.senha = senha
    valida.maiuscula = senhaMaiuscula(senha)
    valida.mensagem = "Senha Incorreta: A senha deve conter "
    valida.mensagem1 = "números"
    valida.mensagem2 = "letras maiúsculas"
    valida.numero = false
    valida.letraMaiuscula = false
    if (senha.length >= 8) {
        for (let i = 0; i < senha.length; i++) {
            if (senha[i] == 1 || senha[i] == 2 || senha[i] == 3 || senha[i] == 4 || senha[i] == 5 || senha[i] == 6 || senha[i] == 7 || senha[i] == 8 || senha[i] == 9 || senha[i] == 0) {
                valida.numero = true
            }
            if (valida.senha[i] == valida.maiuscula[i] && valida.maiuscula[i] != "*") {
                valida.letraMaiuscula = true
            }
        }
        if (valida.numero == true && valida.letraMaiuscula == true) {
            valida.cripto = EncriptaSenha(senha)
            valida.dado = { senha: valida.senha, senhacripta: valida.cripto}
            return padraoSucesso(valida.dado)
        } else {
            if (valida.numero == false && valida.letraMaiuscula != false) valida.mensagem += valida.mensagem1 + "."
            if (valida.numero != false && valida.letraMaiuscula == false) valida.mensagem += valida.mensagem2 + "."
            if (valida.numero == false && valida.letraMaiuscula == false) valida.mensagem += valida.mensagem1 + " e " + valida.mensagem2 + "."
            return padraoErro(valida.mensagem)
        }
    } else {
        return padraoErro("Senha deve conter 8 digitos")
    }
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

module.exports = {SegurancaUser,EncriptaSenha, VerificaJwt, Encripta, validaSenha }
