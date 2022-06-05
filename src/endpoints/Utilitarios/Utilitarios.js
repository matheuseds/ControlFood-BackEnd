const Jwt = require('jsonwebtoken');
const bcryptjs = require("bcrypt");
const EnvioEmail = require("../email/email");

var palavra ="620d3fa4b71c0df775b06a39"

function SegurancaUser(iduser) {
    if (iduser != "") {
        const carga = iduser
        const token = Jwt.sign({ carga }, palavra, { expiresIn: "100 days" });
        return token
    }
}

async function EncriptaCpf(cpf){
    return bcryptjs.hash(cpf, 14)
}

 async function EncriptaSenha(senha) {
   return bcryptjs.hash(senha, 8)
}

async function comparehash(senha, hash){
    return bcryptjs.compareSync(senha, hash)
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

async function enviaremail(email,nome,mensagem){

    const emailrest = await EnvioEmail.email(email, nome, mensagem)
        return emailrest
}

function validaCpf(cpf) {
    var Soma;
    var Resto;
    Soma = 0;
    var i
    if (cpf.length !== 11) {
        return false
    }
    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(9, 10))) {
        return false;
    }
    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(10, 11))) {
        return false
    }
    return true;
}

function validaCnpj(cnpj) {
    let i
    let resultado
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj == '') 
        return false;
    if (cnpj.length !== 14)
        return false;
    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;
    return true;
}

function validaEmail(email) {
    if (email != undefined) {
        let valida = new Object()
        valida.email = email
        valida.arroba = email.split("@")
        valida.ponto = email.split(".")
        valida.tamanho = valida.email.length
        valida.arrobaTam = valida.arroba.length
        valida.pontoTam = valida.ponto.length
        valida.teste = valida.arroba[0].length
        for (let i = 0; i < valida.tamanho; i++) {
            if (valida.email[i] == '@' && valida.arrobaTam !== 1 && valida.pontoTam !== 1 && valida.tamanho > 11 && valida.arroba[0].length >= 6) {
                for (let i = 0; i < valida.pontoTam; i++) {
                    if (valida.ponto[i] == "com") {
                        valida.status = 200
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return false;
}



module.exports = {SegurancaUser,EncriptaSenha, VerificaJwt, Encripta, validaSenha, comparehash, enviaremail, validaEmail, validaCnpj, validaCpf}

