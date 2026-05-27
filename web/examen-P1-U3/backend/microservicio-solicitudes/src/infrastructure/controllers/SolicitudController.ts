import { Request, Response } from "express";
import { CrearSolicitudUseCase } from "../../application/usecases/CrearSolicitudUseCase.js";
import { ObtenerSolicitudesUseCase } from "../../application/usecases/ObtenerSolicitudesUseCase.js";

export class SolicitudController {
    constructor(
        private crearSolicitudUseCase: CrearSolicitudUseCase,
        private obtenerSolicitudesUseCase: ObtenerSolicitudesUseCase
    ) {}

    async crear(req: Request, res: Response) {
        try {
            const nueva = await this.crearSolicitudUseCase.ejecutar(req.body);
            res.status(201).json(nueva);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async obtenerTodas(_req: Request, res: Response) {
        try {
            const lista = await this.obtenerSolicitudesUseCase.ejecutar();
            res.json(lista);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}