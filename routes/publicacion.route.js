//defino controlador para el manejo de CRUD
const publicacionCtrl = require('./../controllers/publicacion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', publicacionCtrl.getPublicacion);
router.get('/', publicacionCtrl.getPublicaciones);
router.post('/', publicacionCtrl.addPublicacion);
router.delete('/:id', publicacionCtrl.deletePublicacion);
router.put('/:id', publicacionCtrl.editPublicacion);

//exportamos el modulo de rutas
module.exports = router;