const models = require("../../database/models");

class EmpresaService {
  async findAll() {
    return models.Empresa.findAll()
  }

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
    const { id } = req.params
    await models.Empresa.destroy({
      where: {
        id
      }
    });
    return {
      status: 200,
      message: "Empresa excluida com sucesso!",
    };
  }
}

module.exports = new EmpresaService();
