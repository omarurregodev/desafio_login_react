import express from "express";

//aqui se importan los controladores
import { loginUser, getUser } from "../controllers/mainControllers.js";

//inicializo la ruta
const router = express.Router();

//aui van las rutas
router.post("/login", loginUser);
router.get("/user", getUser);

export default router;
