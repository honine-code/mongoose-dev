const express = require('express');
const Category = require('../models/schemas/category');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const category = await Category.find({});
            res.json(category);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const category = await Category.create({
                categoryName: req.body.categoryName,
            });
            console.log(category);
            res.status(201).json(category);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });


module.exports = router;
