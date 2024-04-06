/*const express = require('express')
const Produto = require('../db/model/produto')
const router = express.Router()


router.get('/', function (req, res) {
    res.json({})
})
router.get('/produtos', async function (req, res) {
    res.json( await Produto.find())
})
router.post('/produtos', async function (req, res) {
    res.json(await Produto.create(req.body))
})
router.get('/produtos', async function (req, res) {
    res.json( await Produto.find())
})
router.get('/produtos/:id', async function (req, res) {
    res.json( await Produto.findById(req.params.id))
})
router.delete('/produtos/:id', async function (req, res) {
    res.json( await Produto.findByIdAndDelete(req.params.id))
})

router.put('/produtos/:id', async function (req, res) {
    res.json( await Produto.findByIdAndDelete(req.params.id))
})
module.exports = router*/



const express = require('express')
const ClienteController = require('../controllers/ClienteController')
const ComandaController = require('../controllers/ComandaController')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../db/model/produto')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

// Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

// Comandas
router.get('/comandas', (req, res) => ComandaController.getAll(req, res))
router.post('/comandas', (req, res) => ComandaController.create(req, res))
router.get('/comandas/:id', (req, res) => ComandaController.get(req, res))
router.put('/comandas/:id', (req, res) => ComandaController.update(req, res))
router.delete('/comandas/:id', (req, res) => ComandaController.delete(req, res))

// Clientes
router.get('/clientes', (req, res) => ClienteController.getAll(req, res))
router.post('/clientes', (req, res) => ClienteController.create(req, res))
router.get('/clientes/:id', (req, res) => ClienteController.get(req, res))
router.put('/clientes/:id', (req, res) => ClienteController.update(req, res))
router.delete('/clientes/:id', (req, res) => ClienteController.delete(req, res))

module.exports = router