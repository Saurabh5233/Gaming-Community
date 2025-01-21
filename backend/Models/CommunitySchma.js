const { string } = require('joi');
const mongoose = require('mongoose')

const CommSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true

    },
    points: {
        type: Object,
        required: true

    },
    badges: {
        type: Array,
        required: true

    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

const CommModel = mongoose.model('community', CommSchema);

module.exports = CommModel;