/*
  Warnings:

  - You are about to drop the `Simulacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Simulacao";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Viagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "destino" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "estilo" TEXT NOT NULL,
    "orcamento" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
