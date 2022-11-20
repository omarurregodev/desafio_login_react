import express from "express";
import mongoose from "mongoose";

//aqui se importan los controladores
// import { loginUser, getUser } from "../controllers/loginControllers.js";

//inicializo la ruta
const router = express.Router();

//AQUI INICIO LAS RUTAS

//ROUTE DE LOGGEO DE USUARIO
//Creación de la sesión
router.post("/login", (req, res) => {
  // try {
    req.session.nombre = req.body.username;
    res.status(200).json({
      status: "success",
      id_session: req.session.id,
      name: req.session.nombre
    });
  // } catch (e) {
  //   res.status(500).json({ status: 'error', message: 'Algo salio mal al hacer login' });
  // }
});
// Destruyo la sesion

router.get('/logout', (req, res) => {
    try {
        req.session.destroy();
        res.clearCookie('currentSession');
        res.status(200).json({
			status: 'success',
			message: 'Session cerrada',
		});
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'Algo salio mal al hacer logout' });
    }
})

//Llamo al user en sesion

router.get("/user", (req, res) => {
      const sessionId = req.session.id;
      
      const username = req.query.name;

      
      console.log(req.query);
      res.send(req.query.name);
  });

export default router;
