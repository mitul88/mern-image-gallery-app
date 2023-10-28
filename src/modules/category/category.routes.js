const router = require('express').Router();
const { createCategory, getCategories } = require('./category.controller');

router.route('/create-category')
    .post(createCategory);

router.route('/')
    .get(getCategories);



module.exports = router;