const express = require("express");
const app = express();
const conn = require("./conn/conn");
// // const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Pedidos = require('./models/Pedidos.js/Pedidos.js');


// //Config
// //Template Engine
//     // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
//     // app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json)

//Rotas
app.post("/processamento_pedidos", function(req, res){
    Pedidos.create({
        nome_cliente: req.body.nome_cliente,
        endereco: req.body.endereco,
        email: req.body.email, 
        telefone: req.body.telefone,
        nome_produto: req.body.produto,
        valor_unitario: req.body.valor_unitario,
        quantidade: req.body.quantidade,
        valor_total: req.body.valor_total
    }).then(function(){
        res.redirect('http://localhost:3000/pedidos')
    }).catch(function(erro){
        res.send("Pedido não cadastrado     " + erro)
    })
});

app.listen(5333);