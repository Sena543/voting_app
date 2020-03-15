const mongoose = require('mongoose');


const aspirantsData = new mongoose.Schema({
    aspirantId:{
        type: String,
        required: true
    },
    aspirantName:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    }
})

module.exports = AspirantsData = mongoose.model('AspirantData', aspirantsData);