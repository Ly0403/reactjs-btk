const Category = require('../models/category');

const getCategories = async (req, res, next) => {
    const search = req.query ? req.query : {};  
    const categories = await Category.find(search).sort("id");
    res.status(200).json(categories);
};

module.exports = { getCategories } 