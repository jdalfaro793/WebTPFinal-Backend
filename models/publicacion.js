const mongoose = require("mongoose");
const {Schema} = mongoose;

const PublicacionSchema = new Schema({

    fecha:{type: Date, required: true},
    titulo: {type: String, required: true},
    noticia: {type: String, required:true},
    vigente: {type: Boolean, required:true},
   


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.PublicacionSchema || mongoose.model('Publicacion', PublicacionSchema);