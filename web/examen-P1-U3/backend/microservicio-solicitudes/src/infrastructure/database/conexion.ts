import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "admin_scout",
    password: process.env.DB_PASSWORD || "password_seguro_123",
    database: process.env.DB_DATABASE || "mundo_mejor_sistema",
});