const db = require('../Database/db');
const ContagemTag = require('../src/contagemTag');

const getTagCounts = async (req, res) => {
  try {
    const tagCounts = await ContagemTag.findAll();
    res.json(tagCounts);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
};

module.exports = { getTagCounts };
