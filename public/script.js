const apiUrl = 'http://localhost:3000';

async function loadAlunos() {
  try {
    const res = await fetch(`${apiUrl}/alunos`);
    if (!res.ok) throw new Error("Erro ao buscar alunos");
    const alunos = await res.json();
    const alunosList = document.getElementById('alunosList');
    alunosList.innerHTML = alunos.map(aluno => {
      const disciplina = aluno.disciplinas[0];
      return `<li>${aluno.nome} (${aluno.email}) - Disciplina: ${disciplina ? disciplina.nome : 'N/A'}</li>`;
    }).join('');
  } catch (err) {
    console.error(err);
  }
}

document.getElementById('alunoForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const disciplina = document.getElementById('disciplina').value;

  try {
    const res = await fetch(`${apiUrl}/alunos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, disciplina })
    });
    if (!res.ok) throw new Error("Erro ao cadastrar aluno");
    document.getElementById('alunoForm').reset();
    loadAlunos();
  } catch (err) {
    console.error(err);
    alert("Erro ao cadastrar aluno. Veja o console para mais detalhes.");
  }
});

document.addEventListener('DOMContentLoaded', loadAlunos);
