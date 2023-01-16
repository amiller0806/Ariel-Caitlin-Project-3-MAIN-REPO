const {
    Schema,
    model
} = require('mongoose');

const ProductSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },

    title: {
        type: String,

        unique: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,

    },

    price: {
        type: String,

    },

    main_image: {
        type: String,

    },

    rating: {
        type: Number
    },

    ratings_total: {
        type: Number

    },

    brand: {
        type: String
    },

    link: {
        type: String
    }



});

const Product = model('Product', ProductSchema);
module.exports = Product;