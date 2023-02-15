const dotenv = require('dotenv');
const express = require('express');
const User = require('../models/schemas/user');
const Category = require('../models/schemas/category');

const router = express.Router();

dotenv.config();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    const category = await Category.find({});
    res.render('mongoose', { users, category, title: process.env.TITLE });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
