const express = require('express');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const Category = require('./models/category');
const data = require('./config/db.json');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(cors());

const prefix = "/api/v2";
// routes
app.use(`${prefix}/products`, productRoutes);
app.use(`${prefix}/categories`, categoryRoutes);

connectDB().then(async () => {
    app.listen(process.env.PORT);
    console.log("mongodb was connected and the server is listening on port " +
        process.env.PORT);
    const products = await Product.find();
    if (products.length === 0) {
        data.products.forEach((v)=>{
            Product.create(v);
        } )
    }
    const categories = await Category.find();
    if (categories.length === 0) {
        data.categories.forEach((v)=>{
            Category.create(v);
        } )
    }

})
    .catch((err) => {
        console.log(err);
    });