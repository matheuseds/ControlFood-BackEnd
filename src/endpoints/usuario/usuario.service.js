const models = require("../../database/models");

class UsuarioService {
  async findAll() {}

  async create({ body }) {
    await models.Usuario.create(body);

    return {
      status: 201,
      message: "Usuário cadastrado com sucesso!",
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
