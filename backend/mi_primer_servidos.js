    const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡hola mundo!');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: 'Hola, mundo en formato JSON!' });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});