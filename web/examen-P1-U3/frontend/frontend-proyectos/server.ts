declare const Bun: any;
const port = 5001;

Bun.serve({
  port: port,
  async fetch(req: any) {
    const url = new URL(req.url);
    
    // Servir el HTML principal
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(Bun.file("./index.html"), {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Compilar y servir el TypeScript de forma nativa como JS
    if (url.pathname === "/app.js") {
      const build = await Bun.build({
        entrypoints: ["./app.ts"],
      });
      return new Response(build.outputs[0]);
    }

    return new Response("No encontrado", { status: 404 });
  },
});

console.log(`🌐 Frontend Proyectos listo en http://localhost:${port}`);