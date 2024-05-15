const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    CityName: {
        type: String,
        required: true,
        unique: true
    },
    CityCode: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    state: {
        type: String,
        ref: 'State',
        required: true
    }
}, { timestamps: true });

const City = mongoose.model('City', citySchema);
module.exports = City;
