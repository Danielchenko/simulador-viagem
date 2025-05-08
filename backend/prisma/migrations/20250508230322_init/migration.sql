/*
  Warnings:

  - You are about to drop the column `dataIda` on the `Viagem` table. All the data in the column will be lost.
  - You are about to drop the column `dataVolta` on the `Viagem` table. All the data in the column will be lost.
  - You are about to drop the column `origem` on the `Viagem` table. All the data in the column will be lost.
  - You are about to drop the column `pessoas` on the `Viagem` table. All the data in the column will be lost.
  - Added the required column `dataFim` to the `Viagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataInicio` to the `Viagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estilo` to the `Viagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamento` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Viagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "destino" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "estilo" TEXT NOT NULL,
    "orcamento" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Viagem" ("createdAt", "destino", "id") SELECT "createdAt", "destino", "id" FROM "Viagem";
DROP TABLE "Viagem";
ALTER TABLE "new_Viagem" RENAME TO "Viagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
