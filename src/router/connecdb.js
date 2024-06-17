const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME
})

const agregarUsuario = async(usuario) => {
    await connection.execute('INSERT INTO usuarios (nombre_usuario, email, contrasena_encriptada) VALUES (?, ?, ?)', [usuario.nombre_usuario, usuario.email, usuario.contrasena_encriptada])
}

const comprobarUsuario = async(usuario) => {
    await connection.execute('SELECT * from usuarios WHERE email = ? and contrasena_encriptada = ?', [usuario.email, usuario.contrasena_encriptada])
}
const mostrarUsuarios = async() => {
    const [usuarios] = await connection.execute('SELECT * FROM usuarios')
    return usuarios
}
const agregarLibros = async(libro) => {
    await connection.execute('INSERT INTO libros (nombre_libro, portada, descripcion) VALUES (?, ?, ?)', [libro.nombre_libro, libro.portada, libro.descripcion])
}
const mostrarLibros = async() => {
    const [libros] = await connection.execute('SELECT * FROM libros')
    return libros
}

const eliminarLibros = async(id) => {
    try{
        await connection.execute('DELETE FROM libros WHERE id = ?', [id])
        return true
    }catch(err){
        console.log('Error al eliminar el libro: ',err)
        return false
    }
}

const editarLibros = async(libro) => {
    try{
        await connection.execute('UPDATE libros SET nombre_libro = ?, portada = ?, descripcion = ?', [libro.nombre_libro, libro.portada, libro.descripcion])
        return true
    }catch(err){
        console.log('Error al editar el libro: ', err)
        return false
    }
}
module.exports = {
    agregarUsuario,
    comprobarUsuario,
    mostrarUsuarios,
    mostrarLibros,
    eliminarLibros,
    editarLibros,
    agregarLibros
}