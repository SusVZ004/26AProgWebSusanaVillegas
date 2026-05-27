import { IProyectoRepository } from "../../domain/repositories/IProyectoRepository.js";
import { Proyecto } from "../../domain/models/Proyecto.js";
import { pool } from "../database/conexion.js";

export class PostgresProyectoRepository implements IProyectoRepository {
    
    // Inserta un nuevo proyecto scout en la base de datos
    async crear(proyecto: Proyecto): Promise<Proyecto> {
        const query = `
            INSERT INTO proyectos (nombre, insignia, descripcion) 
            VALUES ($1, $2, $3) 
            RETURNING id, nombre, insignia, descripcion
        `;
        const valores = [proyecto.nombre, proyecto.insignia, proyecto.descripcion];
        const resultado = await pool.query(query, valores);
        return resultado.rows[0];
    }

    // Recupera la lista completa de proyectos de la tabla
    async obtenerTodos(): Promise<Proyecto[]> {
        const resultado = await pool.query("SELECT id, nombre, insignia, descripcion FROM proyectos");
        return resultado.rows;
    }

    // Busca un proyecto en específico usando su ID
    async obtenerPorId(id: number): Promise<Proyecto | null> {
        const resultado = await pool.query("SELECT id, nombre, insignia, descripcion FROM proyectos WHERE id = $1", [id]);
        return resultado.rows.length ? resultado.rows[0] : null;
    }

    // Actualiza los datos de un proyecto existente
    async actualizar(id: number, proyecto: Proyecto): Promise<Proyecto | null> {
        const query = `
            UPDATE proyectos 
            SET nombre = $1, insignia = $2, descripcion = $3 
            WHERE id = $4 
            RETURNING id, nombre, insignia, descripcion
        `;
        const valores = [proyecto.nombre, proyecto.insignia, proyecto.descripcion, id];
        const resultado = await pool.query(query, valores);
        return resultado.rows.length ? resultado.rows[0] : null;
    }

    // Elimina un registro de la base de datos
    async eliminar(id: number): Promise<boolean> {
        const resultado = await pool.query("DELETE FROM proyectos WHERE id = $1", [id]);
        return (resultado.rowCount ?? 0) > 0;
    }
}