import express from "express";
import cors from "cors";
import { PostgresSolicitudRepository } from "./infrastructure/repositories/PostgresSolicitudRepository.js";
import { CrearSolicitudUseCase } from "./application/usecases/CrearSolicitudUseCase.js";
import { ObtenerSolicitudesUseCase } from "./application/usecases/ObtenerSolicitudesUseCase.js";
import { SolicitudController } from "./infrastructure/controllers/SolicitudController.js";

const app = express();

// 🌟 REGLA DE ORO: Pon estos dos middlewares inmediatamente aquí arriba
app.use(express.json()); 
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const port = process.env.PORT || 3003;

const repository = new PostgresSolicitudRepository();
const crearUC = new CrearSolicitudUseCase(repository);
const obtenerUC = new ObtenerSolicitudesUseCase(repository);
const controller = new SolicitudController(crearUC, obtenerUC);

// 🌟 Las rutas se quedan al final, asegurando que el JSON ya fue leído
app.post("/solicitudes", controller.crear.bind(controller));
app.get("/solicitudes", controller.obtenerTodas.bind(controller));

app.listen(port, () => {
    console.log(`🚀 Microservicio de Solicitudes listo en http://localhost:${port}`);
});