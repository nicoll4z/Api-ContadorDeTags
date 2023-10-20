const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../Database/db');

const ContagemTag = require('../src/contagemTag');

// Controlador para contar as tags HTML
const countTags = async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    const tagCount = {};

    // Função recursiva para contar as tags
    function countTags(element) {
      const tagName = element.name;
      tagCount[tagName] = (tagCount[tagName] || 0) + 1;

      element.children.forEach((child) => {
        if (child.type === 'tag') {
          countTags(child);
        }
      });
    }

    $('*').each((index, element) => {
      countTags(element);
    });

    const tagsData = JSON.stringify(tagCount);
    const urlToSave = url;
    const savedData = await ContagemTag.create({
      url: urlToSave,
      tags: tagsData,
    });

    res.json({ message: 'Dados salvos com sucesso', data: savedData });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ error: 'Erro ao salvar dados' });
  }
};

module.exports = { countTags };
