const Cuota = require("../models/cuota");
const cuotaCtrl = {};

cuotaCtrl.getCuotas = async (req, res) => {
  var cuotas = await Cuota.find();
  res.json(cuotas);
};

cuotaCtrl.createCuota = async (req, res) => {
  var cuota = new Cuota(req.body);
  try {
    console.log(req);
    await cuota.save();
    res.json({
      status: "1",
      msg: "Cuota guardada.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = cuotaCtrl;