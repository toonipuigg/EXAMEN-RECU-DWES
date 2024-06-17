const express = require('express')
const router = express.Router()
const {mostrarLibros, eliminarLibros, editarLibros} = require('./connecdb')

router.get('/', async(req, res) => {
    const libros = await mostrarLibros()
    res.render('catalogo', {libros: libros})
})

// router.post('/eliminar', async(req, res) => {
//     const {id_libros} = req.body
//     const eliminar = await eliminarLibros(id_libros)
//     if(eliminar){
//         res.redirect('/catalogo')
//     }
// })

router.post('/editar', (req, res) => {

})

module.exports = router