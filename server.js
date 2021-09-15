require("dotenv").config();
const express = require("express");
const connectToDB = require("./models/database/database");
const routes = require (".models/routes/routes")

const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => console.info(`Servidor rodando em http://localhost:${port}`)
)