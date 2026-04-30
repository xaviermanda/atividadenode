const categoriaModel = require("../models/categoriaModel");

exports.index = (req, res) => {
    const lista = categoriaModel.listar();
    
    // Pasta de view renomeada para plural
    res.render("categorias/index", { categorias: lista });
};