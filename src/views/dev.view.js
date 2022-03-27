import Express, { Router } from "express";

const router = Express.Router();
router.get("/conexaoBackEnd", (req, res) => {
  const mensagem = "Acessar back end";
  res.status(200).json({ mensagem });
});

module.exports = router;
