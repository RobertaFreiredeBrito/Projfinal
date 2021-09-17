const express = require('express');
const routes = express.Router();

const clientesControllers = require("../controllers/clientesControllers");
const clienteMiddleware = require("../middlewares/clienteMiddlewares");

routes.get("/clientes", clientesControllers.getAll);
routes.get("/clientes/:id", clienteMiddleware.validaID, clientesControllers.getById);
routes.post("/clientes", clientesControllers.create);
routes.put("/clientes/:id", clienteMiddleware.validaID, clientesControllers.update);
routes.delete("/clientes/:id", clienteMiddleware.validaID, clientesControllers.del);
routes.get("/clientes", clientesControllers.filter );

module.exports = routes