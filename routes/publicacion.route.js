//defino controlador para el manejo de CRUD
const publicacionCtrl = require('./../controllers/publicacion.controller');
const authCtrl = require('../controllers/auth.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/:id', publicacionCtrl.getPublicacion);
router.get('/', publicacionCtrl.getPublicaciones);
router.post('/', authCtrl.verifyToken, publicacionCtrl.addPublicacion);
router.delete('/:id', authCtrl.verifyToken, publicacionCtrl.deletePublicacion);
router.put('/:id', authCtrl.verifyToken, publicacionCtrl.editPublicacion);

//exportamos el modulo de rutas
module.exports = router;