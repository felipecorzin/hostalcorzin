const { Router } = require('express');
const { comprobarTokenUsuario } = require('../helpers/jwt');
const { crearPlan,findAll,findOne,deletePlan,deleteAll } = require('../controllers/plan');

const router = Router();

// Crear plan
router.post('/crearPlan',crearPlan);
// Obtener todos los planes
router.get('/findAll',findAll );
// Obtener un plan por id
router.get('/:id',findOne );
// Eliminar un plan por id
router.delete('/:id',deletePlan );
// Eliminar todos los planes
router.delete('/deleteAll',deleteAll );
module.exports = router;