const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoraSchema = new Schema({
  nombre: { type: String, required: true },
  estado: { type: Boolean , required: true },
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date() },
  slogan: { type: String , required: true },
  descripcion: { type: String , required: true },
});

module.exports = mongoose.model("productora", ProductoraSchema);