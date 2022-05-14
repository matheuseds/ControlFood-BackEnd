const models = require("../../database/models");
const Globals = require("./Utilitarios");

class UsuarioService {
  async findAll(req) {
    const email = req.body.email;
    const senha = req.body.senha;
    let user = await models.Usuario.findOne({ where: { email } });
    let senhaEncripta = Globals.VerificaJwt(user.senha);
    if (senhaEncripta == senha) {
      let token = Globals.SegurancaUser(user.id);
      return {
        status: 201,
        message: "Usuário logado com sucesso!",
        result: token,
      };
    }
  }

  async login(req) {
    const email = req.body.email;
    const senha = req.body.senha;
    let user = await models.Usuario.findOne({where:{email}});
    if(!user){
      return {
        status: 404,
      message: "Usuário não encontrado",
      }
    }
    const isValid = await Globals.comparehash(senha, user.senha)
    if(!isValid){
      return {
        status: 404,
      message: "Usuário não encontrado",
      }
    }

    const token = Globals.Encripta({id:user.id})

    return {
      status: 200,
    message: "Usuário logado",
    token,
    } 
  }

  async create(req) {
    const email = req.body.email;
    const nome = req.body.nome;
    let cpf = req.body.cpf;
    let cnpj = req.body.cnpj;
    let senha = req.body.senha;
    if(!Globals.validaSenha(senha)){
      return {
        status: 422,
        message: "Senha inválida",
      }; 
    }
    cpf = Globals.Encripta(cpf);
    cnpj = Globals.Encripta(cnpj);
    senha = await Globals.EncriptaSenha(senha);
    let user = await models.Usuario.create({ email, senha, cpf, nome, cnpj });
    let token = Globals.SegurancaUser(user.id);
    return {
      status: 201,
      message: "Usuário cadastrado com sucesso!",
      result: token,
    };
  }

  async update(req) {
    console.log(req);
  }

  async findById(req) {
    console.log(req);
  }

  async remove(req) {
    console.log(req);
  }
}

module.exports = new UsuarioService();
