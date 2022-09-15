const mongoose = require('mongoose')

const carsdataSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('cardata', carsdataSchema)