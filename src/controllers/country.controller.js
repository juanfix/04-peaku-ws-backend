const { response } = require('express');

const Country = require('../models/country.model');

const getCountries = async (req, res = response) => {
  const countries = await Country.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    data: countries,
  });
};

const createCountry = async (req, res = response) => {
  const { name } = req.body;
  await Country.create({
    name,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: 'Country created!',
  });
};

module.exports = {
  createCountry,
  getCountries,
};
