const express = require("express");

const UsuarioController = require("./usuario/usuario.controller");
const EmpresaController = require("./empresa/empresa.controller");
const ColaboradorController = require("./colaborador/colaborador.controller");

const router = express.Router();

router.use("/api/usuario", UsuarioController.createRouter());
router.use("/api/empresa", EmpresaController.createRouter());
router.use("/api/colaborador", ColaboradorController.createRouter());

module.exports = router;
