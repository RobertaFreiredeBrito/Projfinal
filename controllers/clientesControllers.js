const req = require("express/lib/request");
const Cliente = require("../controllers/clientesControllers")

const getAll = async (req, res) => {
    try {
        const clientes = await Cliente.find()
        return res.send({clientes})
    } catch (err) {
        res.status(500).send({error: err})
    }
};

const getById = async (req, res) => {
    const id = req.params.id

    try {
        const cliente = await Cliente.findById(id)
        if (!cliente) {
            res.status(404).json({message: "Cliente não encontrado"})
            return;
        }
    } catch (err) {
        res.status(500).send({error: err})
    }
}

const create = async (req, res) => {
    const { nome, idade} = req.body;

    if (!nome || idade) {
        res.status(400).send({
            message:"Você não enviou todos os dados para o cadastro",
        });
        return;
}

const novoCliente = await new Cliente({
    nome,
    idade,
});

try {
    await novoCliente.save();
    return res
    .status(201)
    .send({ message: "Cadastro criado com sucesso", novoCliente});
}catch (err) {
    res.status(500).send({error: err})
    }
};

const update = async (req, res) => {
    const {nome, idade} = req.body;

    if (!nome || idade) {
        res.status(400).send({
        message:"Você não enviou todos os dados para o cadastro",
        });
        return;
}
}

res.cliente.nome = nome
res.cliente.idade = idade

const del = async (req, res) => {
    try {
        await res.cliente.remove()
        return res.send({message: "Cadastro removido com sucesso"})
    }catch (err) {
        res.status(500).send({error:err})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del
};