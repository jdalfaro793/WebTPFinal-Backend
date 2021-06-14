const mongoose = require('mongoose');
const plan    = require('./plan');
const rutinaPersonalizada = require('./rutinaPersonalizada');
const usuario = require('./usuario');

const {Schema} = mongoose;

const AlumnoSchema = new Schema({

alu_apellido:           {type: String, required: true},
alu_nombre:             {type: String, required: true},
alu_dni:                {type: String, required: true},
alu_fecha_nacimiento:   {type: Date, required: true},
alu_celular:            {type: String, required: true},
alu_domicilio:          {type: String, required: true},
alu_email:              {type: String, required: true},
alu_fechaInicio:        {type: Date, required: true},

alu_plan:               {type: Schema.Types.ObjectId, ref:plan, required:true},  //objeto de tipo plan , debe estar creado previamente
alu_rutinas:            [{type: rutinaPersonalizada.schema, required: true}],

alu_usuario:            {type: Schema.Types.ObjectId,ref: usuario}   //usuario vinculado al alumno por id


});

module.exports = mongoose.models.AlumnoSchema || mongoose.model('Alumno', AlumnoSchema);



