// Cargamos la libreria express que nos permite hacer un servidor web
const express = require('express');

const app = express();

app.use(express.static("public"));

let cont = 0;

app.get('/api/getRandom', function (req, res) {

    res.send("#" + Math.round(Math.random()));
    console.log(cont++);

    }
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log('Escuchando en http://localhost:'+ PORT);

});