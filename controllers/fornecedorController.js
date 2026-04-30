const fornecedorModel = require("../models/fornecedorModel");

function index(req, res) {
    const fornecedores = fornecedorModel.listar();
    res.render("fornecedores/index", { fornecedores });
}

module.exports = { index };