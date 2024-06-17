const express = require('express')
const router = express.Router()
const {agregarLibros} = require('./connecdb')
router.get('/', (req, res) => {
    res.render('add_libros')
})

router.post('/', async(req, res) => {
    const {nombre_libro, portada, descripcion} = req.body
    await agregarLibros({nombre_libro: nombre_libro, portada: portada, descripcion: descripcion})
    res.redirect('/catalogo')
})

module.exports = router