const express = require("express");

const UsuarioController = require("./usuario/usuario.controller");

const router = express.Router();

router.use("/api/usuario", UsuarioController.createRouter());

module.exports = router;
