const express = require('express')
const router = express.Router()
const {mostrarUsuarios} = require('./connecdb')

router.get('/', async (req, res) => {
    const usuarios = await mostrarUsuarios()
    res.render('vista_usuarios', {usuarios: usuarios})
})

module.exports = router