const express = require('express')
const router = express.Router()
const {comprobarUsuario} = require('./connecdb')
const bcrypt = require('bcryptjs/dist/bcrypt')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', async(req, res) => {

        console.log('Entra por el post del Login')
        const {email, passwd} = req.body
        //const token = jwt.sign({ }, 'usuario', {})
        const passwd_crypt = await bcrypt.hash(passwd, 8)
        if(email === 'admin@gmail.com' && passwd === 'admin'){
            console.log('entra al if');
            res.redirect('/vista_administrador')
        }else{
            await comprobarUsuario({email: email, contrasena_encriptada: passwd_crypt})
            res.redirect('/welcome_usuario')
        }
        //return res.redirect('welcome_usuario/' + token)
})

module.exports = router