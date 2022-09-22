const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    status:{
        type : Boolean,
    },
    createAt:{
        type: Date
    },
    consumedAt:{
        type: String 
    },
}, {timestamps: true} )

const food = mongoose.model('food', TodoSchema);

module.exports = food;
