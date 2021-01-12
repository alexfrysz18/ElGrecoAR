const express = require("express");
const app = express();
const path = require("path");

//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//rutas
app.use(require("./routes/"));

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//modulos de node
app.use('/scripts/', express.static(path.join(__dirname, "./node_modules/")));

//puerto
app.listen(app.get("port"), () => {
  console.log("Server run on Port: ", app.get("port"));
});