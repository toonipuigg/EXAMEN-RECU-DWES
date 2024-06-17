const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {agregarUsuario} = require('./connecdb')

router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async(req, res) => {

        console.log('Entra al post del register')
        //const token = jwt.sign({ }, 'usuario',{
    
        //})
        const {nombre_usuario, email, passwd} = req.body
        const passwd_crypt = await bcrypt.hash(passwd, 8)
        await agregarUsuario({nombre_usuario: nombre_usuario, email: email, contrasena_encriptada: passwd_crypt})
        res.redirect('/welcome_usuario')
        //return res.redirect('welcome_usuario/' + token)

})

module.exports = router