const express = require("express");
const EmpresaService = require("./empresa.service");

class EmpresaController {
  async findAll(req, res) {
    try {
      const result = await EmpresaService.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async findById(req, res) {
    try {
      const result = await EmpresaService.findById(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async update(req, res) {
    try {
      const result = await EmpresaService.update(req);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async create(req, res) {
    try {
      const result = await EmpresaService.create(req);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: { message: error.message } });
    }
  }

  async remove(req, res) {
    try {
      const result = await EmpresaService.remove(req);
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
      this.findAllById(req, res);
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

module.exports = new EmpresaController();
