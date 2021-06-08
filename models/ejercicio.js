const mongoose = require("mongoose");
const {Schema} = mongoose;
const EjercicioSchema = new Schema({

ej_nombre: {type: String, required: true},
ej_descripcion: {type:String, required:true},


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.EjercicioSchema || mongoose.model('Ejercicio', EjercicioSchema);