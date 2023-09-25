const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeneroSchema = new Schema({
  nombre: { type: String, required: true },
  estado: { type: Boolean , default: true, required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date(), required: true },
  Descripcion: { type: String, required: true },
});

module.exports = mongoose.model("genero", GeneroSchema);