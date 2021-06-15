const Cuota = require("../models/cuota");
const cuotaCtrl = {};

cuotaCtrl.getCuotas = async (req, res) => {
  var cuotas = await Cuota.find();
  res.json(cuotas);
}

cuotaCtrl.addCuota = async (req, res) => {
  var cuota = new Cuota(req.body);
  try {
      await cuota.save();
      res.json({
          'status': '1',
          'msg': 'Cuota guardada.'
      })
  } catch (error) {
      res.json({
          'status': '0',
          'msg': 'Error procesando operacion.'
      })
  }
}

cuotaCtrl.getCuota = async (req, res) => {
  const cuota = await Cuota.findById(req.params.id);
  res.json(cuota);
}

cuotaCtrl.editCuota = async (req, res) => {
  const vcuota = new Cuota(req.body);
  try {
      await Cuota.updateOne({_id: req.body._id}, vcuota);
      res.json({
          'status': '1',
          'msg': 'Cuota updated'
      })
  } catch (error) {
  res.json({
      'status': '0',
      'msg': 'Error procesando la operacion'
  })
  }
}

cuotaCtrl.deleteCuota = async (req, res)=>{
  try {
      await Cuota.deleteOne({_id: req.params.id});
      res.json({
          status: '1',
          msg: 'Cuota removed'
    })
  } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}

module.exports = cuotaCtrl;
