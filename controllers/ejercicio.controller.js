const Ejercicio = require("../models/ejercicio");
const ejercicioCtrl = {};

ejercicioCtrl.getEjercicios = async (req, res) => {
  var ejercicios = await Ejercicio.find();
  res.json(ejercicios);
};

ejercicioCtrl.createEjercicio = async (req, res) => {
  var ejercicio = new Ejercicio(req.body);
  try {
    console.log(req);
    await ejercicio.save();
    res.json({
      status: "1",
      msg: "Ejercicio guardado.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = ejercicioCtrl;
