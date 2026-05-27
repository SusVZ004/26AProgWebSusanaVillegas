"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const port = 5003;
Bun.serve({
    port: port,
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/" || url.pathname === "/index.html") {
            return new Response(Bun.file("./index.html"), { headers: { "Content-Type": "text/html" } });
        }
        if (url.pathname === "/app.js") {
            const build = await Bun.build({ entrypoints: ["./app.ts"] });
            return new Response(build.outputs[0]);
        }
        return new Response("No encontrado", { status: 404 });
    },
});
console.log(`🌐 Frontend Solicitudes listo en http://localhost:${port}`);
