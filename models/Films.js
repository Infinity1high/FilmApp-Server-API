const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    title: {
        type: String
    },
    release: {
        type: Number
    },
    format: {
        type: String
    },
    stars: {
        type: String
    }
});

const Film = mongoose.model('Film', userSchema);
module.exports = Film;
