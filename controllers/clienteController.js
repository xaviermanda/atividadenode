const clienteModel = require("../models/clienteModel");

function index(req, res) {
    const clientes = clienteModel.listar();
    res.render("clientes/index", { clientes });
}

module.exports = { index };