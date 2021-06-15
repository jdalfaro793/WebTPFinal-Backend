const mongoose = require("mongoose");
const Dieta = require("./dieta");
const {Schema} = mongoose;
const MesDietaSchema = new Schema({

planSemanal: [{type: Schema.Types.ObjectId, ref: Dieta, required:true}]

});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.MesDietaSchema || mongoose.model('MesDieta', MesDietaSchema);