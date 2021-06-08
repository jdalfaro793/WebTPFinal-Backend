const mongoose = require('mongoose');
const {Schema} = mongoose;
const Plan    = require('./plan');

const AlumnoSchema = new Schema({

alu_apellido: {type: String, required: true},
alu_nombre: {type: String, required: true},
alu_dni: {type: String, required: true},
alu_fecha_nacimiento: {type: String, required: true},
alu_celular: {type: String, required: true},
alu_domicilio: {type: String, required: true},
alu_email: {type: String, required: true},
alu_fechaInicio: {type: String, required: true},

alu_plan:{type: Schema.Types.ObjectId, ref:Plan, required:true}  //objeto de tipo plan , debe estar creado previamente

//plan_cuotas: [{type:Ejercicio.schema}] 


});

module.exports = mongoose.models.AlumnoSchema || mongoose.model('Alumno', AlumnoSchema);