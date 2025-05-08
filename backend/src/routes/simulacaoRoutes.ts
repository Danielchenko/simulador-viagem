// src/routes/simulacaoRoutes.ts
import { Router } from "express";
import { criarSimulacao, listarSimulacoes, atualizarSimulacao, excluirSimulacao } from "../controllers/simulacaoController";

const router = Router();

// Definindo as rotas
router.post("/", criarSimulacao);
router.get("/", listarSimulacoes);
router.put("/:id", atualizarSimulacao);
router.delete("/:id", excluirSimulacao);

export default router;
