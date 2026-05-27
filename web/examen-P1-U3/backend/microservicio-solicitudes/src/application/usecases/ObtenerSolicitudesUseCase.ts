import { ISolicitudRepository } from "../../domain/repositories/ISolicitudRepository.js";
import { Solicitud } from "../../domain/models/Solicitud.js";

export class ObtenerSolicitudesUseCase {
    constructor(private solicitudRepository: ISolicitudRepository) {}

    async ejecutar(): Promise<Solicitud[]> {
        return await this.solicitudRepository.obtenerTodas();
    }
}