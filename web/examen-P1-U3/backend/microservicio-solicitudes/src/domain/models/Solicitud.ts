export interface Solicitud {
    id?: number;
    proyecto_id: number;
    postulante_id: number;
    estado?: string; // Pendiente, En Revisión, Aprobada
    fecha_creacion?: Date;
}