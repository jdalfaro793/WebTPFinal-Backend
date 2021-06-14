const mongoose = require("mongoose");
const alumno = require("./alumno");
const {Schema} = mongoose;
const AsistenciaSchema = new Schema({

asist_fecha: {type: Date, required: true},
obj_alumno: {type: Schema.Types.ObjectId,ref: alumno}   //usuario vinculado al alumno por id


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.AsistenciaSchema || mongoose.model('Asistencia', AsistenciaSchema);
