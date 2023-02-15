const mongoose = require('mongoose');

const { Schema } = mongoose;
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    cacomment: {
        type: String,
    },
});

module.exports = mongoose.model('Category', categorySchema);
