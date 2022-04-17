const models = require("../../database/models");

class EmpresaService {
  async findAll() {}

  async create(req) {
    await models.Empresa.create(req.body);

    return {
      status: 201,
      message: "Empresa cadastrada com sucesso!",
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

module.exports = new EmpresaService();
