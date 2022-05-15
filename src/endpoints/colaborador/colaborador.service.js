const models = require("../../database/models");

class ColaboradorService {
  async findAll() {
    return models.Colaborador.findAll()
  }

  async create(req) {
    await models.Colaborador.create(req.body);

    return {
      status: 201,
      message: "Colaborador cadastrado com sucesso!",
    };
  }

  async update(req) {
    await models.Colaborador.update(req.body, {
      where: { id: req.params.id },
    });

    return {
      status: 200,
      message: "Colaborador atualizado com sucesso!",
    };
  }

  async findById(req) {
    console.log(req);
  }

  async remove(req) {
    const { id } = req.params
    await models.Colaborador.destroy({
      where: {
        id
      }
    });
    return {
      status: 200,
      message: "Colaborador excluido com sucesso!",
    };
  }
}

module.exports = new ColaboradorService();
