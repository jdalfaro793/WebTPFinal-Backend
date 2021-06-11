const mongoose = require("mongoose");
const {Schema} = mongoose;
const CuotaSchema = new Schema({

cuot_monto: {type: Number, required: true},
cuot_fechaPago: {type: Date, required:true},
cuot_modoPago: {type: String, required:true}

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.CuotaSchema || mongoose.model('Cuota', CuotaSchema);
