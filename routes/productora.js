const express = require("express");
const router = express.Router();
const Productora = require("../models/productora");

router.post("/add", (req, res) => {
  const newProductora = new Productora({
    nombre: req.body.nombre,
    estado: req.body.estado,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
    slogan:req.body.slogan,
    descripcion:req.body.descripcion,
  });
  newProductora
    .save()
    .then(() => res.json("La productora ha sido agregada."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
    Productora.find()
    .then((productoras) => res.json(productoras))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Productora.findByIdAndDelete(req.params.id)
    .then(() => res.json("La productora ha sido borrada..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
  Productora.findById(req.params.id)
    .then((productora) => {
        productora.nombre = req.body.nombre;
        productora.estado = req.body.estado;
        productora.fecCrea = req.body.fecCrea;
        productora.fecActualiza = req.body.fecActualiza;
        productora.slogan = req.body.slogan;
        productora.descripcion = req.body.descripcion;
        productora
        .save()
        .then(() => res.json("La productora ha sido actualizada.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;