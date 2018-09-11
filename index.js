// Cargamos la libreria express
const express = require('express');

const app = express();
let cont = 0;

app.get('/', function (req, res) {

    res.send("#" + Math.round(Math.random()));
    console.log(cont++);

    }
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Escuchando en http://localhost:'+ PORT);

});