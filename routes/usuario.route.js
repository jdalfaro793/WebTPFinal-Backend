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
router.post('/login', usuarioCtrl.loginUsuario);
router.get('/:username/:password', usuarioCtrl.getUsuarioByUserAndPassword);
router.get('/validar/:username',usuarioCtrl.getByUsername);
//exportacion del modulo de rutas
module.exports = router;
