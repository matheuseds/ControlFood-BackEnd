import Express from "express";
import conexao from "../database/conexao"

const router = Express.Router();

router.get("/conexaoBackEnd", (req, res) => {
  const mensagem = "Acessar back end";
  res.status(200).json({ mensagem });
});

router.get("/conexaobanco", async (req, res) => {
  const mensagem = await conexao.testaconexao() ;
  res.status(200).json({ mensagem });
});


module.exports = router;
