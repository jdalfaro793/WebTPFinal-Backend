const Entrenador = require("../models/entrenador");
const entrenadorCtrl = {};

entrenadorCtrl.getEntrenadores = async (req, res) => {
  var entrenadores = await Entrenador.find();
  res.json(entrenadores);
};

entrenadorCtrl.createEntrenador = async (req, res) => {
  var entrenador = new Entrenador(req.body);
  try {
    console.log(req);
    await entrenador.save();
    res.json({
      status: "1",
      msg: "Entrenador guardado.",
    });
  } catch (error) {
    console.log("Error:");
    console.log(error);

    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = entrenadorCtrl;
