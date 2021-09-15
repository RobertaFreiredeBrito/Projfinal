const express = require('express');
const routes = express.Router();

const ClienteController = require("../controllers/ClienteController");
const ClienteMiddleware = require("../middleware/ClienteMiddleware");

routes.get("/clientes", ClienteController.getAll);
routes.get("/cliente/:id", ClienteMiddleware.validaID, ClienteController.getById);
routes.post("/clientes", ClienteController.create);
routes.put("/clientes/id", ClienteMiddleware.validaID, ClienteController.update);
routes.delete("/clientes/:id", ClienteMiddleware.validaID, ClienteController.del);

module.exports = routes