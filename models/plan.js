const mongoose = require("mongoose");
const {Schema} = mongoose;
const Rutina    = require('./rutina');

const PlanSchema = new Schema({

plan_tipo: {type: String, required: true},
plan_descripcion: {type:String, required:true},

plan_rutina:{type: Schema.Types.ObjectId, ref:Rutina, required:true},  //objeto de  tipo rutina, debe estar creado previamente

plan_monto: {type: Number, required:true},


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.PlanSchema || mongoose.model('Plan', PlanSchema);