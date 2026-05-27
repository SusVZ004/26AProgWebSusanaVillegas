import { Pool } from "pg";

export const pool = new Pool({

    connectionString: process.env.DATABASE_URL || "postgres://admin_scout:password_seguro_123@postgres_db:5432/mundo_mejor_sistema"
});