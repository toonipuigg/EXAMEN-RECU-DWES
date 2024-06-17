const express = require('express')
const router = express.Router()
const {editarLibros} = require('./connecdb')

router.get('/', (req, res) => {
    res.render('update_libro')
})

router.post('/', async(req, res) => {
    const {nombre_libro, portada, descripcion} = req.body
    await editarLibros({nombre_libro: nombre_libro, portada: portada, descripcion: descripcion})
    res.redirect('/catalogo')
})

module.exports = router