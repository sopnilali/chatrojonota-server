const {model, Schema} = require('mongoose');

const PostSchema = new Schema({
    postTile: {
        type: String,
        required: true
    },
    textcontent: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    feature_image: {
        type: String,
    },
    UserId : {
        type:String
     }
})


const MyPosts = model('MyPost', PostSchema);

module.exports = MyPosts;