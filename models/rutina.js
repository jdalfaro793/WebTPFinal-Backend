const mongoose = require("mongoose");
const {Schema} = mongoose;
const Ejercicio = require('./ejercicio');

const RutinaSchema = new Schema({

rut_descripcion: {type: String, required: true},

//rut_ejercicios: [{type:Ejercicio.schema}] // objeto de tipo array de ejercicios se crea en el momento de la carga de la rutina
rut_ejercicios: [{type: Schema.Types.ObjectId,ref:Ejercicio,required:true}] 
//alu_plan:{type: Schema.Types.ObjectId, ref:Plan, required:true}  //objeto de tipo plan , debe estar creado previamente


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RutinaSchema || mongoose.model('Rutina', RutinaSchema);