const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Meu Web App está no ar!</h1>
    <p>Servidor Node.js + Express rodando no Codespace.</p>
  `);
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'API funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
