const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// // const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const pedidos = require('./models/Pedidos/Pedidos.js');
const mongoose = require('mongoose');
const { json } = require("body-parser");
const { response } = require("express");



// //Config
// //Template Engine
//     // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
//     // app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json)
app.use(cors())

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "fseletro"
// })

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

//Rotas
const novo_Pedido = mongoose.model('pedidos');
app.post("/processamento_pedidos", function(req, res){
    new novo_Pedido({
        nome_cliente: req.body.nome_cliente,
        endereco: req.body.endereco,
        email: req.body.email, 
        telefone: req.body.telefone,
        nome_produto: req.body.produto,
        valor_unitario: req.body.valor_unitario,
        quantidade: req.body.quantidade,
        valor_total: req.body.valor_total
    }).save().then(function(){
        res.redirect('http://localhost:3000/pedidos')
    }).catch(function(erro){
        res.send("Pedido não cadastrado     " + erro)
    })
});

app.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos"
    conn.query(sql, (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})

app.get('/pedidos', async (req, res) => {
    try {
        const result = await pedidos.find()
        return res.json(result)
    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem dos comentários!      ' + err })
    }
})

app.get('/quantidade_produtos', (req, res) => {
    const sql = "SELECT produtos.descricao, quantidade.quantidade FROM produtos INNER JOIN quantidade ON produtos.id=quantidade.id"
    conn.query(sql, (error, result) => {
        if (error) {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
        } else {
            res.status(201).json(result)
        }
    })
})


app.listen(5333);


