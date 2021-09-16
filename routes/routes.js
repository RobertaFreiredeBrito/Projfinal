const express = require('express');
const routes = express.Router();

const ClienteController = require("../controllers/clientesController");
const ClienteMiddleware = require("../middleware/clienteMiddleware");

routes.get("/clientes", clientesController.getAll);
routes.get("/cliente/:id", clienteMiddleware.validaID, clientesController.getById);
routes.post("/clientes", clientesController.create);
routes.put("/clientes/id", clienteMiddleware.validaID, clientesController.update);
routes.delete("/clientes/:id", clienteMiddleware.validaID, clientesController.del);

module.exports = routes