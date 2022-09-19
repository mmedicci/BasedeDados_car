const mongoose = require('mongoose')

const carsdataSchema = new mongoose.Schema({
    model: {
        type: String,
    },
    brand: {
        type: String,
    },
    year: {
        type: Number,
    },
    price: {
        type: Number,   
    }
})

module.exports = mongoose.model('cardata', carsdataSchema)