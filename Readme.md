# Prueba_SegundoParcial

## Descripción
`Prueba_SegundoParcial` es una aplicación web para la gestión de evaluaciones académicas. Utiliza una arquitectura de tres capas que incluye una interfaz de usuario (capa de presentación), lógica de negocio (backend) y acceso a datos (almacenamiento persistente).

## Objetivo del Proyecto
El proyecto tiene como objetivo principal ofrecer una solución simple y eficaz para la creación y gestión de evaluaciones académicas, facilitando la tarea de organizar preguntas y respuestas en un entorno educativo.

### Capa de Presentación (Frontend)
Desarrollado con React, el frontend ofrece una interfaz de usuario interactiva y amigable. Los usuarios pueden visualizar evaluaciones existentes y agregar nuevas evaluaciones, incluyendo preguntas y opciones de respuesta.

- **Tecnologías:** React
- **Funcionalidades Principales:**
  - Visualización de evaluaciones
  - Formulario para agregar nuevas evaluaciones
- **Archivos Relevantes:**
  - `App.jsx`
  - `components/QuestionForm.jsx`
  - `App.css`
  - `components/QuestionForm.css`

### Lógica de Negocio (Backend)
El backend, construido con Node.js y Express, gestiona las solicitudes del frontend y procesa la lógica de negocio. Ofrece funcionalidades para obtener y almacenar evaluaciones.

- **Tecnologías:** Node.js, Express
- **Funcionalidades Principales:**
  - Rutas para manejar solicitudes de evaluaciones
  - Lógica para agregar y recuperar evaluaciones
- **Archivos Relevantes:**
  - `server.js`
  - `routes/evaluations.js`

### Acceso a Datos
Esta capa se encarga del almacenamiento persistente de las evaluaciones, utilizando un archivo JSON (`evaluations.json`). 

- **Tecnología:** Sistema de archivos (File System)
- **Funcionalidades Principales:**
  - Almacenamiento y recuperación de evaluaciones en formato JSON
- **Archivo Relevante:**
  - `database/evaluations.json`
  - `database/evaluations.js` (Gestión de acceso a datos)


## Requisitos Previos

Asegúrate de tener instalado Node.js en tu sistema antes de ejecutar la aplicación. Puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).

## Estructura del Proyecto

El proyecto sigue la estructura de una aplicación de 3 capas:

``` markdown
Prueba_SegundoParcial/
│
├── backend/
│   ├── routes/
│   │   └── evaluations.js
│   │
│   ├── server.js
│   └── package.json
│
├── database/
│   ├── evaluations.json
│   └── evaluations.js
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuestionForm.jsx
│   │   │   ├── QuestionForm.css
│   │   │   └── ...
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```
## Implementación Paso a Paso

### 1. Clona el Repositorio

```bash
git clone https://github.com/RicardoRivadeneira/PruebaWebA_2P/tree/master
```
### 2. Configura el Backend
``` bash
cd backend
npm init -y
npm install express cors
```
### 3. Configura el Frontend
```bash
cd frontend
npm init -y
npm install react react-dom
npm install -D @vitejs/plugin-react eslint
```
### 4. Inicia la Aplicación Frontend
```bash
cd frontend
npm run dev
```
La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

### 5. Inicia el Servidor Backend
```bash
cd backend
node server.js
```
El servidor estará disponible en [http://localhost:3001](http://localhost:3001).

### 6. Abre tu Navegador
Ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación de Ingreso de Evaluaciones.

## Elaborado por:
Ricardo Rivadeneira