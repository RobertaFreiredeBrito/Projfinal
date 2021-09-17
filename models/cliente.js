const mongoose = require('../database/database');

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

module.exports = mongoose.model("Clientes", clienteSchema)