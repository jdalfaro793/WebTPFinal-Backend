const mongoose = require("mongoose");
const {Schema} = mongoose;
const AsistenciaSchema = new Schema({

asist_fecha: {type: Date, required: true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.AsistenciaSchema || mongoose.model('Asistencia', AsistenciaSchema);
