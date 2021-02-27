const mongoose = require('mongoose');

const conn = () => {
    // mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/fseletro', { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
        console.log("Conectado!")
    }).catch((err) => {
        console.log('Não Conectado '+ err)
    });
}

module.exports = conn();