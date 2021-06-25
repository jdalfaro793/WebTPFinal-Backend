const Cuota = require("../models/cuota");
const Alumno = require('../models/alumno')
const cuotaCtrl = {};

cuotaCtrl.getAllCuotas = async (req,res) =>{
  const cuotas = await Cuota.find();
  res.json(cuotas);
}
cuotaCtrl.getCuotas = async (req, res) => {
  let criterios = {}

  //búsqueda por medio de pago, en modo regex
  if(req.query.modo_pago != '') 
    criterios.modo_pago = {$regex : req.query.modo_pago, $options: 'i'}
  //búsqueda por el monto menor o igual al ingresado
  if(req.query.monto != '0')
    criterios.monto = {$lte: Number(req.query.monto) };


  /*
  ----------- Búsquedas por APellido o Nombre de un almuno
  */
  if(req.query.apellido != '' || req.query.nombre != ''){
    let queryAlumno = {}; //instancia de query para alumno

    //asinganción de query correspondiente
    if(req.query.apellido != '')  
      queryAlumno.apellido = {$regex : req.query.apellido, $options: 'i'};
    if(req.query.nombre != '')
      queryAlumno.nombre = {$regex : req.query.nombre, $options: 'i'}; 

    let alumnos = await Alumno.find(queryAlumno);
    let idAlumnos = []; //instancia de un array para almacenar id
    alumnos.forEach(element => {  //añado los _id de los alumnos encontrados a un array
      idAlumnos.push(element._id)
    })
    //console.log(idAlumnos)
    criterios.alumno = idAlumnos; //agrego el ide de los alumnos encontrados al query principal
  }

  //guardar resultado de la búsqueda
  let cuotas = await Cuota.find(criterios).populate('alumno');
  res.json(cuotas);
}

cuotaCtrl.getCuotasFilter = async (req, res) => {
  let criterios = { $or: [{ modo_pago: {$regex : 'efec', $options: 'i'} }, { monto: {$regex : 10} }] }
  let cuotas = await Cuota.find(criterios).populate('alumno');
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

cuotaCtrl.getCuotaByAlumno = async (req, res) => {

  try {
    const cuotasEncontradas = await Cuota.find({alumno : req.params.id}).populate("alumno");
    res.json(cuotasEncontradas);
  } catch (error) {
    res.json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
}

module.exports = cuotaCtrl;
