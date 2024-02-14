const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    categoryId: {
        type: Number,
    },
    productName: {
        type: String,
    },
    quantityPerUnit: {
        type: String,
    },
    unitPrice: {
        type: String,
    },
    unitsInStock: {
        type: Number,
    },
});

module.exports = mongoose.model("products", productSchema);