const Usuario = require("./Usuario");
const Empresa = require("./Empresa");

const models = {
  Usuario,
  Empresa,
};

for (const model in models) {
  if (models[model].associate) {
    models[model].associate(models);
  }
}

module.exports = models;
