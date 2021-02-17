const express = require("express");
const app = express();
// const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Pedidos = require('./models/Pedidos.js/Pedidos.js');


//Config
//Template Engine
    // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    // app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

//Conexão Mysql
// const connection = require("../src/conn/conn.js");


//Rotas
app.post('/processamento_pedidos', function(req, res){
    // res.send("Nome " + req.body.nome_cliente)
    Pedidos.create({
        nome_cliente: req.body.nome_cliente,
        endereco: req.body.endereco,
        email: req.body.email, 
        telefone: req.body.telefone,
        nome_produto: req.body.nome_produto,
    })
})



// app.listen(3005, function(){
//     console.log("Servidor rodando na url http://localhost:3005");
// });

app.listen(3005);