// backend/server.js
const express = require('express');
const cors = require('cors');
const evaluationsRoute = require('./routes/evaluations');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usa la ruta de evaluaciones
app.use('/evaluations', evaluationsRoute);

app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
