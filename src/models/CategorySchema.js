const {model, Schema} = require('mongoose');

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    category_slug: {
        type: String,
        required: true
    },
    category_description: {
        type: String,
        required: true
    },
    category_icons: {
        type: String,
    }
})


const MyCategory = model('MyCategory', CategorySchema);

module.exports = MyCategory;