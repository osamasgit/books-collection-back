const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const urlUsers='https://api-books-ac3j.onrender.com/users'
const urlBooks='https://api-books-ac3j.onrender.com/books'

app.use(cors());


app.get('/users', async (req, res) => {
    try{
        const response = await axios.get(urlUsers)
        const users = response.data
        const userInfo = users.map(user => {
            const {nombre, apellidos, correo, coleccion, wishlist} = user
            const info = {
                nombre,
                apellidos,
                correo,
                coleccion,
                wishlist
            }
            return info
        })
        res.json(userInfo)
    }catch(error){
        res.status(404).json({error: 'Usuarios no encontrada'})
    }
})

app.get('/books', async (req, res) => {
    try{
        const response = await axios.get(urlBooks)
        const books = response.data
        const bookInfo = books.map(book => {
            const {titulo, autor, fechaPublicacion, imagen} = book
            const info = {
                titulo,
                autor,
                fechaPublicacion,
                imagen
            }
            return info
        })
        res.json(bookInfo)
    }catch(error){
        res.status(404).json({error: 'Usuarios no encontrada'})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})