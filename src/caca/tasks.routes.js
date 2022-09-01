const { Router } = require('express');
//const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller')

const router = Router();

//router.get('/perfil/busqueda/:usuario_perfil', getUserName);

router.post('/perfil', createUser);

router.delete('/perfil/:id', deleteUser);

router.update('/perfil/:id', updateUser);

router.get('/perfil/:id', getUser);

router.get('/perfil/:id_usuario/publicaciones/:id_publicaciones', getPublicacion);

router.post('/perfil/:id_usuario/publicaciones', createPublicacion);

router.delete('/perfil/publicaciones/:id', deletePublicacion);

router.get('/matcheo/:id', getMatches);

router.get('/matcheo/:id/:publicaciones', getMatchesProfiles);

router.post('/etiquetas/:id', postEtiquetas);

router.get('/etiquetas/:id', getEtiquetasUser);

module.exports = router;