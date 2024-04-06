const mongoose = require('mongoose')

const IngredienteSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxLength: 50
    },
    descricao: String,
})

const Ingrediente = mongoose.model('Ingrediente', IngredienteSchema)

module.exports = {Ingrediente, IngredienteSchema}