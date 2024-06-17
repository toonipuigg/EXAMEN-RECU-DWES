const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {mostrarUsuarios} = require('./connecdb')

router.get('/', async(req, res) => {
    const usuarios = await mostrarUsuarios()
    res.render('welcome_usuario', {usuarios: usuarios})
})

module.exports = router