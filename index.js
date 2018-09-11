// Cargamos la libreria express
const express = require('express');

const app = express();
let cont = 0;

app.get('/', function (req, res) {

    res.send("#" + Math.round(Math.random()));
    console.log(cont++);

    }
);

app.listen(8080, function () {
    console.log('Escuchando en http://localhost:8080')

});