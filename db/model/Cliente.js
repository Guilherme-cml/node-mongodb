const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String, 
        required: true,
        default: 'Teste'
    },
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente