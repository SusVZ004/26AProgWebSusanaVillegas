CREATE TABLE IF NOT EXISTS proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    insignia VARCHAR(50) NOT NULL, -- Ej. Scouts del Mundo, Tribu de la Tierra
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS postulantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    seccion VARCHAR(50) NOT NULL,
    provincia VARCHAR(50) NOT NULL DEFAULT 'Jalisco'
);

CREATE TABLE IF NOT EXISTS solicitudes (
    id SERIAL PRIMARY KEY,
    proyecto_id INT REFERENCES proyectos(id) ON DELETE CASCADE,
    postulante_id INT REFERENCES postulantes(id) ON DELETE CASCADE,
    estado VARCHAR(30) DEFAULT 'Pendiente', -- Pendiente, En Revisión, Aprobada
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);