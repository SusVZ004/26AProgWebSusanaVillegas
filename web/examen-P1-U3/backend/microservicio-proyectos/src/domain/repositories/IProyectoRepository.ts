import { Proyecto } from "../models/Proyecto";

export interface IProyectoRepository {
    crear(proyecto: Proyecto): Promise<Proyecto>;
    obtenerTodos(): Promise<Proyecto[]>;
    obtenerPorId(id: number): Promise<Proyecto | null>;
    actualizar(id: number, proyecto: Proyecto): Promise<Proyecto | null>;
    eliminar(id: number): Promise<boolean>;
}