const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/')));

const indexrouter = require('./router/index')
const registerrouter = require('./router/register')
const loginrouter = require('./router/login')
const welcomerouter = require('./router/welcome_usuario')
const vista_administradorrouter = require('./router/vista_administrador')
const catalogorouter = require('./router/catalogo')
const add_librosrouter = require('./router/add_libros')
const delete_librosrouter = require('./router/delete_libro')
const update_librosrouter = require('./router/update_libro')
const vista_librosrouter = require('./router/vista_libros')
const vista_usuariosrouter = require('./router/vista_usuarios')

app.use('/', indexrouter)
app.use('/register', registerrouter)
app.use('/login', loginrouter)
app.use('/welcome_usuario', welcomerouter)
app.use('/vista_administrador', vista_administradorrouter)
app.use('/catalogo', catalogorouter)
app.use('/add_libros', add_librosrouter)
app.use('/delete_libro', delete_librosrouter)
app.use('/update_libro', update_librosrouter)
app.use('/vista_administrador/vista_usuarios', vista_usuariosrouter)
app.use('/vista_administrador/vista_libros', vista_librosrouter)

app.use((req, res, next) => {
    res.status(404).send('Error 404: Recurso no encontrado')
})

app.listen(port)
console.log(`Servidor escuchando en el puerto ${port}`);