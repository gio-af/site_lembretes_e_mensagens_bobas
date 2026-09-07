const form = document.getElementById('form-lembrete');
const lista = document.getElementById('lista-lembretes');

// Carregar lembretes ao abrir a página
async function carregarLembretes() {
  const res = await fetch('/reminders');
  const lembretes = await res.json();

  lista.innerHTML = '';
  lembretes.forEach((l) => {
    const li = document.createElement('li');

    const tipoTexto = l.tipo === 'grupo' ? '[Grupo]' : '[Pessoal]';

    const texto = l.dataHora
      ? `${tipoTexto} ${l.titulo} - ${l.mensagem} (para: ${new Date(l.dataHora).toLocaleString('pt-BR')})`
      : `${tipoTexto} ${l.titulo} - ${l.mensagem}`;
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const mensagem = document.getElementById('mensagem').value;
  const dataHora = document.getElementById('dataHora').value;
  const tipo = document.getElementById('tipo').value;

  const res = await fetch('/reminders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, mensagem, dataHora, tipo })
  });

  if (res.ok) {
    form.reset();
    carregarLembretes();
  } else {
    alert('Erro ao criar lembrete');
  }
});

// Carregar ao iniciar
carregarLembretes();