//Inclusión de librería
var express = require('express');
var mongoose = require("mongoose");
var app = express();
//Conexión a la BD
mongoose.connect("mongodb://localhost/ejercicio2")
//Mensaje de error en caso de que ya exista
mongoose.connection.on("error", function(e){
  console.error(e);
});
//Mensaje de conexión existosa
mongoose.connection.on("open", function(e){
  console.log('Conexión exitosa a la BD');
});
//Declaración de los schemas
/* var Carrera_Schema=mongoose.Schema({
  nombre:String,
  descripcion:String,
  activo:{
    type:Boolean,
    default:false,
  },
  creado_en:{
    type:Date,
    default:Date.now,
  },
  actualizado_en:{
    type:Date,
    default:Date.now
  },
}) */
var Usuarios_Schema=mongoose.Schema({
  Nombre:String,
  Apellidos:String,
  Fec_nacimiento:Date,
  Email:String,
  Estado:{
    type:Boolean,
    default:true,
  },
  Fec_creacion:{
    type:Date,
    default:Date.now,
  },
  Fec_modificacion:{
    type:Date,
    default:Date.now
  },
});
var Entrada_Schema=mongoose.Schema({
  Titulo:String,
  Descripcion:String,
  Detalle:String,
  Estado:{
    type:Boolean,
    default:true,
  },
  FK_usuario:{
    type: mongoose.Schema.ObjectId, ref:"Usuarios"
  },
  Fec_creacion:{
    type:Date,
    default:Date.now,
  },
  Fec_modificacion:{
    type:Date,
    default:Date.now
  },
});
//Creación del modelo
/* var model_carrera=mongoose.model("carreras", Carrera_Schema); */
var model_usuarios=mongoose.model("Usuarios", Usuarios_Schema);
var model_entradas=mongoose.model("Entradas", Entrada_Schema);
//Se inserta un objeto utilizando el model
model_usuarios.create({Nombre:"César", Apellidos: "Badilla Marín", Fec_nacimiento: 1998-09-28, Email: "cesarbadilla98@hotmail.com"},function(err){
  if(err) return console.error(err)
});
model_entradas.create({Titulo:"Ejercicio 2", Descripcion: "Elaboración del segundo ejercicio", Detalle: "Segundo Ejer", FK_usuario: "615bfd88b26b1ac6a9b59e34"},function(err){
  if(err) return console.error(err)
});
app.listen(3000, function() {
    console.log('Servidor funcionando en http://localhost:3000');
  });
  app.get('/', function(req, res) {
    res.json({ status: "ok" });
  });