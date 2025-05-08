import { Router } from "express";
import { criarSimulacao } from "../services/simulacaoService";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { destino, dataInicio, dataFim, estilo, orcamento } = req.body;

    if (!destino || !dataInicio || !dataFim || !estilo || !orcamento) {
      return res.status(400).json({ message: "Dados incompletos." });
    }

    const simulacao = await criarSimulacao({
      destino,
      dataInicio,
      dataFim,
      estilo,
      orcamento: Number(orcamento),
    });

    res.status(201).json(simulacao);
  } catch (error) {
    console.error("Erro ao criar simulação:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

export default router;
