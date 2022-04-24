const Usuario = require("./Usuario");
const Empresa = require("./Empresa");
const Colaborador = require("./Colaborador");

const models = {
  Usuario,
  Empresa,
  Colaborador,
};

for (const model in models) {
  if (models[model].associate) {
    models[model].associate(models);
  }
}

module.exports = models;
