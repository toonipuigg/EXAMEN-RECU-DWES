const express = require('express')
const router = express.Router()
const {mostrarLibros} = require('./connecdb')

router.get('/', async(req, res) => {
    const libros = await mostrarLibros()
    res.render('vista_libros', {libros: libros})
})

module.exports = router