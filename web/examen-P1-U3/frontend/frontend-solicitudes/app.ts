const API_URL = "http://localhost:3003/solicitudes";

interface Solicitud {
    id?: number;
    postulante_id: number; // 🌟 Alineado con el caso de uso
    proyecto_id: number;   // 🌟 Alineado con el caso de uso
}

const form = document.getElementById("form-solicitud") as HTMLFormElement;
const lista = document.getElementById("lista-solicitudes") as HTMLUListElement;

async function cargarSolicitudes(): Promise<void> {
    try {
        const res = await fetch(API_URL);
        const solicitudes: any[] = await res.json();
        
        lista.innerHTML = "";
        solicitudes.forEach(s => {
            const li = document.createElement("li");
            li.className = "p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:bg-slate-50/80 transition-colors mb-2";
            
            // Leemos las propiedades correctas que vienen del backend
            const postulanteId = s.postulante_id || s.id_postulante || "N/A";
            const proyectoId = s.proyecto_id || s.id_proyecto || "N/A";

            li.innerHTML = `
                <div class="flex items-center space-x-4 text-xs font-medium text-slate-600">
                    <span class="text-slate-400 font-semibold"># ${s.id || ""}</span>
                    <span><i class="fa-solid fa-user text-slate-400 mr-1.5 text-[11px]"></i>Miembro: ${postulanteId}</span>
                    <span><i class="fa-solid fa-folder text-slate-400 mr-1.5 text-[11px]"></i>Iniciativa: ${proyectoId}</span>
                </div> 
                <span class="text-[11px] bg-violet-50 text-violet-700 px-3 py-1 rounded-full font-bold border border-violet-100 shadow-sm flex items-center">
                    <i class="fa-solid fa-circle-check mr-1 text-[9px]"></i> Recibida
                </span>
            `;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error("Error cargando solicitudes:", error);
    }
}

form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();
    const postulanteInput = document.getElementById("idPostulante") as HTMLInputElement;
    const proyectoInput = document.getElementById("idProyecto") as HTMLInputElement;

    // 🌟 Estructura EXACTA que tu Caso de Uso necesita para pasar la validación
    const nuevaSolicitud = {
        postulante_id: parseInt(postulanteInput.value),
        proyecto_id: parseInt(proyectoInput.value)
    };

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevaSolicitud)
        });
        if (res.ok) {
            form.reset();
            await cargarSolicitudes();
        } else {
            const errData = await res.json();
            console.error("Error detallado de la aplicación:", errData);
        }
    } catch (error) {
        console.error("Error al crear solicitud:", error);
    }
});

cargarSolicitudes();