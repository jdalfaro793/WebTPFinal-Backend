const Asistencia = require("../models/asistencia");
const asistenciaCtrl = {};

asistenciaCtrl.getAsistencias = async (req, res) => {
  var asistencias = await Asistencia.find();
  res.json(asistencias);
};

asistenciaCtrl.createAsistencia = async (req, res) => {
  var asistencia = new Asistencia(req.body);
  try {
    console.log(req);
    await asistencia.save();
    res.json({
      status: "1",
      msg: "asistencia guardado.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = asistenciaCtrl;
