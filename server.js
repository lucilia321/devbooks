const express = require('express');

const authorsRoutes = require('./src/routes/authorsRoutes');
const booksRoutes = require('./src/routes/booksRoutes');

const app = express();

app.use(express.json());

app.use(authorsRoutes);
app.use(booksRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});