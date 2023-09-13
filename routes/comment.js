const { Router } = require('express');
const Comment   = require('../models/Comment');
const Usuario = require('../models/Usuario');
const { comprobarTokenUsuario,checkUsuarioExisted } = require('../helpers/jwt');
const { createComment,findAll,findOne } = require('../controllers/comment');

const router = Router();

// Crear plan
router.post('/createComment',createComment);
// Obtener todos los planes
router.get('/findAll',findAll );
// Obtener un plan por id
router.get('/:id',findOne );
// Eliminar un plan por id
//router.delete('/:id',deletePlan );
// Eliminar todos los planes
//router.delete('/deleteAll',deleteAll );
module.exports = router;