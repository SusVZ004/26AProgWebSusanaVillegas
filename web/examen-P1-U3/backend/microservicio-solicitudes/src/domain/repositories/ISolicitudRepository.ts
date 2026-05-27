import { Solicitud } from "../models/Solicitud.js";

export interface ISolicitudRepository {
    crear(solicitud: Solicitud): Promise<Solicitud>;
    obtenerTodas(): Promise<Solicitud[]>;
}