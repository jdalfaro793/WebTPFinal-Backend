const Usuario = require("./../models/usuario");
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  var usuarios = await Usuario.find();
  res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res) => {
  //en req.body se espera que vengan los datos de usuario a crear
  const usuario = new Usuario(req.body);
  try {
    await usuario.save();
    res.json({
      status: "1",
      msg: "Usuario guardado.",

    });
  } catch (error) {
    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
usuarioCtrl.loginUsuario = async (req, res) => {
  //en req.body se espera que vengan las credenciales de login
  //defino los criterios de busqueda en base al username y password recibidos
  const criteria = {
    usu_username: req.body.usu_username,
    usu_password: req.body.usu_password,
  };
  //el método findOne retorna un objeto que cumpla con los criterios de busqueda
  Usuario.findOne(criteria, function (err, user) {
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    if (err) {
      res.json({
        status: 0,
        msg: "error",
      });
    }
    if (!user) {
      res.json({
        status: 0,
        msg: "not found",
      });
    } else {
      res.json({
        status: 1,
        msg: "success",
        username: user.usu_username,
        rol: user.usu_rol,
      });
    }
  });
};
//exportacion del modulo controlador
module.exports = usuarioCtrl;
