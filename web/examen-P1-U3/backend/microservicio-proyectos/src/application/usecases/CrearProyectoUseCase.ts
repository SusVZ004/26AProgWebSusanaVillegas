import { IProyectoRepository } from "../../domain/repositories/IProyectoRepository";
import { Proyecto } from "../../domain/models/Proyecto";

export class CrearProyectoUseCase {
    constructor(private proyectoRepository: IProyectoRepository) {}

    async ejecutar(datos: Omit<Proyecto, "id">): Promise<Proyecto> {
        // Validaciones básicas antes de tocar la base de datos
        if (!datos.nombre || !datos.insignia) {
            throw new Error("El nombre del proyecto y la insignia son obligatorios");
        }
        // Si todo está bien, lo manda a fabricar al repositorio
        return await this.proyectoRepository.crear(datos);
    }
}