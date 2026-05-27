
FROM oven/bun:1.1-alpine

# 2. Creamos y nos movemos a la carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiamos el package.json para instalar las dependencias primero
COPY package.json ./

# 4. Instalamos las dependencias de producción de forma limpia en Linux
RUN bun install --production

# 5. Copiamos todo el resto del código fuente del microservicio (la carpeta src, tsconfig, etc.)
COPY . .

# 6. Exponemos el puerto 3001 que fue el que configuramos en el index.ts
EXPOSE 3001

# 7. Comando final para arrancar nuestra API con Arquitectura Hexagonal usando Bun
CMD ["bun", "run", "src/index.ts"]