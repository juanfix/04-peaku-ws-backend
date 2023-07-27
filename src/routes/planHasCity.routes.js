/*
    Rutas de Plan Has City
    host + /api/plan-has-city/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const {
  createPlanHasCity,
  getPlanHasCities,
  getPlanHasCitiesWithDiscount,
} = require('../controllers/planHasCity.controllers');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Obtener planes
router.get('/', getPlanHasCities);

router.get('/discount', getPlanHasCitiesWithDiscount);

// Crear un nuevo plan
router.post(
  '/',
  [
    // Middlewares
    check('id_city', 'The id_city is required.').notEmpty().isUUID(),
    check('id_plan', 'The id_plan is required.').notEmpty().isUUID(),
    fieldsValidator,
  ],
  createPlanHasCity
);

module.exports = router;
