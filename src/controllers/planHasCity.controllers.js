const { response } = require('express');

const PlanHasCity = require('../models/planHasCity.model');
const Country = require('../models/country.model');
const City = require('../models/city.model');
const Plan = require('../models/plan.model');
const { Op } = require('sequelize');

const getPlanHasCities = async (req, res = response) => {
  const plansHasCities = await PlanHasCity.findAll({
    attributes: {
      exclude: ['id_city', 'id_plan', 'createdAt', 'updatedAt'],
    },
    include: [
      {
        model: City,
        as: 'city',
        include: [
          {
            model: Country,
            as: 'country',
            attributes: ['name'],
          },
        ],
        attributes: ['name'],
      },
      {
        model: Plan,
        as: 'plan',
        where: { discount: 0 },
        attributes: ['score', 'price', 'num_days', 'discount', 'img_url'],
      },
    ],
  });
  res.status(200).json({
    ok: true,
    status: 200,
    data: plansHasCities,
  });
};

const getPlanHasCitiesWithDiscount = async (req, res = response) => {
  const plansHasCities = await PlanHasCity.findAll({
    attributes: {
      exclude: ['id_city', 'id_plan', 'createdAt', 'updatedAt'],
    },
    include: [
      {
        model: City,
        as: 'city',
        include: [
          {
            model: Country,
            as: 'country',
            attributes: ['name'],
          },
        ],
        attributes: ['name'],
      },
      {
        model: Plan,
        as: 'plan',
        where: { discount: { [Op.gt]: 0 } },
        attributes: ['score', 'price', 'num_days', 'discount', 'img_url'],
      },
    ],
  });
  res.status(200).json({
    ok: true,
    status: 200,
    data: plansHasCities,
  });
};

const createPlanHasCity = async (req, res = response) => {
  const { id_city, id_plan } = req.body;
  await PlanHasCity.create({
    id_city,
    id_plan,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: 'Plan Has City created!',
  });
};

module.exports = {
  createPlanHasCity,
  getPlanHasCities,
  getPlanHasCitiesWithDiscount,
};
