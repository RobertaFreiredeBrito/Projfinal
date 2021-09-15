const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    idade:{
        type: String,
        require: true
    }
})

module.exports = mongoose.models("Cliente", clienteSchema)