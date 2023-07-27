const { response } = require('express');

const Blog = require('../models/blog.model');

const getBlogs = async (req, res = response) => {
  const blogs = await Blog.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    data: blogs,
  });
};

const createBlog = async (req, res = response) => {
  const { title, date, post_url, img_url } = req.body;
  await Blog.create({
    title,
    date,
    post_url,
    img_url,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: 'Blog created!',
  });
};

module.exports = {
  createBlog,
  getBlogs,
};
