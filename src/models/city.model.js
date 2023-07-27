const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config');

const Country = require('../models/country.model');

class City extends Model {}

City.init(
  {
    // Model attributes are defined here
    id_city: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'City', // We need to choose the model name
  }
);

City.belongsTo(Country, {
  as: 'country',
  foreignKey: {
    name: 'id_country',
    type: DataTypes.UUID,
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = City;
