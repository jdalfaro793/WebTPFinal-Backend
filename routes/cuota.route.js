//defino controlador para el manejo de CRUD
const cuotaCtrl = require('./../controllers/cuota.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', cuotaCtrl.getCuotas);
router.post('/', cuotaCtrl.createCuota);


//exportamos el modulo de rutas
module.exports = router;