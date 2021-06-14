const mongoose = require('mongoose');
const usuario = require('./usuario');

const {Schema} = mongoose;

const EntrenadorSchema = new Schema({

ent_apellido:           {type: String, required: true},
ent_nombre:             {type: String, required: true},
ent_dni:                {type: String, required: true},
ent_celular:            {type: String, required: true},
ent_usuario:            {type: Schema.Types.ObjectId,ref: usuario}   //usuario vinculado al alumno por id


});

module.exports = mongoose.models.EntrenadorSchema || mongoose.model('Entrenador', EntrenadorSchema);



