const express = require('express');
const routes = express.Router();

// READ
routes.get('/get', (req, res) => {
  req.app.get('db').query('SELECT * FROM articulos', (err, rows) => {
    if (err) return res.send(err);

    res.json(rows);
  });
});

// CREATE
routes.post('/post', (req, res) => {
  req.app.get('db').query('INSERT INTO articulos SET ?', [req.body], (err, rows) => {
    if (err) return res.send(err);

    res.json('Articulo insertado con éxito.');
  });
});

// UPDATE
routes.put('/put/:id', (req, res) => {
  req.app.get('db').query('UPDATE articulos SET ? WHERE idarticulos = ?', [req.body, req.params.id], (err, rows) => {
    if (err) return res.send(err);

    res.json('Articulo actualizado.');
  });
});

// DELETE
routes.delete('/delete/:id', (req, res) => {
  req.app.get('db').query('DELETE FROM articulos WHERE idarticulos = ?', [req.params.id], (err, rows) => {
    if (err) return res.send(err);

    res.json('Articulo eliminado con éxito.');
  });
});

module.exports = routes;
