// src/app.ts
import express from "express";
import simulacaoRoutes from "./routes/simulacaoRoutes";
import { errorHandler } from "./middlewares/errorHendler";

const app = express();

// Middleware para fazer o parsing do corpo das requisições
app.use(express.json());

// Usando as rotas
app.use("/api/simulacoes", simulacaoRoutes);

// Middleware de erro
app.use(errorHandler);

// Rodando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
