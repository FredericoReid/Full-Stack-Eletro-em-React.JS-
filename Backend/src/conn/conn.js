// var http = require('http');

// http.createServer(function(req, res){
//     res.end("Olá");

// }).listen(3005);

// console.log("Servidor conectado!");



const Sequelize = require('sequelize')
const sequelize = new Sequelize ('fseletro', 'root', '', {
    host: "localhost",
    dialect: "mysql"
} );

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar! " + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize    
}