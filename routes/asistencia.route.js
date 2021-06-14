//defino controlador para el manejo de CRUD
const asistenciaCtrl = require('./../controllers/asistencia.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', asistenciaCtrl.getAsistencias);
router.post('/', asistenciaCtrl.createAsistencia);


//exportamos el modulo de rutas
module.exports = router;