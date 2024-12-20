# Financial Management Server

Este proyecto tiene como objetivo proporcionar una solución integral para la gestión de finanzas personales. La API permite a los usuarios registrar y monitorear sus transacciones financieras, crear y gestionar presupuestos, y generar reportes detallados sobre su situación financiera. Además, incluye funcionalidades de autenticación y autorización para asegurar que cada usuario tenga acceso seguro y personalizado a su información financiera.

## Características

- Gestión de transacciones financieras
- Creación y seguimiento de presupuestos
- Generación de reportes financieros
- Autenticación y autorización de usuarios

## Requisitos

- Node.js >= 14.x
- Postgres >= 14.x

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/...
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd carpeta descargada
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   `env
   - PORT="puerto_local"
   - TYPE_DB="tipo_base_dato"
   - HOST_DB="hosting_localhost"
   - USER_DB="usuario_base_dato"
   - PASSWORD_DB="password_base_dato"
   - PORT_DB="puerto_base_dato"
   - NAME_DB="nombre_base_dato"
     `

## Uso

1. Inicia el servidor:
   ```bash
   npm run dev
   ```
2. La API estará disponible en `http://localhost:PORT`.

## Endpoints

### User

- `POST /users` - Creación de usuario
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por id
- `PUT /users/:id` - Actualizar un usuario por id
- `DELETE /users/:id` - Eliminar un usuario por id

### Ingresos y Gastos

### Login y Registro