const req = require("express/lib/request");
const models = require("../../database/models");
const Utilitarios = require("../Utilitarios/Utilitarios");

class EmpresaService {
  async findAll() {
    return models.Empresa.findAll();
  }

  async create(req) {
    let cnpj = Utilitarios.validaCnpj(req.body.cnpj);

    if (!cnpj) {
      return {
        status: 403,
        message: "Dados Inválidos",
      };
    }

    cnpj = Utilitarios.Encripta(req.body.cnpj);

    await models.Empresa.create({ ...req.body, cnpj });

    return {
      status: 201,
      message: "Empresa cadastrada com sucesso!",
    };
  }

  async update(req) {
    await models.Empresa.update(req.body, {
      where: { id: req.params.id },
    });

    return {
      status: 200,
      message: "Empresa atualizada com sucesso!",
    };
  }

  async findById(req) {
    console.log(req);
  }

  async remove(req) {
    const { id } = req.params;
    await models.Empresa.destroy({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: "Empresa excluída com sucesso!",
    };
  }
}

module.exports = new EmpresaService();
