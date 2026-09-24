const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos (front-end)
app.use(express.static(path.join(__dirname, '../public')));

// "Banco" em memória 
let lembretes = [];
let proximoId = 1;

// Rota de teste
app.get('/hello', (req, res) => {
  res.json({ message: 'Olá, Giovanni! Seu servidor está rodando.' });
});

// Listar lembretes
app.get('/reminders', (req, res) => {
  res.json(lembretes);
});

// Criar lembrete
app.post('/reminders', (req, res) => {
  const { titulo, mensagem, dataHora, tipo} = req.body;

  if (!titulo || !mensagem) {
    return res.status(400).json({ erro: 'Título e mensagem são obrigatórios' });
  }

  const novoLembrete = {
    id: proximoId++,
    titulo,
    mensagem,
    dataHora: dataHora || null,
    tipo: tipo || 'pessoal',
    disparado: false,
    criadoEm: new Date().toISOString()
  };

  lembretes.push(novoLembrete);
  res.status(201).json(novoLembrete);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

setInterval(() => {
  const agora = new Date();

  lembretes.forEach((lembrete) => {
    if (!lembrete.dataHora || lembrete.disparado) {
      return;
    }

    const horarioDoLembrete = new Date(lembrete.dataHora);

    if (horarioDoLembrete <= agora) {
      console.log(
        `[DISPARO] ${lembrete.titulo}: ${lembrete.mensagem}`
      );

      lembrete.disparado = true;
    }
  });
}, 5000);