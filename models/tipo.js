const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoSchema = new Schema({
  nombre: { type: String, required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date() },
  descripcion: { type: String , required: true },
});

module.exports = mongoose.model("tipo", TipoSchema);