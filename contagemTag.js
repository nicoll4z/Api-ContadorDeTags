const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const ContagemTag = sequelize.define('ContagemTag', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  tableName: 'url_tags',
  timestamps: false, // Desabilitar automaticamente createdAt e updatedAt
});

module.exports = ContagemTag;
