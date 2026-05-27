"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_URL = "http://localhost:3002/usuarios";
const form = document.getElementById("form-usuario");
const lista = document.getElementById("lista-usuarios");
async function cargarPostulantes() {
    try {
        const res = await fetch(API_URL);
        const postulantes = await res.json();
        lista.innerHTML = "";
        postulantes.forEach(p => {
            const li = document.createElement("li");
            li.className = "p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:bg-slate-50/80 transition-colors mb-2";
            li.innerHTML = `
                <div><strong class="text-slate-800 font-semibold text-sm">${p.nombre}</strong></div> 
                <span class="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold border border-emerald-100 shadow-sm">${p.seccion}</span>
            `;
            lista.appendChild(li);
        });
    }
    catch (error) {
        console.error("Error cargando postulantes:", error);
    }
}
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombreInput = document.getElementById("nombre");
    const seccionSelect = document.getElementById("seccion");
    const nuevoPostulante = {
        nombre: nombreInput.value,
        seccion: seccionSelect.value
    };
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoPostulante)
        });
        if (res.ok) {
            form.reset();
            await cargarPostulantes();
        }
    }
    catch (error) {
        console.error("Error al crear postulante:", error);
    }
});
cargarPostulantes();
