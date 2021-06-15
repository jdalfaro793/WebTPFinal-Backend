const express = require("express");
const router = express.Router();
//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
// definiendo rutas
router.get('/:id', usuarioCtrl.getUsuario);
router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.addUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);
router.put('/:id', usuarioCtrl.editUsuario);
//exportacion del modulo de rutas
module.exports = router;
