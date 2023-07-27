/*
    Rutas de Plan
    host + /api/plan/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getPlans, createPlan } = require('../controllers/plan.controller');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Obtener blogs
router.get('/', getPlans);

// Crear un nuevo blog
router.post(
  '/',
  [
    // Middlewares
    check('name', 'The name is required.').notEmpty(),
    check('score', 'The score is required.').notEmpty().isFloat(),
    check('price', 'The price is required.').notEmpty().isNumeric(),
    check('num_days', 'The numbre of days is required.').notEmpty().isNumeric(),
    check('discount', 'The numbre of days is required.').notEmpty().isFloat(),
    check('img_url', 'The img_url is required.').notEmpty(),
    fieldsValidator,
  ],
  createPlan
);

module.exports = router;
