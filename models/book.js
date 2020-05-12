// require Mongoose package
var mongoose = require(mongoose);
var Schema = mongoose.Schema;

// creating new BookSchema
var BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
    },
    description: {
        type: String,
    },
    published: {
        type: Boolean,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
})



module.exports = mongoose.model(Book, BookSchema);