// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";

// Middleware de erro
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Ocorreu um erro interno. Tente novamente mais tarde." });
};
