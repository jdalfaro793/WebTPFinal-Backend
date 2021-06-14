const mongoose = require("mongoose");
const {Schema} = mongoose;
const rutina = require('./rutina');

const RutinaPersonalizadaSchema = new Schema({

//rutper_rutina: {type: Rutina.schema, required: true},  //declarar objeto nuevo tipo rutina dentro de la tabla
rutper_rutina:      {type: Schema.Types.ObjectId, ref:rutina, required:true} ,//objeto de tipo rutina por id, debe estar creado previamente
rutper_repeticion:  {type: [Number], required: true }, //declaracion de arrays de numeros
rutper_serie:       {type: [Number], required: true },
rutper_peso:        {type: [Number], required: true },
rutper_dia:         {type: String,required: true    }

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.RutinaPersonalizadaSchema || mongoose.model('RutinaPersonalizada', RutinaPersonalizadaSchema);

