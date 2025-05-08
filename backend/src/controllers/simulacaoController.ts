// src/controllers/simulacaoController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import Joi from "joi";

const prisma = new PrismaClient();

// Validação dos dados da simulação
const simValidationSchema = Joi.object({
  destino: Joi.string().required(),
  dataInicio: Joi.date().iso().required(),
  dataFim: Joi.date().iso().greater(Joi.ref('dataInicio')).required(),
  estilo: Joi.string().required(),
  orcamento: Joi.number().greater(0).required(),
});

// Função para criar uma simulação
export const criarSimulacao = async (req: Request, res: Response) => {
  try {
    const { error } = simValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { destino, dataInicio, dataFim, estilo, orcamento } = req.body;
    const novaSimulacao = await prisma.viagem.create({
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
};

// Função para listar todas as simulações
export const listarSimulacoes = async (_req: Request, res: Response) => {
  try {
    const simulacoes = await prisma.viagem.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(simulacoes);
  } catch (error) {
    console.error("Erro ao listar simulações:", error);
    res.status(500).json({ error: "Erro ao listar simulações" });
  }
};

// Função para atualizar uma simulação
export const atualizarSimulacao = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { destino, dataInicio, dataFim, estilo, orcamento } = req.body;
  
  try {
    const viagemAtualizada = await prisma.viagem.update({
      where: { id: parseInt(id) },
      data: {
        destino,
        dataInicio: new Date(dataInicio),
        dataFim: new Date(dataFim),
        estilo,
        orcamento: parseFloat(orcamento),
      },
    });
    res.json(viagemAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar simulação:", error);
    res.status(500).json({ error: "Erro ao atualizar simulação" });
  }
};

// Função para excluir uma simulação
export const excluirSimulacao = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const viagemDeletada = await prisma.viagem.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Simulação excluída com sucesso", viagemDeletada });
  } catch (error) {
    console.error("Erro ao excluir simulação:", error);
    res.status(500).json({ error: "Erro ao excluir simulação" });
  }
};
