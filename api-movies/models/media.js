const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  serial: { type: String, required: [true, 'Serial requerido'], unique :[true, 'El medio ya existe!'] },
  titulo: { type: String, required: [true, 'Se requiere un título'] },
  sinopsis: { type: String , required: true },
  url:{ type: String, required: [true, 'Es necesario una URL!'], unique :[true, 'El URL ya existe!']},
  imagen:{ type: String, required: [true, '']},
  fecCrea: { type: Date, default: new Date()},
  fecActualiza: { type: Date, default: new Date() },
  añoEstreno: { type: String , required: true },
  genero: { type: Schema.Types.ObjectId , ref: 'Genero' , required: true },
  directorPpal: { type: Schema.Types.ObjectId , ref: 'Director' , required: true },
  productora: { type: Schema.Types.ObjectId , ref: 'Productora' , required: true },
  tipo: { type: Schema.Types.ObjectId , ref: 'Tipo' , required: true },
});

module.exports = mongoose.model("media", MediaSchema);