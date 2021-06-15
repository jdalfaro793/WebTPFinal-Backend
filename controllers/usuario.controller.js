const Usuario = require("./../models/usuario");
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  var usuarios = await Usuario.find();
  res.json(usuarios);
}

usuarioCtrl.addUsuario= async (req, res) => {
  var usuario = new Usuario(req.body);
  try {
      await usuario.save();
      res.json({
          'status': '1',
          'msg': 'Usuario guardado.'
      })
  } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
}

usuarioCtrl.editUsuario = async (req, res) => {
  const vusuario = new Usuario(req.body);
  try {
      await Usuario.updateOne({_id: req.body._id}, vusuario);
      res.json({
          'status': '1',
          'msg': 'Usuario updated'
      })
  } catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
  }
}

usuarioCtrl.deleteUsuario = async (req, res)=>{
try { 
  await Usuario.deleteOne({_id: req.params.id});
  res.json({
      status: '1',
      msg: 'Usuario removed'
})
} catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
}
}

module.exports = usuarioCtrl;