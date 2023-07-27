/*
    Rutas de Blog
    host + /api/blog/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getBlogs, createBlog } = require('../controllers/blog.controller');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Obtener blogs
router.get('/', getBlogs);

// Crear un nuevo blog
router.post(
  '/',
  [
    // Middlewares
    check('title', 'The title is required.').notEmpty(),
    check('date', 'The date is required.').isISO8601().toDate().notEmpty(),
    check('post_url', 'The end date is required.').notEmpty(),
    check('img_url', 'The end date is required.').notEmpty(),
    fieldsValidator,
  ],
  createBlog
);

module.exports = router;
