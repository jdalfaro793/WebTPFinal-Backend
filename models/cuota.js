const mongoose = require("mongoose");
const alumno = require("./alumno");

const {Schema} = mongoose;
const CuotaSchema = new Schema({

cuot_monto: {type: Number, required: true},
cuot_fechaPago: {type: Date, required:true},
cuot_modoPago: {type: String, required:true},
obj_alumno: {type: Schema.Types.ObjectId,ref: alumno}   //usuario vinculado al alumno por id


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.CuotaSchema || mongoose.model('Cuota', CuotaSchema);
