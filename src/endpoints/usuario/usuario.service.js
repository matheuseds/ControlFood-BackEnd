const models = require("../../database/models");
const Globals = require("../Utilitarios/Utilitarios");

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

    //let nome = "";
    let user = await models.Usuario.findOne({ where: { email } });
    if (!user) {
      return {
        status: 404,
        message: "Usuário não encontrado",
      };
    }
    const isValid = await Globals.comparehash(senha, user.senha);
    if (!isValid) {
      return {
        status: 404,
        message: "Usuário não encontrado 12",
      };
    }

    const token = Globals.Encripta({ id: user.id });
    let mensagem = "Utilize este token para fazer seu login";
    await Globals.enviaremail(email, user.nome, `${mensagem}: ${token}`);

    return {
      status: 200,
      message: "Usuário logado",
      //token,
      // id: token,
      //id: user.id
    };
  }

  async create(req) {
    let email = Globals.ValidaEmail(req.body.email);
    let senha = Globals.ValidaSenha(req.body.senha);

    if (!email && !senha) {
      return {
        status: 403,
        message: "Dados Inválidos",
      };
    }

    senha = await Globals.EncriptaSenha(senha);

    const user = await models.Usuario.create({ ...req.body, senha, });
    const token = Globals.SegurancaUser(user.id);

    if (!Globals.validaSenha(req.body.senha)) {
      return {
        status: 422,
        message: "Senha inválida",
      };
    }

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
