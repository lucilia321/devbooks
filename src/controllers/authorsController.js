const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createAuthor = async (req, res) => {
  try {
    const { name, biography } = req.body;

    const author = await prisma.authors.create({
      data: {
        name,
        biography
      }
    });

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao criar autor',
      details: error.message
    });
  }
};

module.exports = {
  createAuthor
};