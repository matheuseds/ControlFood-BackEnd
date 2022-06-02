const express = require("express");
const UsuarioService = require("./usuario.service");

class UsuarioController {
  async findAll(req, res) {
    try {
      const result = await UsuarioService.findAll(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async findById(req, res) {
    try {
      const result = await UsuarioService.findById(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async update(req, res) {
    try {
      const result = await UsuarioService.update(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async create(req, res) {
    try {
      const result = await UsuarioService.create(req);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async login(req, res) {
    try {
      const result = await UsuarioService.login(req);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async remove(req, res) {
    try {
      const result = await UsuarioService.remove(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  createRouter() {
    const router = express.Router();

    router.post("/login", (req, res) => {
      this.login(req, res);
    });

    router.get("/:id", (req, res) => {
      this.findById(req, res);
    });

    router.put("/:id", (req, res) => {
      this.update(req, res);
    });

    router.post("/", (req, res) => {
      this.create(req, res);
    });

    router.delete("/:id", (req, res) => {
      this.remove(req, res);
    });

    return router;
  }
}

module.exports = new UsuarioController();
