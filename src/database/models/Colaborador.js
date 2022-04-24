const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const Colaborador = sequelize.define(
  "Colaborador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome_empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "colaborador",
    timestamps: true,
  }
);

module.exports = Colaborador;
