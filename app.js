const express = require("express");
const path = require("path");

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Arquivos Estáticos (CSS, Imagens, JS do navegador)
app.use(express.static(path.join(__dirname, "public")));

// Middlewares para formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adicione esta linha por segurança

// Importação das ROTAS
const categoriaRoutes = require("./routes/categoriaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");

// Uso das ROTAS
app.use("/categorias", categoriaRoutes);
app.use("/clientes", clienteRoutes);
app.use("/fornecedores", fornecedorRoutes);

// Rota HOME
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "Página Inicial",
  });
});

// SERVER (Pronto para o Render e Local)
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});