# 1. Usamos la imagen oficial de Bun sobre Linux Alpine
FROM oven/bun:1.1-alpine

# 2. Carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiamos el package.json para instalar dependencias primero
COPY package.json ./

# 4. Instalamos las dependencias de producción
RUN bun install --production

# 5. Copiamos todo el resto del código fuente del microservicio
COPY . .

# 6. Exponemos el puerto 3002 que configuramos en el index.ts de usuarios
EXPOSE 3002

# 7. Comando para arrancar el microservicio de usuarios con Bun
CMD ["bun", "run", "src/index.ts"]