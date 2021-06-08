const Rutina = require('../models/rutina');
const rutinaCtrl = {}



rutinaCtrl.getRutinas = async (req, res) => {
 var planes = await Rutina.find().populate("rut_ejercicios"); 
 res.json(planes);
}



rutinaCtrl.createRutina = async (req, res) => {
 var plan = new Rutina(req.body);
 try {
 console.log(req);
 await plan.save();
 res.json({
        'status': '1',
        'msg': 'rutina guardada.'
        })
 } catch (error) {
       console.log(error);

 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})

}
}




module.exports = rutinaCtrl;