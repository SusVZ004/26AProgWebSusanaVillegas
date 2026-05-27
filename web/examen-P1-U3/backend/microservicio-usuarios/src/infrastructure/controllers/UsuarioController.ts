import { Request, Response } from "express";
import { PostgresUsuarioRepository } from "../repositories/PostgresUsuarioRepository";

const repo = new PostgresUsuarioRepository();

export class UsuarioController {
    static async obtenerUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await repo.obtenerTodos();
            res.json(usuarios);
        } catch (error) {
            console.error("❌ Error en obtenerUsuarios:", error); // <-- Línea clave
            res.status(500).json({ error: "Error al obtener usuarios" });
        }
    }

    static async crearUsuario(req: Request, res: Response) {
        try {
            const nuevo = await repo.crear(req.body);
            res.status(201).json(nuevo);
        } catch (error) {
            console.error("❌ Error en crearUsuario:", error); // <-- Línea clave
            res.status(500).json({ error: "Error al crear usuario" });
        }
    }
}