const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "../data/cliente.json");

function lerDados() {
    const dados = fs.readFileSync(caminho, "utf-8");
    return JSON.parse(dados);
}

function listar() {
    return lerDados();
}

module.exports = {
    listar
};