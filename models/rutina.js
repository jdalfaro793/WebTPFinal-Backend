const mongoose = require("mongoose");
const {Schema} = mongoose;
const ejercicio = require('./ejercicio');

const RutinaSchema = new Schema({

    nombre: {type: String, required: true},
    ejercicios: [{type: Schema.Types.ObjectId,ref:ejercicio,required:true}] 


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RutinaSchema || mongoose.model('Rutina', RutinaSchema);