const mongoose = require("mongoose");
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    usu_username:   {type: String, required: true},
    usu_password:   {type: String, required:true},
    usu_rol:        {type: String, required: true} //    -- ALUMNO / ENTRENADOR --
});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.model('Usuario', UsuarioSchema);
