const mongoose  = require('mongoose');
const db = require('../../conn/conn');

const Pedidos = mongoose.Schema({
    nome_cliente: {
        type: String
    },

    endereco: {
        type: String
    },

    email: {
        type: String
    },

    telefone: {
        type: String
    },

    nome_produto: {
        type: String
    },

    valor_unitario: {
        type: Number
    },

    quantidade: {
        type: Number
    },

    valor_total: {
        type: Number
    }, 

})

// mongoose.model('pedidos', Pedidos)

const Pedidos1 = mongoose.model('pedidos', Pedidos);

module.exports = Pedidos1;