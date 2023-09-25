const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());


const generosRouter = require("./routes/genero");
app.use("/generos", generosRouter);

const directoresRouter = require("./routes/director");
app.use("/directores", directoresRouter);

const productorasRouter = require("./routes/productora");
app.use("/productoras", productorasRouter);

const tiposRouter = require("./routes/tipo");
app.use("/tipos", tiposRouter);

const mediasRouter = require("./routes/media");
app.use("/medias", mediasRouter);

const db = "mongodb://localhost/peliculas";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server Running"));


