import { ISolicitudRepository } from "../../domain/repositories/ISolicitudRepository.js";
import { Solicitud } from "../../domain/models/Solicitud.js";

export class CrearSolicitudUseCase {
    constructor(private solicitudRepository: ISolicitudRepository) {}

    async ejecutar(datos: Omit<Solicitud, "id">): Promise<Solicitud> {
        if (!datos.proyecto_id || !datos.postulante_id) {
            throw new Error("El ID del proyecto y del postulante son obligatorios");
        }
        return await this.solicitudRepository.crear(datos);
    }
}