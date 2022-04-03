const { DataTypes } = require("sequelize");
const sequelize = require("../index");

const Usuario = sequelize.define(
  "Empresa",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nomeEmpresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nomeResponsavel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contatoResponsavel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "empresa",
    timestamps: true,
  }
);

module.exports = Usuario;
