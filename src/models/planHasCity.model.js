const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/config');

const City = require('./city.model');
const Plan = require('./plan.model');

class PlanHasCity extends Model {}

PlanHasCity.init(
  {
    // Model attributes are defined here
    id_plan_has_city: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'PlanHasCity', // We need to choose the model name
  }
);

PlanHasCity.belongsTo(Plan, {
  as: 'plan',
  foreignKey: {
    name: 'id_plan',
    type: DataTypes.UUID,
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  through: PlanHasCity,
});

PlanHasCity.belongsTo(City, {
  as: 'city',
  foreignKey: {
    name: 'id_city',
    type: DataTypes.UUID,
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  through: PlanHasCity,
});

module.exports = PlanHasCity;
