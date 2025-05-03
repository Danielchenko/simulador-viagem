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
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "dataIda" DATETIME NOT NULL,
    "dataVolta" DATETIME NOT NULL,
    "pessoas" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
