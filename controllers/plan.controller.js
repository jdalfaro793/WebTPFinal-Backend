const Plan = require('../models/plan');
const planCtrl = {}



planCtrl.getPlanes = async (req, res) => {
 var planes = await Plan.find();
 res.json(planes);
}



planCtrl.createPlan = async (req, res) => {
 var plan = new Plan(req.body);
 try {
 console.log(req);
 await plan.save();
 res.json({
        'status': '1',
        'msg': 'plan guardado.'
        })
 } catch (error) {
       console.log(error);

 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})

}



}




module.exports = planCtrl;