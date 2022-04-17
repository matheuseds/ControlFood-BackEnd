const express = require("express");

const UsuarioController = require("./usuario/usuario.controller");
const EmpresaController = require("./empresa/empresa.controller");

const router = express.Router();

router.use("/api/usuario", UsuarioController.createRouter());
router.use("/api/empresa", EmpresaController.createRouter());

module.exports = router;
