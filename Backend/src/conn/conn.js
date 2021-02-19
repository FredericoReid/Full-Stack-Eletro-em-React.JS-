

const Sequelize = require('sequelize');

const sequelize = new Sequelize ('fseletro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!!")
}).catch(function(err){
    console.log("Erro ao realizar conexão!" + err)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}




