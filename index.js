var express = require('express');
var app = express();
app.listen(3000, function() {
    console.log('Servidor funcionando en http://localhost:3000');
  });
  app.get('/', function(req, res) {
    res.json({ status: "ok" });
  });