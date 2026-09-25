const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createBook = async (req, res) => {
  try {
    const { title, release_year, author_id } = req.body;

    const book = await prisma.books.create({
      data: {
        title,
        release_year,
        author_id
      }
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao criar livro',
      details: error.message
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await prisma.books.findMany({
      include: {
        author: true
      }
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao listar livros',
      details: error.message
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, release_year, author_id } = req.body;

    const book = await prisma.books.update({
      where: {
        id
      },
      data: {
        title,
        release_year,
        author_id
      }
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao atualizar livro',
      details: error.message
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.books.delete({
      where: {
        id
      }
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao excluir livro',
      details: error.message
    });
  }
};

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook
};