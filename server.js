const express = require('express');

const authorRoutes = require('./src/routes/authorsRoutes');
const bookRoutes = require('./src/routes/booksRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(authorRoutes);
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});