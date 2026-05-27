"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_URL = "http://localhost:3001/proyectos";
const form = document.getElementById("form-proyecto");
const lista = document.getElementById("lista-proyectos");
async function cargarProyectos() {
    try {
        const res = await fetch(API_URL);
        const proyectos = await res.json();
        lista.innerHTML = "";
        proyectos.forEach(p => {
            const li = document.createElement("li");
            li.className = "p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:bg-slate-50/80 transition-colors mb-2";
            li.innerHTML = `
                <div>
                    <strong class="text-slate-900 font-bold text-sm block mb-0.5">${p.nombre}</strong>
                    <span class="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold border border-blue-100 shadow-sm">${p.insignia}</span>
                </div>
                <span class="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded font-mono">ID: ${p.id}</span>
            `;
            lista.appendChild(li);
        });
    }
    catch (error) {
        console.error("Error cargando proyectos:", error);
    }
}
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombreInput = document.getElementById("nombreProyecto");
    const descInput = document.getElementById("descripcionProyecto");
    const nuevoProyecto = {
        nombre: nombreInput.value,
        insignia: descInput.value
    };
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoProyecto)
        });
        if (res.ok) {
            form.reset();
            await cargarProyectos();
        }
    }
    catch (error) {
        console.error("Error al crear proyecto:", error);
    }
});
cargarProyectos();
