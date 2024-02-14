const Product = require('../models/product')

const getProducts = async (req, res, next) => {
    const search = req.query ? req.query : {};  
    const products = await Product.find(search).sort("id");
    res.status(200).json(products);
};

module.exports = { getProducts } 