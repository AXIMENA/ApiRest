const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  nombres: { type: String, required: [true, 'Se requiere el nombre del Genero' ]},
  estado: { type: Boolean , required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date,default: new Date(), required: true },
});

module.exports = mongoose.model("director", DirectorSchema);