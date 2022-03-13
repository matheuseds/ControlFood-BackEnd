const Usuario = require("./Usuario");

const models = {
  Usuario,
};

for (const model in models) {
  if (models[model].associate) {
    models[model].associate(models);
  }
}

module.exports = models;
