const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    categoryName: {
        type: String,
    },
    seoUrl: {
        type: String,
    },
});

module.exports = mongoose.model("categories", categorySchema);