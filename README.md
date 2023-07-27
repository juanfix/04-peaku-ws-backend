# 04-peaku-ws-backend

## Caso de estudio: API REST Trabook

Para esta práctica se requiere crear una serie de endpoints que sirvan como origen de los datos de las tarjetas del proyecto de [Trabook](https://github.com/juanfix/01-peaku-ws-frontend).

La idea es conectar el backend con el frontend para el funcionamiento del carousel.

## Stack

- NodeJS 18.16.0
- Express 4.18.2
- Sequelize ORM 6.32.1
- MySQL 8

## Solución

### Documentación

Puedes ver la documentación completa del proyecto [aquí](public/docs/api-documentation.md)

## Servidor de desarrollo

1. Clonar el repositorio.
2. Renombra el archivo .env.template a .env
3. Ingresa o modifica los datos correspondientes en el archivo .env
4. Crea la base de datos 'trabook' en MySQL con el comando `CREATE DATABASE 'trabook`.
5. Ejecutar el comando `yarn` en la ruta del proyecto para instalar las dependencias.
6. Ejecutar el comando `yarn dev` para iniciar el servidor de desarrollo.
7. Navegar a la página `http://localhost:{PORT}/`. Donde debes reemplazar el {PORT} por la variable de entorno configurada en el paso 3
8. La aplicación cargará automáticamente cada que realice cambios en los archivos.
