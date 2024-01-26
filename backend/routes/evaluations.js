const express = require('express');
const router = express.Router();
const db = require('../../database/evaluations');

// Obtener la lista de evaluaciones
router.get('/', (req, res) => {
  const evaluations = db.getEvaluations();
  res.json(evaluations);
});

// Agregar una nueva evaluación
router.post('/', (req, res) => {
  const newEvaluation = req.body;
  db.addEvaluation(newEvaluation);
  res.json(db.getEvaluations());
});

module.exports = router;
