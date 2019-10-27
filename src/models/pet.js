const mongoose = require('../db');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,      
    },
    type: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    race: {
        type: String,
    },
    color: {
        type: String,
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
    url: {
        type: String
    }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;