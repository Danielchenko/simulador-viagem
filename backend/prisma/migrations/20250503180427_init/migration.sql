-- CreateTable
CREATE TABLE "Simulacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "destino" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL,
    "estilo" TEXT NOT NULL,
    "orcamento" INTEGER NOT NULL,
    "roteiroJson" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
