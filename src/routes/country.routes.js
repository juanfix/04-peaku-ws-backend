/*
    Rutas de Country
    host + /api/country/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const {
  getCountries,
  createCountry,
} = require('../controllers/country.controller');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Obtener blogs
router.get('/', getCountries);

// Crear un nuevo blog
router.post(
  '/',
  [
    // Middlewares
    check('name', 'The title is required.').notEmpty(),
    fieldsValidator,
  ],
  createCountry
);

module.exports = router;
