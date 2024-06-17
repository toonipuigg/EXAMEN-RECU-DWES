const express = require('express')
const router = express.Router()
const {eliminarLibros} = require('./connecdb')

router.post('/', async (req, res) => {
    const {id_libro} = req.body
    const eliminar = await eliminarLibros(id_libro)
    if(eliminar){
        res.redirect('/catalogo')
    }
})

module.exports = router