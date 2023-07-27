const { response } = require('express');

const City = require('../models/city.model');
const Country = require('../models/country.model');

const getCities = async (req, res = response) => {
  const cities = await City.findAll({
    attributes: {
      exclude: ['id_country'],
    },
    include: [{ model: Country, as: 'country', attributes: ['name'] }],
  });
  res.status(200).json({
    ok: true,
    status: 200,
    data: cities,
  });
};

const createCity = async (req, res = response) => {
  const { name, id_country } = req.body;
  await City.create({
    name,
    id_country,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: 'Country created!',
  });
};

module.exports = {
  createCity,
  getCities,
};
