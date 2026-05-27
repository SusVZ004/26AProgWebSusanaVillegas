import express from "express";
import cors from "cors";
import { PostgresProyectoRepository } from "./infrastructure/repositories/PostgresProyectoRepository.js";
import { ObtenerProyectosUseCase } from "./application/usecases/ObtenerProyectosUseCase.js";
import { CrearProyectoUseCase } from "./application/usecases/CrearProyectoUseCase.js";
import { ProyectoController } from "./infrastructure/controllers/ProyectoController.js";

const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Usaremos el puerto 3001 para el microservicio de Proyectos
const port = process.env.PORT || 3001; 

// --- INYECCIÓN DE DEPENDENCIAS (Conexión del Hexágono) ---
const proyectoRepository = new PostgresProyectoRepository();
const obtenerProyectosUseCase = new ObtenerProyectosUseCase(proyectoRepository);
const crearProyectoUseCase = new CrearProyectoUseCase(proyectoRepository);
const proyectoController = new ProyectoController(obtenerProyectosUseCase, crearProyectoUseCase);

// --- DEFINICIÓN DE RUTAS API REST ---

app.use(express.json());
app.get("/proyectos", (req, res) => proyectoController.obtenerTodos(req, res));
app.post("/proyectos", (req, res) => proyectoController.crear(req, res));

app.listen(port, () => {
    console.log(`🚀 Microservicio de Proyectos listo en http://localhost:${port}`);
});