const mongoose = require("mongoose");
const {Schema} = mongoose;

const PlanSchema = new Schema({

plan_nombre:        {type: String, required: true},
plan_descripcion:   {type: String, required:true},
plan_precio:        {type: Number, required:true},
plan_dias:          {type: Number, required:true},


});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.models.PlanSchema || mongoose.model('Plan', PlanSchema);