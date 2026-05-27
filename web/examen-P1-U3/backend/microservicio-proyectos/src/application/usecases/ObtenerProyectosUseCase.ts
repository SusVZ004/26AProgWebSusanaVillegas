import { IProyectoRepository } from "../../domain/repositories/IProyectoRepository";
import { Proyecto } from "../../domain/models/Proyecto";

export class ObtenerProyectosUseCase {
    // Le inyectamos el puerto del repositorio
    constructor(private proyectoRepository: IProyectoRepository) {}

    async ejecutar(): Promise<Proyecto[]> {
        // Llama al repositorio para traer la lista completa
        return await this.proyectoRepository.obtenerTodos();
    }
}