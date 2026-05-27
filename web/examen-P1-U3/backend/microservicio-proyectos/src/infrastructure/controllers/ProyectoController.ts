import { Request, Response } from "express";
import { ObtenerProyectosUseCase } from "../../application/usecases/ObtenerProyectosUseCase.js";
import { CrearProyectoUseCase } from "../../application/usecases/CrearProyectoUseCase.js";

export class ProyectoController {
    constructor(
        private obtenerProyectosUseCase: ObtenerProyectosUseCase,
        private crearProyectoUseCase: CrearProyectoUseCase
    ) {}

    // Maneja la petición GET /proyectos
    async obtenerTodos(_req: Request, res: Response) {
        try {
            const proyectos = await this.obtenerProyectosUseCase.ejecutar();
            res.json(proyectos);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    // Maneja la petición POST /proyectos
    async crear(req: Request, res: Response) {
        try {
            const nuevoProyecto = await this.crearProyectoUseCase.ejecutar(req.body);
            res.status(201).json(nuevoProyecto);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}