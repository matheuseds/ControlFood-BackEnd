const req = require("express/lib/request");
const models = require("../../database/models");
const utilitarios = require("../usuario/Utilitarios");

class ColaboradorService {
  async findAll() {
    let lista = await models.Colaborador.findAll();

    return lista;
  }

  async create(req) {
    const cpf = utilitarios.Encripta(req.body.cpf);

    await models.Colaborador.create({ ...req.body, cpf });

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

  async addref(req) {
    const id = req.body.id;

    let qtdref = await models.Colaborador.findOne({ where: { id } });
    qtdref = qtdref.qtdref + 1
    await models.Colaborador.update({ qtdref }, { where: { id } });

    return {
      status: 200,
      message: "Colaborador atualizado com sucesso!",
    };
  }

  async findById(req) {
    console.log(req);
  }

  async remove(req) {
    const { id } = req.params;
    await models.Colaborador.destroy({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: "Colaborador excluido com sucesso!",
    };
  }
}

module.exports = new ColaboradorService();
