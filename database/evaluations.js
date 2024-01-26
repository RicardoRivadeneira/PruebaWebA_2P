// database/evaluations.js
const fs = require('fs');
const path = require('path');

const evaluationsFilePath = path.join(__dirname, 'evaluations.json');

function getEvaluations() {
  const data = fs.readFileSync(evaluationsFilePath, 'utf-8');
  return JSON.parse(data);
}

function addEvaluation(newEvaluation) {
  const evaluations = getEvaluations();
  newEvaluation.id = evaluations.length + 1;  // Asigna un nuevo ID
  evaluations.push(newEvaluation);
  fs.writeFileSync(evaluationsFilePath, JSON.stringify(evaluations, null, 2));
}

module.exports = { getEvaluations, addEvaluation };
