-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AlunoToDisciplina" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoToDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "Disciplina" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Disciplina_nome_key" ON "Disciplina"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToDisciplina_AB_unique" ON "_AlunoToDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToDisciplina_B_index" ON "_AlunoToDisciplina"("B");
