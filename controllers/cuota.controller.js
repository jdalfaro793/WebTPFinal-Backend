const Cuota = require("../models/cuota");
const Alumno = require('../models/alumno')
const cuotaCtrl = {};

cuotaCtrl.getCuotas = async (req, res) => {
  //let criterios = { $or: [{ modo_pago: {$regex : 'merc', $options: 'i'} }, { monto: {$gt:2000}}] };

  let criterios = {}
  let criteriosAlu = {}

  //variables para hacer pruebas
  modo_pago = '';
  monto = '';

  apellido = '';
  nombre = '';

  //búsqueda por medio de pago, en modo regex
  if(modo_pago != '') 
    criterios.modo_pago = {$regex : modo_pago, $options: 'i'}
  //búsqueda por el monto menor o igual al ingresado
  if(monto != '')
    criterios.monto = {$lte: monto };

  /*
  ----------- Búsquedas por APellido o Nombre de un almuno
  */
  if(apellido != '' || nombre != ''){
    let queryAlumno = {}; //instancia de query para alumno

    //asinganción de query correspondiente
    if(apellido != '')  
      queryAlumno.apellido = {$regex : apellido, $options: 'i'};
    if(nombre != '')
      queryAlumno.nombre = {$regex : nombre, $options: 'i'}; 

    let alumnos = await Alumno.find(queryAlumno);
    //console.log(alumnos);
    let idAlumnos = []; //instancia de un array para almacenar id
    alumnos.forEach(element => {  //añado los _id de los alumnos encontrados a un array
      idAlumnos.push(element._id)
    })
    //console.log(idAlumnos)
    criterios.alumno = idAlumnos; //agrego el ide de los alumnos encontrados al query principal
  }

  /*
  if(apellido != '')
    criteriosAlu.apellido = {$regex : apellido, $options: 'i'};
  if(nombre != '')
    criteriosAlu.nombre = {$regex : nombre, $options: 'i'}; 

  //indico que me realice la búsqueda por las coincidencias de usuarios
  if(criteriosAlu.apellido != undefined || criteriosAlu.nombre != undefined){
    let alumnos = await Alumno.find(criteriosAlu);
    //console.log(alumnos);
    let idAlumnos = [];
    alumnos.forEach(element => {
      idAlumnos.push(element._id)
    })
    //console.log(idAlumnos)
    criterios.alumno = idAlumnos;
  }
  */
  
  console.log(criterios)

  //guardar resultado de la búsqueda
  let cuotas = await Cuota.find(criterios).populate('alumno');
  res.json(cuotas);
}

cuotaCtrl.getCuotasFilter = async (req, res) => {
  let criterios = { $or: [{ modo_pago: {$regex : 'efec', $options: 'i'} }, { monto: {$regex : 10} }] }
  /*
  let nombre = 'mar'

  let query = { $or: 
    [ 
      {'alumno.nombre': {$regex : vari, $options: 'i'}}, 
      {'alumno.apellido': {$regex : vari, $options: 'i'}} 
    ] 
  }


  let cuotas = await Cuota.find(criterios).populate('alumno').exec();
  let cu = await Cuota.find(query).populate('alumno') */
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

module.exports = cuotaCtrl;
