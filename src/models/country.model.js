const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config');

class Country extends Model {}

Country.init(
  {
    // Model attributes are defined here
    id_country: {
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
    modelName: 'Country', // We need to choose the model name
  }
);

module.exports = Country;
