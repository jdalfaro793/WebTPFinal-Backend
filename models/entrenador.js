const mongoose = require('mongoose');
const usuario = require('./usuario');

const {Schema} = mongoose;

const EntrenadorSchema = new Schema({

alu_apellido:           {type: String, required: true},
alu_nombre:             {type: String, required: true},
alu_dni:                {type: String, required: true},
alu_celular:            {type: String, required: true},
alu_usuario:            {type: usuario.schema}


});

module.exports = mongoose.models.EntrenadorSchema || mongoose.model('Entrenador', EntrenadorSchema);



