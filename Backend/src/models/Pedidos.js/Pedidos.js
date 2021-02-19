const db = require('../../conn/conn.js');

const Pedidos = db.sequelize.define('pedidos', {
    nome_cliente: {
        type: db.Sequelize.STRING
    },

    endereco: {
        type: db.Sequelize.STRING
    },

    email: {
        type: db.Sequelize.STRING
    },

    telefone: {
        type: db.Sequelize.STRING
    },

    nome_produto: {
        type: db.Sequelize.STRING
    },

    valor_unitario: {
        type: db.Sequelize.DOUBLE
    },

    quantidade: {
        type: db.Sequelize.DOUBLE
    },

    valor_total: {
        type: db.Sequelize.DOUBLE
    }, 

})

module.exports = Pedidos;