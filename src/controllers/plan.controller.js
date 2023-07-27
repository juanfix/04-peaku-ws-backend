const { response } = require('express');

const Plan = require('../models/plan.model');

const getPlans = async (req, res = response) => {
  const plans = await Plan.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    data: plans,
  });
};

const createPlan = async (req, res = response) => {
  const { name, score, price, num_days, discount, img_url } = req.body;
  await Plan.create({
    name,
    score,
    price,
    num_days,
    discount,
    img_url,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: 'Plan created!',
  });
};

module.exports = {
  createPlan,
  getPlans,
};
