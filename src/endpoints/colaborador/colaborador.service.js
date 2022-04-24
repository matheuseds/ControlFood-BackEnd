const models = require("../../database/models");

class ColaboradorService {
  async findAll() {}

  async create(req) {
    await models.Colaborador.create(req.body);

    return {
      status: 201,
      message: "Colaborador cadastrado com sucesso!",
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

module.exports = new ColaboradorService();
