const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
})


let model = mongoose.model('model', userSchema)

module.exports = model
