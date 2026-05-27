import express from "express";
import cors from "cors";
import { UsuarioController } from "./infrastructure/controllers/UsuarioController";

const app = express();
const port = process.env.PORT || 3002;

// CORS al principio para que no truene el navegador
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Tus endpoints de la API
app.get("/usuarios", UsuarioController.obtenerUsuarios);
app.post("/usuarios", UsuarioController.crearUsuario);

app.listen(port, () => {
    console.log(`🚀 Microservicio de Usuarios listo en el puerto ${port}`);
});