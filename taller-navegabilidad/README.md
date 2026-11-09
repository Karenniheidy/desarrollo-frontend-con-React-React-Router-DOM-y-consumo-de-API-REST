# Desarrollo frontend con React Router DOM y Consumo de API REST

Aplicación web full-stack desarrollada como parte de la formación en **Análisis y Desarrollo de Software (ADSO)** del SENA. El sistema implementa una arquitectura cliente-servidor desacoplada, conectando una interfaz de usuario interactiva basada en **React (Vite)** y **React Router DOM** con un servidor backend de alto rendimiento construido en **Node.js y Express**, respaldado por una base de datos relacional en **MySQL**.

---

## Características principales

* **Navegación SPA dinámica:** Enrutamiento cliente-servidor fluido mediante React Router DOM (vistas de Login, Registro, Dashboard, Productos y Contacto).
* **Arquitectura RESTful:** Endpoints normalizados en Express para las operaciones de consulta (`GET`) y registro (`POST`) de inventarios.
* **Seguridad en base de datos:** Implementación de consultas SQL parametrizadas para la prevención absoluta de inyecciones SQL (*SQL Injection*).
* **Gestión de orígenes cruzados (CORS):** Configuración de políticas de acceso para permitir la comunicación síncrona entre puertos distintos (Frontend en `5173` y Backend en `3001`).
* **Control de estado reactivo:** Uso riguroso de hooks de React (`useState`, `useNavigate`) para la manipulación y renderizado eficiente del DOM sin recargas completas.

---

## Tecnologías y dependencias

### Frontend (`taller-navegabilidad`)
* **React:** Librería principal de componentes de interfaz.
* **Vite:** Herramienta de empaquetado y entorno de desarrollo ultrarrápido.
* **React Router DOM:** Gestor de rutas y navegación de página única.

### Backend (`taller-navegabilidad-backend`)
* **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
* **Express:** Framework web minimalista para la creación de la API REST.
* **MySQL2:** Conector optimizado para la gestión de bases de datos relacionales.
* **CORS:** Middleware de recursos cruzados.

---

## Clonación y configuración del proyecto

Si deseas clonar y ejecutar este proyecto en tu entorno local de manera libre, sigue las instrucciones a continuación:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando (sin necesidad de tokens ni credenciales):

```bash
git clone [https://github.com/Karenniheidy/desarrollo-frontend-con-React-React-Router-DOM-y-consumo-de-API-REST.git](https://github.com/Karenniheidy/desarrollo-frontend-con-React-React-Router-DOM-y-consumo-de-API-REST.git)