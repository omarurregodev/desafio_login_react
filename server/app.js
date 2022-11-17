import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

//aqui importo el sistema de ruteo
import mainRoutes from "./routes/mainRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use("/api", mainRoutes);

// enabilito los PORT con un limite de subida de 30MB
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);

// aqui tienes que hacer tu base de datos cloud.mongodb.com
// variable de contrasenia de prefencia en archivo .ENV

// const CONNECTION_URL =
//   "mongodb+srv://GLinares:admin123@mern.yktji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//puerto donde se va a contruir
const PORT = process.env.PORT || 8000;

//inicializo la base de datos y si se puede conectar corre servidor
// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//   )
//   .catch((error) => console.log(error.message));

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
