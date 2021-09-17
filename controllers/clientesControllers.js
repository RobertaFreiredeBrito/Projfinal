const req = require("express/lib/request");
const Clientes = require("../models/cliente")

const getAll = async(req, res) => {
    const cliente = await Clientes.find();
    if (cliente.length === 0){
      res.send({ message: "Lista vazia"  });
    };
    res.send({ cliente });
  };


const getById = async (req, res) => {
    const id = req.params.id

    try {
        const cliente = await Clientes.findById(id)
        if (!cliente) {
            res.status(404).json({message: "Cliente não encontrado"})
            return;
        }
        res.send({cliente})
    } catch (err) {
        res.status(500).send({error: err})
    }
}

const create = async (req, res) => {
    const { nome, idade} = req.body;

    if (!nome || !idade) {
        res.status(400).send({
            message:"Você não enviou todos os dados para o cadastro",
        });
        return;
}

const novoCliente = await new Clientes({
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

    if (!nome || !idade) {
        res.status(400).send({
        message:"Você não enviou todos os dados para o cadastro",
        });
        return;
} res.cliente.nome = nome
res.cliente.idade = idade

try {
    await res.cliente.save();
    res.send({ message: "Dados atualizados com sucesso!!!" });
  } catch (err) {
    return res.status(500).send({ error: "Erro na criação de cadastro" });
  }

}


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