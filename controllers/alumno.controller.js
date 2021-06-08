const Alumno = require('../models/alumno');
const alumnoCtrl = {}



alumnoCtrl.getAlumnos = async (req, res) => {
 var alumnos = await Alumno.find();
 res.json(alumnos);
}






alumnoCtrl.createAlumno = async (req, res) => {
 var alumno = new Alumno(req.body);
 try {
 console.log(req);
 await alumno.save();
 res.json({
        'status': '1',
        'msg': 'Sector guardado.'
        })
 } catch (error) {
       console.log(error);

 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})

}
}




module.exports = alumnoCtrl;