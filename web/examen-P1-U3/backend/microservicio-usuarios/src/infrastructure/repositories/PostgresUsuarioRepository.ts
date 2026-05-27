import { Usuario } from "../../domain/models/Usuario";
import { pool } from "../database/conexion";

export class PostgresUsuarioRepository {
    async obtenerTodos(): Promise<Usuario[]> {
        const res = await pool.query("SELECT * FROM postulantes");
        return res.rows;
    }

    async crear(usuario: Usuario): Promise<Usuario> {
        // Aseguramos que jale correctamente las propiedades que vienen del formulario
        const { nombre, seccion } = usuario;
        const res = await pool.query(
            "INSERT INTO postulantes (nombre, seccion) VALUES ($1, $2) RETURNING *",
            [nombre, seccion]
        );
        return res.rows[0];
    }
}