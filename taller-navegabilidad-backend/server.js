const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Karen0420',
    database: 'db_navegabilidad'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Conectado exitosamente a la base de datos MySQL: db_navegabilidad");
});

app.get('/productos', (req, res) => {
    let query = "SELECT * FROM productos";
    db.query(query, (err, resultados) => {
        if (err) throw err;
        res.json(resultados);
    });
});

app.post('/productos', (req, res) => {
    let { nombre, categoria, precio, cantidad } = req.body;
    let query = "INSERT INTO productos (nombre, categoria, precio, cantidad) VALUES (?, ?, ?, ?)";
    db.query(query, [nombre, categoria, precio, cantidad], (err, resultado) => {
        if (err) throw err;
        res.json({ mensaje: "Producto registrado exitosamente en MySQL" });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});