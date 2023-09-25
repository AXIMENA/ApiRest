const express = require("express");
const router = express.Router();
const Genero = require("../models/genero");

router.post("/add", (req, res) => {
  const newGenero = new Genero({
    nombre: req.body.nombre,
    estado: req.body.estado,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
    Descripcion: req.body.Descripcion,
  });
  newGenero
    .save()
    .then(() => res.json("El genero ha sido agregado."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
  Genero.find()
    .then((generos) => res.json(generos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Genero.findByIdAndDelete(req.params.id)
    .then(() => res.json("El genero ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
  Genero.findById(req.params.id)
    .then((genero) => {
        genero.nombre = req.body.nombre;
        genero.estado = req.body.estado;
        genero.fecCrea = req.body.fecCrea;
        genero.fecActualiza = req.body.fecActualiza;
        genero.Descripcion = req.body.Descripcion;
        genero
        .save()
        .then(() => res.json("El genero ha sido actualizado.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;