import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Rota para criar uma nova simulação
router.post("/", async (req, res) => {
  try {
    const { destino, dataInicio, dataFim, estilo, orcamento } = req.body;

    const novaSimulacao = await prisma.simulacao.create({
      data: {
        destino,
        dataInicio: new Date(dataInicio),
        dataFim: new Date(dataFim),
        estilo,
        orcamento: parseFloat(orcamento),
      },
    });

    res.status(201).json(novaSimulacao);
  } catch (error) {
    console.error("Erro ao criar simulação:", error);
    res.status(500).json({ error: "Erro ao criar simulação" });
  }
});

// Rota para listar todas as simulações
router.get("/", async (_req, res) => {
  try {
    const simulacoes = await prisma.simulacao.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(simulacoes);
  } catch (error) {
    console.error("Erro ao listar simulações:", error);
    res.status(500).json({ error: "Erro ao listar simulações" });
  }
});

export default router;
