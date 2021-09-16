const mongoose = require("mongoose")
const Cliente = require("../Cliente");

const validaID = async (req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).send({error: "Id Inválido"});
        return;
    }

    try {
        const cliente = await Cliente.findById(id);
        if(!cliente){
            return res.status(404).send({message: "Cliente não cadastrado"});
        }
        res.cliente = cliente
    } catch (err) {
        return res.status(500).send({ error: err});
    }

    next();
}

module.exports = { validaID };