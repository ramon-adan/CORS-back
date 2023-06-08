const express = require("express");
const cors = require("cors");

const app = express();

// Configurar CORS para permitir cualquier origen
const corsOptions = {
  // origin: "*",
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// Ruta GET que devuelve un objeto JSON
app.get("/data", (req, res) => {
  const response = {
    mensaje: "Hola",
    fecha: new Date(),
  };

  res.json(response);
});

// Ruta GET que devuelve datos JSONP
app.get("/jsonp", (req, res) => {
  const response = {
    message: "Hola desde el servidor",
    date: new Date(),
  };

  res.jsonp(response);
});

// Iniciar el servidor en el puerto 3002
app.listen(3002, () => {
  console.log("Servidor Express iniciado en el puerto 3002");
});
