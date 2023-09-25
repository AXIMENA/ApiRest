const express = require("express");
const router = express.Router();
const Director = require("../models/director");

router.post("/add", (req, res) => {
  const newDirector = new Director({
    nombres: req.body.nombres,
    estado: req.body.estado,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
  });
  newDirector
    .save()
    .then(() => res.json("El director ha sido agregado."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
  Director.find()
    .then((directores) => res.json(directores))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Director.findByIdAndDelete(req.params.id)
    .then(() => res.json("El director ha sido borrado..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
  Director.findById(req.params.id)
    .then((director) => {
        director.nombres = req.body.nombres;
        director.estado = req.body.estado;
        director.fecCrea = req.body.fecCrea;
        director.fecActualiza = req.body.fecActualiza;
        director
        .save()
        .then(() => res.json("El director ha sido actualizado.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;