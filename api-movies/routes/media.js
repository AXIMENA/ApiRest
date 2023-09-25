const express = require("express");
const router = express.Router();
const Media = require("../models/media");

router.post("/add", (req, res) => {
  const newMedia = new Media({
    serial: req.body.serial,
    titulo: req.body.titulo,
    sinopsis: req.body.sinopsis,
    url: req.body.url,
    imagen: req.body.imagen,
    fecCrea: req.body.fecCrea,
    fecActualiza: req.body.fecActualiza,
    añoEstreno:req.body.añoEstreno,
    descripcion:req.body.descripcion,
    genero:req.body.genero,
    directorPpal:req.body.directorPpal,
    productora:req.body.productora,
    tipo:req.body.tipo,
  });
  newMedia
    .save()
    .then(() => res.json("La media ha sido agregada."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/generos/ 
router.get("/", (req, res) => {
    Media.find()
    .then((medias) => res.json(medias))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/delete/STUDENT_ID
router.delete("/delete/:id", (req, res) => {
    Media.findByIdAndDelete(req.params.id)
    .then(() => res.json("La media ha sido borrada..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// http://localhost:5000/peliculas/update/STUDENT_ID
router.post("/update/:id", (req, res) => {
    Media.findById(req.params.id)
    .then((media) => {
        media.serial = req.body.serial,
        media.titulo = req.body.titulo,
        media.sinopsis = req.body.sinopsis,
        media.url = req.body.url,
        media.imagen = req.body.imagen,
        media.fecCrea = req.body.fecCrea,
        media.fecActualiza = req.body.fecActualiza,
        media.añoEstreno = req.body.añoEstreno,
        media.descripcion = req.body.descripcion,
        media.genero = req.body.genero,
        media.directorPpal = req.body.directorPpal,
        media.productora = req.body.productora,
        media.tipo = req.body.tipo
        media
        .save()
        .then(() => res.json("La media ha sido actualizada.."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;