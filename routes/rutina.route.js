//defino controlador para el manejo de CRUD
const rutinaCtrl = require('./../controllers/rutina.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', rutinaCtrl.getRutina);
router.get('/', rutinaCtrl.getRutinas);
router.post('/', rutinaCtrl.addRutina);
router.delete('/:id', rutinaCtrl.deleteRutina);
router.put('/:id', rutinaCtrl.editRutina);

//exportamos el modulo de rutas
module.exports = router;