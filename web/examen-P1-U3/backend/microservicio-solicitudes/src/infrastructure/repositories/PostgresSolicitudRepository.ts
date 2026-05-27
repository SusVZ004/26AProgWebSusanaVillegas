import { ISolicitudRepository } from "../../domain/repositories/ISolicitudRepository.js";
import { Solicitud } from "../../domain/models/Solicitud.js";
import { pool } from "../database/conexion.js";

export class PostgresSolicitudRepository implements ISolicitudRepository {
    async crear(solicitud: Solicitud): Promise<Solicitud> {
        const query = `
            INSERT INTO solicitudes (proyecto_id, postulante_id, estado) 
            VALUES ($1, $2, 'Pendiente') 
            RETURNING id, proyecto_id, postulante_id, estado, fecha_creacion
        `;
        const valores = [solicitud.proyecto_id, solicitud.postulante_id];
        const resultado = await pool.query(query, valores);
        return resultado.rows[0];
    }

    async obtenerTodas(): Promise<Solicitud[]> {
        const resultado = await pool.query("SELECT id, proyecto_id, postulante_id, estado, fecha_creacion FROM solicitudes");
        return resultado.rows;
    }
}