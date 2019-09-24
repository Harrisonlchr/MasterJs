'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var router = express.Router();

router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);
router.get('/projects', projectController.getProjects);
router.put('/project/:id', projectController.updateProjects);
router.delete('/project/:id', projectController.deleteProject);

module.exports = router;
