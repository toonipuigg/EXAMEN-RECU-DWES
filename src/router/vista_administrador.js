const express = require('express')
const router = express.Router()
const {mostrarLibros} = require('./connecdb')

router.get('/', (req, res) => {
    res.render('vista_administrador')
})


module.exports = router