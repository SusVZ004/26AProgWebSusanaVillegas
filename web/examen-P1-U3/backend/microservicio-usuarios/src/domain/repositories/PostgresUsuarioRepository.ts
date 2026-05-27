import { Pool } from "pg";
import { Usuario } from "../../domain/models/Usuario";

const pool = new Pool({
    // Cambiamos las credenciales por las reales de tu contenedor
    connectionString: process.env.DATABASE_URL || "postgres://admin_scout:password_seguro_123@scout_postgres:5432/mundo_mejor_sistema"
});

export class PostgresUsuarioRepository {
    async obtenerTodos(): Promise<Usuario[]> {
        const res = await pool.query("SELECT * FROM postulantes");
        return res.rows;
    }

    async crear(usuario: Usuario): Promise<Usuario> {
        const res = await pool.query(
            "INSERT INTO postulantes (nombre, seccion) VALUES ($1, $2) RETURNING *",
            [usuario.nombre, usuario.seccion]
        );
        return res.rows[0];
    }
}