const express = require("express");
const ColaboradorService = require("./colaborador.service");

class ColaboradorController {
  async findAll(req, res) {
    try {
      const result = await ColaboradorService.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async findById(req, res) {
    try {
      const result = await ColaboradorService.findById(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async update(req, res) {
    try {
      const result = await ColaboradorService.update(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async create(req, res) {
    try {
      const result = await ColaboradorService.create(req);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async remove(req, res) {
    try {
      const result = await ColaboradorService.remove(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  createRouter() {
    const router = express.Router();

    router.get("/", (req, res) => {
      this.findAll(req, res);
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

module.exports = new ColaboradorController();
