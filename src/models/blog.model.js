const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config');

class Blog extends Model {}

Blog.init(
  {
    // Model attributes are defined here
    id_blog: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Blog', // We need to choose the model name
  }
);

module.exports = Blog;
