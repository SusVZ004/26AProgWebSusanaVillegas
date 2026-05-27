Portafolio_Web_SusanaVillegas/
├── backend/
│   ├── microservicio-usuarios/
│   ├── microservicio-proyectos/
│   └── microservicio-solicitudes/
│       ├── src/
│       │   ├── domain/                  # Entidades e Interfaces de Repositorios
│       │   │   ├── models/
│       │   │   └── repositories/
│       │   ├── application/             # Casos de Uso (Lógica de negocio)
│       │   │   └── usecases/
│       │   └── infrastructure/          # Controladores, Servidor y Base de Datos
│       │       ├── controllers/
│       │       └── repositories/
│       ├── Dockerfile                   # Configuración del contenedor del servicio
│       └── package.json
├── frontend/
│   ├── frontend-usuarios/               # SPA Postulantes (Puerto 5002)
│   ├── frontend-proyectos/              # SPA Proyectos (Puerto 5001)
│   └── frontend-solicitudes/            # SPA Solicitudes (Puerto 5003)
│       ├── index.html                   # Interfaz optimizada con Tailwind CSS
│       ├── app.ts                       # Gestión del DOM, Fetch y async/await
│       └── app.js                       # Código compilado por TSC
├── docker-compose.yml                   # Orquestación de contenedores y Postgres
└── Vagrantfile                          # Entorno virtualizado de desarrolloizado