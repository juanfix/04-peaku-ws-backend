/*
    Rutas de City
    host + /api/city/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getCities, createCity } = require('../controllers/city.controller');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Obtener blogs
router.get('/', getCities);

// Crear un nuevo blog
router.post(
  '/',
  [
    // Middlewares
    check('name', 'The name is required.').notEmpty(),
    check('id_country', 'The id_country is required.').notEmpty().isUUID(),
    fieldsValidator,
  ],
  createCity
);

module.exports = router;
