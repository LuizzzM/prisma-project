const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post('/alunos', async (req, res) => {
  const { nome, email, disciplina } = req.body;
  try {
    const aluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        disciplinas: {
          connectOrCreate: {
            where: { nome: disciplina },
            create: { nome: disciplina }
          }
        }
      },
      include: { disciplinas: true }
    });
    res.json(aluno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/alunos', async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany({
      include: { disciplinas: true }
    });
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
